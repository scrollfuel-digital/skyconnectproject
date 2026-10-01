import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import ProjectPage from '../pages/ProjectPage.jsx'
import Blog7Crown from '../pages/Blog7Crown.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project-details" element={<ProjectPage />} />
      <Route path="/blog" element={<Blog7Crown />} />
      <Route path="/journal" element={<Blog7Crown />} />
      <Route path="/7-things-to-check-before-buying-a-flat-in-2026" element={<Blog7Crown />} />
    </Routes>
  )
}
