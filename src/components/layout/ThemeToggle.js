import React from 'react'

const ThemeToggle = ( {dark, setDark} ) => {
    const darkMode= 'DARK';
    const lightMode = 'LIGHT';
    
    return (
    <div>
        {dark ? darkMode : lightMode}
        <button onClick={()=>{setDark(!dark)}}>BTN</button>
    </div>
  )
}

export default ThemeToggle