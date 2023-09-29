import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';
const Tasks = lazy(() => import('../pages/Tasks'));
const About = lazy(() => import('../pages/About'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Tasks />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};
