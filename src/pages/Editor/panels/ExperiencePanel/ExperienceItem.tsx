import FloatingTextInput from "../../../../lib/FloatingTextInput"
import InputItemWrapper from "../../../../lib/InputItemWrapper"
import { Experience } from "../../../../store/userData"

interface ExperienceItemProps {
  start: string
  end: string
  position: string
  companyName: string
  description: string
  onStartChange: (value: string) => void
  onEndChange: (value: string) => void
  onCompanyNameChange: (value: string) => void
  onPositionChange: (value: string) => void
  onDescriptionChange: (value: string) => void
  onDelete: () => void
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  start, 
  end, 
  position, 
  companyName, 
  description, 
  onStartChange, 
  onEndChange,
  onCompanyNameChange,
  onPositionChange,
  onDescriptionChange,
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
        placeholder='Company Name (can be empty)'
        value={companyName}
        onChange={onCompanyNameChange}
      />
      <FloatingTextInput 
        placeholder='Position'
        value={position}
        onChange={onPositionChange}
        error={!position.length}
      />
      <FloatingTextInput 
        placeholder='Work and activity desription (in 2-3 sentences)  '
        value={description}
        onChange={onDescriptionChange}
        error={!description.length}
        multiline
      />
    </InputItemWrapper>
  )
}

export default ExperienceItem;
