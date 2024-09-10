import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import './global.module.css';
import Menu from './pages/menu';
import FrameBar from './components/frameBar';
import Settings from './pages/settings/settings';
import CourseSettings from './pages/courseSettings/settings';
import Login from './pages/login';

import SCECourse, { taskRefs, chapterRefs } from '../courses/SCECourse';

const localSettings = await window.electron.ipcRenderer.invoke('readSettings');
const courseSignatures = [
  { id: 'SCE_course', amountOfTasks: taskRefs.length },
  { id: 'test', amountOfTasks: 2 },
];

export const AppSettings = createContext(localSettings);
export const CourseData = createContext({});
export const CourseId = createContext(null);

export default function App() {
  const [settings, setSettings] = useState(localSettings);
  const [courseId, setCourseId] = useState();
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    async function getCourseData() {
      const courseLocalData = await window.electron.ipcRenderer.invoke(
        'readCourseData',
        courseId
      );
      if (courseLocalData === undefined) {
        const { id: selectedCourseId, amountOfTasks } = courseSignatures.find(
          (e) => e.id === courseId
        );
        initializeCourse(selectedCourseId, amountOfTasks);
      } else {
        setCourseData(courseLocalData);
      }
    }

    if (courseId !== undefined) {
      getCourseData();
    }
  }, [courseId]);

  function handleCourseDataChange(data) {
    // @ts-ignore
    window.electron.ipcRenderer.sendMessage('updateCourseData', {
      data,
      courseId,
    });
    updateWithCompletion(data);
  }

  function handleSettingsChange(value) {
    // @ts-ignore
    window.electron.ipcRenderer.sendMessage('updateSettings', value);
    setSettings((prev) => ({ ...prev, ...value }));
  }

  function updateWithCompletion(data) {
    const newCourseData = { ...courseData, ...data };
    let taskCompletionCounter = 0;

    for (const property in newCourseData) {
      if (
        Object.hasOwn(newCourseData[property], 'completed') &&
        newCourseData[property].completed
      ) {
        taskCompletionCounter += 1;
      }
    }

    newCourseData.courseCompletion =
      (taskCompletionCounter / taskRefs.length) * 100; // calculating percentage based on amount of tasks
    setCourseData(newCourseData);
    window.electron.ipcRenderer.sendMessage('updateCourseData', {
      data: newCourseData,
      courseId,
    });
  }

  function initializeCourse(selectedCourseId, amountOfTasks) {
    const data = {
      courseCompletion: 0,
    };
    for (let i = 0; i < amountOfTasks; i++) {
      // @ts-ignore
      data[`task${i + 1}`] = {
        completed: false,
        bestTime: 0,
        tries: 0,
      };
    }
    setCourseData(data);
    window.electron.ipcRenderer.sendMessage('updateCourseData', {
      data,
      courseId: selectedCourseId,
    });
  }

  function onCourseRestart() {
    const { selectedCourseId, amountOfTasks } = courseSignatures.find(
      (e) => e.id === courseId
    );
    initializeCourse(selectedCourseId, amountOfTasks);
  }

  const taskInfoRoutes = taskRefs.map((e, i) => (
    <Route key={`${i}a`} path={`/tasks/${i + 1}/info`} element={e[0]} />
  ));

  const taskRoutes = taskRefs.map((e, i) => (
    <Route key={`${i}b`} path={`/tasks/${i + 1}/task`} element={e[1]} />
  ));

  const chapterRoutes = chapterRefs.map((e, i) => (
    <Route key={`${i}c`} path={`/chapters/${i + 1}`} element={e[0]} />
  ));

  const subchaptersRoutes = chapterRefs.map((e, i) =>
    e[1].map((el, j) => {
      return (
        <Route
          key={`${i}d`}
          path={`/chapters/${i + 1}/${j + 1}`}
          element={el}
        />
      );
    })
  );

  document.documentElement.style.fontSize = `${settings.fontSize}px`; // setting fontsize to html element

  return (
    <>
      <FrameBar display={settings.hasFrame} />
      <div
        style={{
          height: settings.hasFrame ? '97.5vh' : '100vh',
          overflow: 'hidden',
        }}
      >
        <AppSettings.Provider value={{ settings, handleSettingsChange }}>
          <CourseData.Provider value={{ courseData, handleCourseDataChange }}>
            <CourseId.Provider value={{ courseId, setCourseId }}>
              <Router>
                <Routes>
                  {/* <Route path="/" element={<Login />} /> */}
                  <Route path="/" element={<Menu />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/pages/settings" element={<Settings />} />
                  <Route
                    path="/pages/courseSettings"
                    element={
                      <CourseSettings onCourseRestart={onCourseRestart} />
                    }
                  />
                  <Route path="/pages/course" element={<SCECourse />} />
                  {taskInfoRoutes}
                  {taskRoutes}
                  {chapterRoutes}
                  {subchaptersRoutes}
                </Routes>
              </Router>
            </CourseId.Provider>
          </CourseData.Provider>
        </AppSettings.Provider>
      </div>
    </>
  );
}
