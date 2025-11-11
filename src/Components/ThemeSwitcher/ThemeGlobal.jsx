import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const ThemeGlobal = ({ children }) => {
    return (
        <>
            {children}
            <ThemeSwitcher />
        </>
    );
};

export default ThemeGlobal;