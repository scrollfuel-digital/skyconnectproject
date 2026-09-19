import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Gallery from '../pages/Gallery.jsx'
import Blog from '../pages/Blog.jsx'
import Contact from '../pages/Contact.jsx'
import CinematicIntroHero from '../components/CinematicIntroHero.jsx'
import NotFound from '../pages/NotFound.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Gallery & Blog hidden from active site (code preserved in VS Code): */}
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      {/* <Route path="/blog" element={<Blog />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/intro" element={<CinematicIntroHero />} />
      <Route path="/elevation" element={<CinematicIntroHero />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
