import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  // padding: 25% 0 0 0;
`

export const NextForecastsButton = styled.TouchableOpacity`
  margin-top: 20px;
`

export const NextForecastsArea = styled.View`
  background-color:${(props) => props.theme.colors.primary};
  border-radius: 10px;
  padding: 10px 20px;
  margin: auto;
  width: 70%;
`

export const NextForecastsText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: ${(props) => props.theme.colors.title};
  text-align: center;
  font-size: 17px;
`
export const SwitchThemeArea = styled.View`
flex-direction: row;
justify-content: flex-end; 
align-items: center;
margin-right: 5px;
margin-bottom: 20%;
 
`
export const SwitchTheme = styled.Switch`
`
export const SwitchThemeText = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.colors.text};
  ;
`
