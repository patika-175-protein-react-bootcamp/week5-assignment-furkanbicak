import React, { useState } from "react";
import "../DarkMode.css"
import SunIcon from "../constans/SunIcon.png"
import MonoIcon from "../constans/MoonIcon.png"

const DarkMode = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    const [status, setStatus] = useState(true);
    
    if(localStorage){
        theme = localStorage.getItem("theme")
    }

    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme);
    }else{
        body.classList.add(lightTheme );
    }
    
    const switchTheme = (props) => {
        if(theme === darkTheme){
            setStatus(true);
            body.classList.replace(darkTheme, lightTheme);
            props.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme; 
        }else{
            setStatus(false)
            body.classList.replace(lightTheme, darkTheme);
            props.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme; 
        }
    }

    return(
        <button
            className={theme === "dark" ? clickedClass : ""} 
            id="darkMode"
            onClick={(props) => switchTheme(props)}
        >
        <img src={status ? MonoIcon : SunIcon} alt="DarkLight"/>
        </button>
        
    );
};

export default DarkMode;