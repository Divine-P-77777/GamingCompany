import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../../components/ui/Card'

const AboutSection = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <section
      id="about"
      className={`py-20 ${
        isDarkMode ? 'dark:bg-background/50' : 'bg-white/80'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-5xl font-bold mb-4 gradient-text ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              About GameVault
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto ${
                isDarkMode ? 'text-cyan-100/80' : 'text-gray-800'
              }`}
            >
              Your trusted destination for digital gaming experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-cyan-100/80' : 'text-gray-900'
                }`}
              >
                Founded by passionate gamers, GameVault has grown to become one
                of the leading digital game distribution platforms. We believe
                that great games should be accessible to everyone, which is why
                we offer competitive prices and frequent sales.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-cyan-100/80' : 'text-gray-900'
                }`}
              >
                Our curated collection includes everything from the latest AAA
                releases to hidden indie gems. With our secure download system
                and 24/7 customer support, your gaming experience is our top
                priority.
              </p>

              <div
                className={`grid grid-cols-2 gap-6 mt-8 ${
                  isDarkMode ? '' : 'border-t border-gray-300 pt-6'
                }`}
              >
                <Card
                  className={`p-6 text-center ${
                    isDarkMode ? 'dark:border-border/50' : 'border border-gray-300'
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-2 gaming-secondary ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    99.9%
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? 'text-cyan-100/70' : 'text-gray-700'
                    }`}
                  >
                    Uptime
                  </p>
                </Card>
                <Card
                  className={`p-6 text-center ${
                    isDarkMode ? 'dark:border-border/50' : 'border border-gray-300'
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-2 gaming-accent ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    24/7
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? 'text-cyan-100/70' : 'text-gray-700'
                    }`}
                  >
                    Support
                  </p>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Card
                className={`p-8 ${
                  isDarkMode ? 'dark:border-border/50' : 'border border-gray-300'
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 gradient-text ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  Why Choose GameVault?
                </h3>
                <ul className="space-y-4">
                  {[
                    { color: 'gaming-primary', text: 'Instant downloads & updates' },
                    { color: 'gaming-secondary', text: 'Cloud saves & cross-platform sync' },
                    { color: 'gaming-accent', text: 'Regular sales & discounts' },
                    { color: 'gaming-warning', text: 'Community features & reviews' },
                  ].map(({ color, text }) => (
                    <li
                      key={text}
                      className={`flex items-center ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 bg-${color} rounded-full flex items-center justify-center mr-3`}
                      >
                        <span className={` ${isDarkMode ? 'text-white' : 'text-black'} text-sm`}>✓</span>
                      </div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
