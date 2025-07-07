import React from 'react'
import { useSelector } from 'react-redux'
import { Gamepad2, Twitter, Facebook, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ]

  const footerSections = [
    {
      title: 'Games',
      links: ['New Releases', 'Best Sellers', 'Free Games', 'Coming Soon']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Bug Reports', 'Community']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press Kit', 'Partnerships']
    }
  ]

  return (
    <footer
      className={`border-t border-border py-12 ${
        isDarkMode ? 'bg-[#0c0e27]/90' : 'bg-gray-100'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 animate-slide-in-up">
            <div className="flex items-center space-x-2">
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
            <p
              className={`text-gray-600 ${
                isDarkMode ? 'text-cyan-100/70' : ''
              }`}
            >
              Your ultimate destination for digital gaming experiences. Discover, play, and connect with gamers worldwide.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div
              key={section.title}
              className="space-y-4 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4
                className={`text-lg font-semibold ${
                  isDarkMode ? 'text-cyan-100' : 'text-black'
                }`}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`hover:text-primary transition-colors ${
                        isDarkMode ? 'text-cyan-100/70' : 'text-gray-600'
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-primary transition-colors hover:scale-110 transform ${
                    isDarkMode
                      ? 'text-cyan-100/70 dark:hover:text-gaming-primary'
                      : 'text-gray-600'
                  }`}
                >
                  <IconComponent
                    className={`w-6 h-6 ${
                      isDarkMode ? 'hover:animate-glow-pulse' : ''
                    }`}
                  />
                </a>
              )
            })}
          </div>

          <div className={`text-center md:text-right ${
            isDarkMode ? 'text-cyan-100/70' : 'text-gray-600'
          } text-sm`}>
            <p>
              © 2024 GameVault. All rights reserved. Made for gamers, by gamers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
