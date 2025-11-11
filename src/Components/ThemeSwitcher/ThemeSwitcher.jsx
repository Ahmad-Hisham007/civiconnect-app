import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const ThemeSwitcher = () => {
    const { theme, toggleTheme, isDark } = useContext(ThemeContext);
    console.log(isDark)

    return (
        <button
            onClick={toggleTheme}
            className={`btn rounded-3xl ${isDark ? "bg-white" : "btn-primary"} text-base-100 fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300`}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Sun Icon for Light Mode */}
            {isDark ? <MdSunny /> : <FaMoon />
            }
            {
                theme == "light" ? "Dark" : "Light"
            }
        </button >
    );
};

export default ThemeSwitcher;