import React from 'react'
import { useSelector } from 'react-redux'
import { Users, Play, Download, Trophy, ChevronDown } from 'lucide-react'
import Button from '../../components/ui/Button'

const HeroSection = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { label: "Active Players", value: "2.5M+", icon: Users },
    { label: "Games Available", value: "15K+", icon: Play },
    { label: "Downloads", value: "50M+", icon: Download },
    { label: "Awards Won", value: "25+", icon: Trophy }
  ]

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 ${
        isDarkMode ? 'bg-background/50' : 'bg-white/80'
      }`}
    >
      <div className="container mx-auto px-6 text-center relative z-10 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mt-30 mb-6 animate-slide-in-up">
            <span className="gradient-text">Your Gaming</span>
            <br />
            <span className={`text-foreground ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
              Adventure
            </span>
            <br />
            <span className="gaming-secondary">Starts Here</span>
          </h1>
          
          <p
            className={`text-xl md:text-2xl mb-8 font-light animate-slide-in-up ${
              isDarkMode ? 'text-cyan-100/70' : 'text-gray-700'
            }`}
          >
            Discover thousands of games, from indie gems to AAA blockbusters. 
            Your next favorite game is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up">
            <Button
              size="lg"
              onClick={() => scrollToSection('games')}
              className={`px-8 py-4 bg-primary hover:bg-primary/90  font-semibold ${isDarkMode ? 'text-cyan-100' : 'text-black'}`}
            >
              <Play className="w-5 h-5 mr-2" color={isDarkMode ? '#22d3ee' : '#1e293b'} />
              Browse Games
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('about')}
              className={`px-8 py-4 border-2 border-primary  hover:bg-primary ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {stats.map((stat) => {
              const IconComponent = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent
                      className={`w-8 h-8 gaming-primary ${
                        isDarkMode ? 'dark:animate-pulse text-cyan-100' : 'text-gray-700'
                      }`}
                    />
                  </div>
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-cyan-100/70' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('games')}
      >
        <ChevronDown className={`w-8 h-8 gaming-primary ${isDarkMode ? 'text-cyan-100' : 'text-primary'}`} />
      </div>
    </section>
  )
}

export default HeroSection
