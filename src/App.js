import React, {useEffect, useState} from 'react'
import useMediaQuery from './hooks/useMediaQuery'

import LineGradient from './components/LineGradient'

import Navbar from './scenes/Navbar'
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import MySkills from './scenes/MySkills'
import Projects from './scenes/Projects'
import Testimonials from './scenes/Testimonials'
import Contact from './scenes/Contact'
import Footer from './scenes/Footer'

function App() {
  
  const [selectedPage, setSelectedPage] = useState('home') // navigation, states will determine which page is rendered

  const isAboveMediumScreens = useMediaQuery('(min-width: 160px)')
  const [isTopOfPage, setIsTopOfPage] = useState(true) // navbar, states will determine if navbar is transparent or not

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage('home')
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // since this is an empty array, this effect will only run once, per react hooks
  
  return (
    <div className="app bg-earthy-brown">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient/>
      <div className='w-5/6 mx-auto md:h-full'>
          <MySkills />
      </div>
      <LineGradient/>
      <div className='w-5/6 mx-auto'>
          <Projects />
      </div>
      <LineGradient/>
      <div className='w-5/6 mx-auto md:h-full'>
          <Testimonials />
      </div>
      <LineGradient/>
      <div className='w-5/6 mx-auto md:h-full'>
          <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
