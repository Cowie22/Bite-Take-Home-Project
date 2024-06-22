import React, { useState, useEffect, useContext, useCallback } from 'react'

const useToggle = (initialState) => {
  const [isToggled, setIsToggled] = useState(initialState)

  const toggle = useCallback(
    () => setIsToggled((state) => !state),
    [setIsToggled]
  )

  // if (typeof document !== 'undefined') {
  //   let body = document.getElementsByTagName('body')[0]
  //   if (!isToggled) {
  //     body.classList.add('scroll-none')
  //   } else {
  //     body.classList.remove('scroll-none')
  //   }
  // }

  return [isToggled, toggle]
}

export default useToggle
