import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import loadingf from '../assets/BUFFERING1-ezgif.com-video-to-gif-converter.gif'
import loadingHomef from '../assets/LOADING SCREEN HOMEPAGE (1).gif'

export default function RouteTransitionWrapper({ children }) {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [loadingHome, setLoadingHome] = useState(false)

  useEffect(() => {
  let timer

  const isHomePage = location.pathname === '/home' || location.pathname === '/'
  const isInstantPage = [
    '/program',
    '/program-kerja',
    '/about/about-us',
    '/about/visi&misi',
    '/about/arahan-strategis'
  ].includes(location.pathname)

  const hasHash = location.hash // contoh: #my-section

  if (isHomePage) {
    setLoading(false)
    // Hanya scroll to top jika tidak ada hash
    if (!hasHash) window.scrollTo(0, 0)
  } else if (isInstantPage) {
    setLoading(false)
  } else {
    setLoading(true)
    timer = setTimeout(() => {
      setLoading(false)
      // Sama, scroll to top kalau gak ada hash
      if (!hasHash) window.scrollTo(0, 0)
    }, 500)
  }

  return () => clearTimeout(timer)
}, [location.pathname, location.hash])

  // Loading global
  if (loading) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <img src={loadingf} alt="Loading..." className="w-full h-auto max-w-[600px]" />
      </div>
    )
  }

  // Loading khusus home
  if (loadingHome) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <img src={loadingHomef} alt="Loading Home..." className="w-full h-screen object-cover" />
      </div>
    )
  }

  // Render konten utama
  return children
}
