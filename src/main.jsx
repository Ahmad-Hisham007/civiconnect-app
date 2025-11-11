import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import ThemeGlobal from './Components/ThemeSwitcher/ThemeGlobal.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>
      <ThemeGlobal>
        <RouterProvider router={Routes}></RouterProvider>
      </ThemeGlobal>
    </ThemeProvider>

  </StrictMode>,
)
