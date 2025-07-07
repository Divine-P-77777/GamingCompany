import React from 'react'

const MapContainer = ({ isDarkMode }) => (
  <div className="w-full h-64 rounded-lg border overflow-hidden relative">
    <iframe
      title="GameVault Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086441611428!2d-122.42324648468187!3d37.77492927975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a80e8a96b%3A0x4f6c4d01912e4d4e!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1696513214351!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <div
      className={`absolute top-4 left-4 rounded-lg p-2 border z-10 backdrop-blur-sm ${
        isDarkMode
          ? 'bg-white/20 border-white text-white'
          : 'bg-background/80 border-gray-300 text-black'
      }`}
    >
      <p className="text-sm font-medium">GameVault HQ</p>
      <p className="text-xs opacity-80">Tech Valley, CA</p>
    </div>
  </div>
)

export default MapContainer
