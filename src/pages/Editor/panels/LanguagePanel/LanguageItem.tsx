import FloatingSelect from "../../../../lib/FloatingSelect"
import FloatingTextInput from "../../../../lib/FloatingTextInput"
import InputItemWrapper from "../../../../lib/InputItemWrapper"
import { LanguageLevel } from "../../../../store/userData"

interface LanguageItemProps {
  name: string
  level: LanguageLevel
  onNameChange: (value: string) => void
  index: number
  onLevelChange: (value: LanguageLevel) => void
  onDelete: () => void
}

const LanguageItem: React.FC<LanguageItemProps> = ({ index, name, onNameChange, level, onLevelChange, onDelete }) => {
  const options = [
    "Beginner",
    "Elementary",
    "Intermediate",
    "Upper Intermediate",
    "Advanced",
    "Proficiency"
  ]

  const placeholder = [
    'English',
    'Deutsch',
    'Elvish',
    'French',
    'Spanish'
  ]

  return (
    <InputItemWrapper onDelete={onDelete}>
      <FloatingTextInput 
        placeholder={placeholder[index % placeholder.length]}
        value={name} 
        onChange={onNameChange}
        error={!name.length}
      />
      <FloatingSelect 
        defaultValue={level} 
        onChange={(value) => onLevelChange(value as LanguageLevel)} 
        options={options} 
      />
    </InputItemWrapper>
  )
}

export default LanguageItem;
