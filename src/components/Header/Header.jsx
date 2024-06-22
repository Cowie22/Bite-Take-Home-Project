import React, { memo } from 'react'

import MainNav from './MainNav/MainNav'

const Header = (props) => {
  return (
    <header>
      <div>
        <MainNav />
      </div>
    </header>
  )
}

export default memo(Header)
