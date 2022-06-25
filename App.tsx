import React, { useContext, } from 'react'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { RootStackParamList } from './src/navigation'
import { UserContextProvider } from './src/context/UserContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeContext, ThemeContextProvider } from './src/context/ThemeContext'
import Loading from './src/components/Loading'
import { Rotas } from './src/components/Routes'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  const { theme } = useContext(ThemeContext)
  
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold,
  })
  

  if (!fontsLoaded) {
    return <Loading />
  }

 
  return (
    <ThemeContextProvider>
        <UserContextProvider>
        <StatusBar animated barStyle='light-content'  />
          <Rotas />
        </UserContextProvider>
    </ThemeContextProvider>

  )
}

export default App

