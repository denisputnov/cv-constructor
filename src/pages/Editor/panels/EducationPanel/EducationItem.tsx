import FloatingTextInput from "../../../../lib/FloatingTextInput"
import InputItemWrapper from "../../../../lib/InputItemWrapper"

interface EducationItemProps {
  start: string
  end: string
  grade: string
  name: string
  speciality: string
  onStartChange: (value: string) => void
  onEndChange: (value: string) => void
  onNameChange: (value: string) => void
  onGradeChange: (value: string) => void
  onSpecialityChange: (value: string) => void
  onDelete: () => void
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  start, 
  end, 
  grade, 
  name, 
  speciality, 
  onStartChange, 
  onEndChange,
  onNameChange,
  onGradeChange,
  onSpecialityChange,
  onDelete
}) => {
  return (
    <InputItemWrapper onDelete={onDelete} multiline>
      <FloatingTextInput 
        placeholder='Start Time'
        value={start}
        onChange={onStartChange}
        error={!start.length}
      />
      <FloatingTextInput 
        placeholder='End Time'
        value={end}
        onChange={onEndChange}
        error={!end.length}
      />
      <FloatingTextInput 
        placeholder='Name of Course / University'
        value={name}
        onChange={onNameChange}
        error={!name.length}
      />
      <FloatingTextInput 
        placeholder='Speciality (can be empty)'
        value={speciality}
        onChange={onSpecialityChange}
      />
      <FloatingTextInput 
        placeholder='Grade (can be empty)'
        value={grade}
        onChange={onGradeChange}
      />
    </InputItemWrapper>
  )
}

export default EducationItem;
