import { MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import './global.module.css';
import Menu from './pages/menu';
import Course, {taskRefs, chapterRefs} from './pages/course';
import FrameBar from './components/frameBar';
import Settings from './pages/settings/settings';
import CourseSettings from './pages/courseSettings/settings';

export const Font = createContext(0)
export const Completion = createContext(0)
export default function App() {
  const [hasFrame, setHasFrame] = useState(false)
  const [menuResolution, setMenuResolution] = useState("Маленький екран")
  const [courseResolution, setCourseResolution] = useState("Великий екран")

  const [courseFont, setCourseFont] = useState("Маленький шрифт")

  const context = {
    courseFont, setCourseFont
  }

  const [courseCompletion, setCourseCompletion] = useState(0)


  useEffect(() => {
    // @ts-ignore
    window.electron.ipcRenderer.invoke('readJson').then((result) => {
      if (result.menuResolution) {
        setMenuResolution(result.menuResolution)
      }
      if (result.courseResolution){
        setCourseResolution(result.courseResolution)
      }
      if (result.courseFont){
        setCourseFont(result.courseFont)
      }
      if (result.courseCompletion){
        setCourseCompletion(result.courseCompletion)
      }
      if(result.hasFrame){
        setHasFrame(result.hasFrame)
      }
    })
  }, [hasFrame, menuResolution, courseResolution, courseFont, courseCompletion])

  async function handleFrameChange() {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
      hasFrame: !hasFrame}
    )
    setHasFrame(!hasFrame)
  }

  async function handleMenuResolutionChange(value) {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
      menuResolution: value}
    )
    setMenuResolution(value)
  }

  async function handleCourseResolutionChange(value) {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
      courseResolution: value}
    )
    setCourseResolution(value)
  }

  async function handleCourseFontChange(value) {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
      courseFont: value}
    )
    setCourseFont(value)
  }

  async function handleCourseRestart() {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
        courseCompletion: 0,
        task1: {
          completed: false,
          bestTime: 0,
          tries: 0,
        },
        task2: {
          completed: false,
          bestTime: 0,
          tries: 0,
        },
        task3: {
          completed: false,
          bestTime: 0,
          tries: 0,
        },
        task4: {
          completed: false,
          bestTime: 0,
          tries: 0,
        },
        task5: {
          completed: false,
          bestTime: 0,
          tries: 0,
        },
        task6: {
          completed: false,
          bestTime: 0,
          tries: 0,
        },
        task7: {
          completed: false,
          bestTime: 0,
          tries: 0,
        },
        task8: {
          completed: false,
          bestTime: 0,
          tries: 0,
        }
      }
    )
  }

  let mr
  let cr
  let cf = 0

  switch (menuResolution){
    case "Маленький екран":
      mr = [520, 400]
      break;
    case "Середній екран":
      mr = [780, 560]
      break;
    case "Великий екран":
      mr = [1280, 960]
      break;
  }

  switch (courseResolution){
    case "Маленький екран":
      cr = [840, 580]
      break;
    case "Середній екран":
      cr = [1280, 960]
      break;
    case "Великий екран":
      cr = [1920, 1080]
      break;
  }

  switch (courseFont){
    case "Маленький шрифт":
      cf = 16
      break;
    case "Середній шрифт":
      cf = 26
      break;
    case "Великий шрифт":
      cf = 34
      break;
  }

  return (
    <>
      <FrameBar display={hasFrame}/>
      <div style={{height:(hasFrame) ? "97.5vh" : "100vh", overflow:" hidden"}}>
        <Font.Provider value={cf}>
          <Completion.Provider value={courseCompletion}>
            <Router>
              <Routes>
                <Route path="/" element={<Menu resolution={mr}/>} />
                <Route path="/pages/course" element={<Course resolution={cr} />} />
                <Route path="/pages/settings"
                       element={
                          <Settings
                             resolution={menuResolution}
                             frame={hasFrame}
                             onFrameChange={handleFrameChange}
                             onResolutionChange={handleMenuResolutionChange}
                       />
                }
                />
                <Route path="/pages/courseSettings"
                       element={
                          <CourseSettings
                               resolution={courseResolution}
                               menuResolution={mr}
                               font={courseFont}
                               onCourseRestart={handleCourseRestart}
                               onFontChange={handleCourseFontChange}
                               onResolutionChange={handleCourseResolutionChange}
                          />
                       }
                />
                {
                  taskRefs.map((e, i) => (
                    <>
                      <Route path={`/tasks/${i+1}/info`} element={e[0]}/>
                      <Route path={`/tasks/${i+1}/task`} element={e[1]}/>
                    </>
                  ))
                }
                {

                  chapterRefs.map((e, i) => (
                    <Route path={`/chapters/${i+1}`} element={e[0]}/>
                    )
                  )
                }
                {
                  chapterRefs.map((e, i) => (
                    e[1].map((el, j) => {
                      return (
                      <Route path={`/chapters/${i+1}/${j+1}`} element={el}/>
                    )
                    }
                    )
                  ))
                }

              </Routes>
            </Router>
          </Completion.Provider>
        </Font.Provider>
      </div>
    </>
  );
}
