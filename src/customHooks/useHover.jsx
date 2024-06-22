import React, { useState, useEffect, useContext, useCallback } from 'react'

const useHover = (initialState) => {
  const [isHovered, setIsHovered] = useState(initialState)

  const hover = useCallback((val) => setIsHovered(val), [setIsHovered])

  return [isHovered, hover]
}

export default useHover
