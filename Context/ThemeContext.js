import React, { createContext, useState } from 'react'

export const ThemeDataContext = createContext()

export const ThemeDataProvider = (props) => {

    const [themeData, setThemeData] = useState({
        locationHeader: 'Location',
        categoryHeader: 'Category',
        isTabBarVisible: true,
        tabBarMarginTop: 20
    })

    return (
        <ThemeDataContext.Provider value={[themeData, setThemeData]}>
            {props.children}
        </ThemeDataContext.Provider>
    )
}