import React from 'react'

const ThemeToggle = ( {dark, setDark, mobile} ) => {
    /**Icons taken from https://icons8.com/ */
    const moonWhite = <img className="theme-icon" src={process.env.PUBLIC_URL+"/moon-white.png"} alt="moon-icon" width="30px" height="30px"/>;
    const sunWhite = <img className="theme-icon" src={process.env.PUBLIC_URL+"/sun-white.png"} alt="sun-icon" width="30px" height="30px"/>;
    const moon = <img className="theme-icon" src={process.env.PUBLIC_URL+"/moon.png"} alt="moon-icon" width="30px" height="30px"/>;
    const sun = <img className="theme-icon" src={process.env.PUBLIC_URL+"/sun.png"} alt="sun-icon" width="30px" height="30px"/>;
    return (
    <>
        <button className="toggleTheme" onClick={()=>{setDark(!dark)}}>
          {dark ? (mobile ? sun: sunWhite) : (mobile ? moon: moonWhite)}
        </button>
    </>
  )
}

export default ThemeToggle