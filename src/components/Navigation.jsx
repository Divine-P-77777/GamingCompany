import React, { useState, useEffect } from 'react'
import { Menu, X, Gamepad2, Sun, Moon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/themeSlice'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'games', label: 'Games' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? isDarkMode
          ? 'nav-blur' // your existing dark blurred background class
          : 'bg-white/80 backdrop-blur-md' // white 80% + blur for light mode on scroll
        : (isDarkMode ? 'bg-transparent' : 'bg-white')
    }`}
  >
  
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => scrollToSection('home')}
          >
            {/* Gamepad2 icon with color based on mode */}
            <Gamepad2
              color={isDarkMode ? '#22d3ee' : '#1e293b'} // cyan-400 for dark, slate-800 for light
              size={32}
              className={`w-8 h-8`}
            />
            <span
              className={`text-2xl font-bold gradient-text ${
                isDarkMode ? 'glow-text' : ''
              }`}
            >
              GameVault
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-black/80 hover:text-primary transition-all duration-300 cursor-pointer relative hover:scale-110 ${
                  isDarkMode ? 'text-cyan-100/80' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleToggleTheme}
              className={`p-2 rounded-lg  hover:bg-accent transition-colors ${
                isDarkMode ? 'glow-effect' : ''
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button
              className={`${isDarkMode ? 'text-cyan-100' : 'text-black'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 rounded-lg shadow-lg border border-border ${
              isDarkMode ? 'bg-[#0c0e27]' : 'bg-white'
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-2 hover:bg-muted transition-colors ${
                    isDarkMode ? 'text-cyan-100' : 'text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
