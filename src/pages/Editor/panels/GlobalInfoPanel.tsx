import { Checkbox } from "antd";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import userData from "../../../store/userData";
import TextInput from "../components/TextInput";
import { PanelContentWrapper } from "../styled-components";

const GlobalInfoPanel = observer(() => {
  return (
    <PanelContentWrapper>
      <TextInput label="Name" placeholder="Name" value={userData.global.name} onChange={value => userData.setGlobal('name', value)} />
      <TextInput label="Surname" placeholder="Surname" value={userData.global.surname} onChange={value => userData.setGlobal('surname', value)} />
      <TextInput label="Country" placeholder="Country" value={userData.global.country} onChange={value => userData.setGlobal('country', value)} />
      <TextInput label="Position" placeholder="Junior Software Engineer" value={userData.global.position} onChange={value => userData.setGlobal('position', value)} />
      <StyledCheckbox checked={userData.global.relocation} onChange={() => userData.setGlobal('relocation', !userData.global.relocation)}>Ready for relocation</StyledCheckbox>
    </PanelContentWrapper>
  )
})

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    border: none;
    box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.2);
  }
`

export default GlobalInfoPanel;
