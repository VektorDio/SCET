import { MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import './global.module.css';
import Menu from './pages/menu';
import Course, {taskRefs, chapterRefs} from './pages/course';
import FrameBar from './components/frameBar';
import Settings from './pages/settings/settings';
import CourseSettings from './pages/courseSettings/settings';

export const Font = createContext(26)
export const Completion = createContext(0)
export const CourseScroll = createContext(0)
export const CourseResolution = createContext([1920, 1080])
export const MenuResolution = createContext([780, 560])
export default function App() {
  const [hasFrame, setHasFrame] = useState(false)

  const [menuResolution, setMenuResolution] = useState([780, 560])

  const [courseResolution, setCourseResolution] = useState([1920, 1080])

  const [courseFont, setCourseFont] = useState(26)

  const [courseScroll, setCourseScroll] = useState(0)

  const [courseCompletion, setCourseCompletion] = useState(0)

  useEffect(() => {
    // @ts-ignore
    window.electron.ipcRenderer.invoke('readJson').then((result) => {
      if (result.menuResolution !== undefined) {
        setMenuResolution(result.menuResolution)
      } else {
        handleMenuResolutionChange(menuResolution)
      }
      if (result.courseResolution !== undefined){
        setCourseResolution(result.courseResolution)
      } else {
        handleCourseResolutionChange(courseResolution)
      }
      if (result.courseFont !== undefined){
        setCourseFont(result.courseFont)
      } else {
        handleCourseFontChange(courseFont)
      }
      if (result.courseCompletion !== undefined){
        setCourseCompletion(result.courseCompletion)
      } else {

      }
      if(result.hasFrame !== undefined){
        setHasFrame(result.hasFrame)
      } else {
        handleFrameChange(hasFrame)
      }
    })
  }, [hasFrame, menuResolution, courseResolution, courseFont, courseCompletion])

  async function handleFrameChange(value) {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
      hasFrame: value,
    })
    setHasFrame(value)
  }

  async function handleMenuResolutionChange(value) {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
      menuResolution: value,
    })
    setMenuResolution(value)
  }

  async function handleCourseResolutionChange(value) {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
      courseResolution: value,
    })
    setCourseResolution(value)
  }

  async function handleCourseFontChange(value) {
    // @ts-ignore
    await window.electron.ipcRenderer.sendMessage('writeJson', {
      courseFont: value,
    })
    setCourseFont(value)
  }

  async function handleCourseRestart() {
    setCourseCompletion(0)
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
        },
      })
  }

  return (
    <>
      <FrameBar display={hasFrame}/>
      <div style={{height:(hasFrame) ? "97.5vh" : "100vh", overflow:" hidden"}}>
        <Font.Provider value={{courseFont, handleCourseFontChange}}>
          <Completion.Provider value={{ courseCompletion, setCourseCompletion }}>
            <CourseScroll.Provider value={{courseScroll, setCourseScroll}}>
              <CourseResolution.Provider value={{courseResolution, handleCourseResolutionChange}}>
                <MenuResolution.Provider value={{menuResolution, handleMenuResolutionChange}}>
                  <Router>
                    <Routes>
                      <Route path="/" element={<Menu/>} />
                      <Route path="/pages/course" element={<Course />} />
                      <Route path="/pages/settings"
                             element={
                                <Settings
                                   frame={hasFrame}
                                   onFrameChange={handleFrameChange}
                             />
                      }
                      />
                      <Route path="/pages/courseSettings"
                             element={
                                <CourseSettings
                                     onCourseRestart={handleCourseRestart}
                                />
                             }
                      />
                      {
                        taskRefs.map((e, i) => (
                          <>
                            <Route key={i + "a"} path={`/tasks/${i+1}/info`} element={e[0]}/>
                            <Route key={i + "b"} path={`/tasks/${i+1}/task`} element={e[1]}/>
                          </>
                        ))
                      }
                      {

                        chapterRefs.map((e, i) => (
                          <Route key={i + "c"} path={`/chapters/${i+1}`} element={e[0]}/>
                          )
                        )
                      }
                      {
                        chapterRefs.map((e, i) => (
                          e[1].map((el, j) => {
                            return (
                            <Route key={i + "d"} path={`/chapters/${i+1}/${j+1}`} element={el}/>
                          )
                          }
                          )
                        ))
                      }
                    </Routes>
                  </Router>
                </MenuResolution.Provider>
              </CourseResolution.Provider>
            </CourseScroll.Provider>
          </Completion.Provider>
        </Font.Provider>
      </div>
    </>
  );
}
