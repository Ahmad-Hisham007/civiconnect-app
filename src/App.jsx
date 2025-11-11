
import { useContext } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './Contexts/ThemeContext'
import ThemeSwitcher from './Components/ThemeSwitcher/ThemeSwitcher'


function App() {

  const { theme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ThemeSwitcher />

    </>
  )
}

export default App
