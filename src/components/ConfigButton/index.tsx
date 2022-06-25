import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

type Props = {
  onPress: () => void
}

const ConfigButton = ({ onPress }: Props) => {
  const { theme } = useContext(ThemeContext)
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <AntDesign name='setting' size={24} color={theme.colors.text} />
    </TouchableOpacity>
  )
}

export default ConfigButton
