import { useContext } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ThemeContext } from "../../context/ThemeContext"
import { RootStackParamList } from "../../navigation"
import Config from "../../pages/Config"
import Home from "../../pages/Home"
import NextForecasts from "../../pages/NextForecasts"
import ConfigButton from "../ConfigButton"

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Rotas = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    contentStyle: { backgroundColor: theme.colors.background } ,
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={({ navigation }) => ({
                        title: 'Vidente',
                        headerStyle: {
                            backgroundColor: theme.colors.background,
                        },
                        headerTintColor: theme.colors.text,
                        headerRight: () => (
                            <ConfigButton onPress={() => navigation.navigate('Config')} />
                        ),
                    })}
                />
                <Stack.Screen
                    name='NextForecasts'
                    component={NextForecasts}
                    options={{ 
                        title: 'Próximas Temperaturas' ,
                        headerStyle: {
                            backgroundColor: theme.colors.background,
                        },
                        headerTintColor: theme.colors.text,
                    }}
                />
                <Stack.Screen
                    name='Config'
                    component={Config}
                    options={{ 
                        title: 'Configurações',
                        headerStyle: {
                            backgroundColor: theme.colors.background,
                        },
                        headerTintColor: theme.colors.text,
                     }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}