import React from "react"
import NavigationComp from "./components/NavigationComp"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomeView from "./views/HomeView"
import AboutView from "./views/AboutView"
import SkillsView from "./views/SkillsView"
import ServicesView from "./views/ServicesView"
import ContactView from "./views/ContactView"
import EducationView from "./views/EducationView"
import ExperienceView from "./views/ExperienceView"


export default function() {
  return (
    <div className="flex">
      <NavigationComp />
      <Router>
        <Routes>
          <Route path="/" element={ <HomeView /> } />
          <Route path="/about" element={ <AboutView /> } />
          <Route path="/service" element={ <ServicesView /> } />
          <Route path="/skill" element={ <SkillsView /> } />
          <Route path="/education" element={ <EducationView /> } />
          <Route path="/experience" element={ <ExperienceView /> } />
          <Route path="/contact" element={ <ContactView /> } />
        </Routes>
      </Router>
    </div>
  )
}