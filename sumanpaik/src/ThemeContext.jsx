import React, {useState} from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(false)
    function switchTheme() {
        setTheme(prevTheme => !prevTheme)
    }

    return(
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export {ThemeContextProvider, ThemeContext}