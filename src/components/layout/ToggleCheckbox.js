import React, { Fragment } from 'react'

const ToggleCheckbox = () => {
    function switchTheme(e) {
        let main = document.querySelector('#root');
      
        if (e.target.checked) {
            //document.documentElement.setAttribute('data-theme', 'dark');
            main.setAttribute("style", "color:white; background-color:#3D3B3B;");
            //document.querySelector('nav').setAttribute('style','background-color:black;')
        }
        else {
            //document.documentElement.setAttribute('data-theme', 'light');
            main.setAttribute("style", "color:black; background-color:white;");
        }    
    }
    
    return (
        <Fragment>
            <div className="theme-switch-wrapper">
                <i className="fas fa-adjust" style={{paddingRight: '0.5rem'}}></i>
                  <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" onChange={e => switchTheme(e)}/>
                    <div className="slider round" style={{height:'2rem'}}></div>
                  </label>
                </div>
        </Fragment>
    )
}

export default ToggleCheckbox
