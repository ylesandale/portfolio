import { useEffect, useState } from 'react'

type useMainBlockReturnType = {
  isMainBlockHidden: boolean
}

export const useMainBlock = (): useMainBlockReturnType => {
  const [isMainBlockHidden, setIsMainBlockHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setIsMainBlockHidden(rect.bottom < 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isMainBlockHidden }
}
