import React, { useState, useEffect } from 'react'

const useScreenWidth = () => {
  const [width, handleWidth] = useState(undefined)

  useEffect(() => {
    const updateWidth = () => {
      let currentWidth = window.innerWidth
      handleWidth(currentWidth)
    }

    window.addEventListener('resize', updateWidth)

    updateWidth()

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return width
}

export default useScreenWidth
