import React , {useState, useEffect} from "react";
import useTheme , { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from './components/ThemeBtn.jsx';
import Card from './components/Card.jsx';


import './App.css'

function App() {
  const [themeMode , setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  // actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  const darkTheme = () => {
    setThemeMode("dark")
  }


  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
