import { MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import './global.module.css';
import Menu from './pages/menu';
import Course from './pages/course';
import ChapterOne from './pages/course/chapters/chapterOne';
import TaskInfo1_1 from './pages/course/chapters/chapterOne/tasks/taskOne/info';
import Task from './pages/course/chapters/chapterOne/tasks/taskOne/task';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/pages/course" element={<Course />} />FirstTaskInfo
        <Route path="/chapters/chapterOne" element={<ChapterOne/>}/>
        <Route path="/chapterOne/tasks/taskOne/info" element={<TaskInfo1_1/>}/>
        <Route path="/chapterOne/tasks/taskOne/task" element={<Task/>}/>
      </Routes>
    </Router>
  );
}
