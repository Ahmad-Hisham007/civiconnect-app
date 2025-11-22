import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import ThemeGlobal from './Components/ThemeSwitcher/ThemeGlobal.jsx'
import AuthProvider from './Contexts/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';
import DataLoading from './Contexts/DataLoading.jsx'
import 'aos/dist/aos.css';
import Aos from 'aos'

// Initialize AOS
Aos.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
  offset: 100,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>
      <ThemeGlobal>
        <AuthProvider>
          <DataLoading>
            <Toaster position='top-center' containerStyle={{
              top: 120
            }} />
            <RouterProvider router={Routes}></RouterProvider>
          </DataLoading>
        </AuthProvider>
      </ThemeGlobal>
    </ThemeProvider>

  </StrictMode>,
)
