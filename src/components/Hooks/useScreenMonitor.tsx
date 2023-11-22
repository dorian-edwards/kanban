import { useEffect, useState } from 'react'

export default function useScreenMonitor() {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 768)

  // attn: could this be extracted into custom hook?
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) return setMobile(true)

      setMobile(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return mobile
}
