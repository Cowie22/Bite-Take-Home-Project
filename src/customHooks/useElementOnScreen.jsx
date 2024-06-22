import { useState, useEffect, useRef } from 'react'

const useElementOnScreen = (options) => {
  const contentRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callBack = (entries) => {
    const [entry] = entries
    setIsVisible(entry.boundingClientRect.bottom < entry.rootBounds.bottom)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options)
    if (contentRef.current) {
      observer.observe(contentRef.current)
    }
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
    }
  }, [contentRef, options])

  return [contentRef, isVisible]
}

export default useElementOnScreen
