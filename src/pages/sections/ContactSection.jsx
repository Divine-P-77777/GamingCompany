import React, { useState } from 'react'
import { useSelector } from 'react-redux' // or wherever your isDarkMode comes from
import { Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT_INFO } from '../../lib/constants'
import { Card } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Textarea from '../../components/ui/Textarea'
import MapContainer from './MapContainer'

const ContactSection = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // common text color for foregrounds:
  const textColor = isDarkMode ? 'text-white' : 'text-black'
  const mutedTextColor = isDarkMode ? 'text-cyan-100/80' : 'text-gray-800'
  const borderClass = isDarkMode ? 'dark:border-border/50' : 'border border-gray-300'

  return (
    <section
      id="contact"
      className={`py-20 ${isDarkMode ? 'dark:bg-background/50' : 'bg-white/80'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 gradient-text ${textColor}`}>
            Get In Touch
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${mutedTextColor}`}>
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className={`p-8 ${borderClass}`}>
              <h3 className={`text-2xl font-bold mb-6 gradient-text ${textColor}`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="w-5 h-5 gaming-primary" />,
                    title: 'Customer Support',
                    info: CONTACT_INFO.support
                  },
                  {
                    icon: <Mail className="w-5 h-5 gaming-secondary" />,
                    title: 'Business Inquiries',
                    info: CONTACT_INFO.business
                  },
                  {
                    icon: <Phone className="w-5 h-5 gaming-accent" />,
                    title: 'Phone',
                    info: CONTACT_INFO.phone
                  },
                  {
                    icon: <MapPin className="w-5 h-5 gaming-warning" />,
                    title: 'Address',
                    info: CONTACT_INFO.address
                  }
                ].map(({ icon, title, info }) => (
                  <div key={title} className="flex items-center space-x-3">
                    {icon}
                    <div>
                      <h4 className={`font-semibold mb-1 ${textColor}`}>{title}</h4>
                      <p className={mutedTextColor}>{info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div>
              <h3 className={`text-xl font-bold mb-4 gradient-text ${textColor}`}>
                Find Us Here
              </h3>
              <MapContainer />
            </div>
          </div>

          <div>
            <Card className={`p-8 ${borderClass}`}>
              <h3 className={`text-2xl font-bold mb-6 gradient-text ${textColor}`}>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${textColor}`}>
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${textColor}`}>
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${textColor}`}>
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${textColor}`}>
                    Message
                  </label>
                  <Textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    className="resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
