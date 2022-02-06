import { Empty } from "antd"
import { observer } from "mobx-react-lite"
import AddButton from "../../../../lib/AddButton"
import userData from "../../../../store/userData"
import { PanelContentWrapper } from "../../styled-components"
import LanguageItem from "./LanguageItem"

const LanguagePanel = observer(() => {
  return (
    <PanelContentWrapper>
      {userData.language.map(({name, level}, index) => 
        <LanguageItem 
          key={`language-${index}`} 
          index={index}
          name={name}
          onNameChange={value => userData.setLanguageName(index, value)} 
          level={level} 
          onLevelChange={value => userData.setLanguageLevel(index, value)}
          onDelete={() => userData.removeLanguage(index)}
        />)}
      {!userData.language.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      <AddButton disabled={userData.language.length >= 5} title="Add language" onClick={() => userData.addLanguage(`Language ${userData.language.length + 1}`)} />
    </PanelContentWrapper>
  )
})

export default LanguagePanel;