import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import loadingf from '../assets/BUFFERING1-ezgif.com-video-to-gif-converter.gif'

export default function RouteTransitionWrapper({ children }) {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (location.pathname === '/home') {
      setLoading(false)
      window.scrollTo(0, 0)
      return
    }
    else if(location.pathname === '/program-kerja' || location.pathname === "/about/about-us" || location.pathname === "/about/visi&misi" || location.pathname === "/about/arahan-strategis"){
        setLoading(false)
        return
    }

    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)

        window.scrollTo(0, 0)
    }, 500)

    return () => clearTimeout(timer)
  }, [location.pathname]) 

  if (loading) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <img src={loadingf} alt="Loading..." className="w-full h-auto max-w-[600px]" />
      </div>
    )
  }

  return children
}