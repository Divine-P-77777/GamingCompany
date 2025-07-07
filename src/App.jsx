import Navigation from './components/Navigation'
import Footer from './components/Footer'
import GamingStore from './pages/GamingStore'
import { useEffect } from 'react'
import './index.css'

function App() {
  // Add responsive viewport handling
  useEffect(() => {
    // Function to handle viewport height for mobile browsers
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial value
    setVhProperty();
    
    // Update on resize and orientation change
    window.addEventListener('resize', setVhProperty);
    window.addEventListener('orientationchange', setVhProperty);
    
    return () => {
      window.removeEventListener('resize', setVhProperty);
      window.removeEventListener('orientationchange', setVhProperty);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0e27] text-black dark:text-cyan-100 overflow-x-hidden flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <GamingStore />
      </main>
      <Footer />
    </div>
  )
}

export default App