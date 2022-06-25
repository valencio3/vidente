import { createContext, ReactNode, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../theme/theme'
import { ThemeProvider as MyTheme } from 'styled-components'

type ThemeContextType = {
  theme: Colors
  setTheme: (newState: Colors) => void
}

type Colors = {
  name: string
  colors: {
    background: string,
    primary: string,
    text: string,
    error: string,
    title: string,
  }

}

const initialValue: ThemeContextType = {
  theme: lightTheme,
  setTheme: () => { }
}

export const ThemeContext = createContext(initialValue)

type Props = {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(initialValue.theme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MyTheme theme={theme}>{children}</MyTheme>
    </ThemeContext.Provider>
  )
}
