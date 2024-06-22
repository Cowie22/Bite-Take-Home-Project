'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useReducer,
} from 'react'

const AppContext = createContext()

const AppWrapper = ({ children }) => {
  const [currentPage, handleCurrentPage] = useState('')

  // Handle the current page of the site
  const updateCurrentPage = useCallback(
    (val) => {
      handleCurrentPage(val)
    },
    [handleCurrentPage]
  )

  // Function that when called with true, will stop the user from being able to
  // Scroll and visa versa
  const handleBodyScroll = (val) => {
    if (typeof document !== 'undefined') {
      let body = document.getElementsByTagName('body')[0]
      if (val === true) {
        body.classList.add('scroll-none')
      } else {
        body.classList.remove('scroll-none')
      }
    }
  }

  let sharedState = {
    currentPage,
    updateCurrentPage,
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export { AppContext, AppWrapper }

// Use this link for separating out context

// https://devtrium.com/posts/how-use-react-context-pro#use-react-context-with-a-custom-provider
