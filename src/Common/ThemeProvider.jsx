import React,{useEffect,useContext,createContext,useState} from "react";

export const ThemeContext = createContext();

export const useTheme=()=>{
    return useContext(ThemeContext);
}

export const ThemeProvider=({children})=>{

    //sets theme variable to the value stored in local storage or it sets theme to light

    const [theme,setTheme] =useState(()=>{
        return localStorage.getItem("theme")||'light';
    })

    //updates theme varibale stored localstorage to the current theme
    //and creates a custom attribute data-theme and sets it to theme value

    useEffect(()=>{
        document.body.setAttribute("data-theme",theme);
        localStorage.setItem("theme",theme);
    },[theme])

    //toggleTheme function updates the state of the theme object when it is called

    const toggleTheme=()=>{
        console.log("theme changed");
        setTheme((prevTheme)=> (prevTheme === "light"?"dark":"light"));
    }
    // const toggleTheme = () => {
    //     console.log("theme changed");
    //     setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    // }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

    
}