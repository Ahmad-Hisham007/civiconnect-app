import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import ThemeGlobal from './Components/ThemeSwitcher/ThemeGlobal.jsx'
import AuthProvider from './Contexts/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>
      <ThemeGlobal>
        <AuthProvider>
          <Toaster position='top-center' containerStyle={{
            top: 120
          }} />
          <RouterProvider router={Routes}></RouterProvider>
        </AuthProvider>
      </ThemeGlobal>
    </ThemeProvider>

  </StrictMode>,
)
