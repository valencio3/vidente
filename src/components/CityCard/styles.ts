import styled from 'styled-components/native'

export const Card = styled.TouchableOpacity`
  margin-top: 5px;
`

export const CardContainer = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  align-items: center;
  text-align: center;
`

export const CityName = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 15px;
  color: #fff;
`
