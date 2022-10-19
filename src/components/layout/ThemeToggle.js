import React from 'react'

const ThemeToggle = ( {dark, setDark} ) => {
  return (
    <div>
        {dark ? 'DARK' : 'LIGHT'}
        <button onClick={()=>{setDark(!dark)}}>BTN</button>
    </div>
  )
}

export default ThemeToggle