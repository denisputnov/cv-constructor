import { CloseCircleOutlined, SettingOutlined } from "@ant-design/icons"
import { Popover, Tooltip, Divider } from "antd"
import { useState } from "react"
import PaddingInput from "./PaddingInput"
import FloatingTriggerButton from "../../../lib/FloatingTriggerButton"

const EditorSettings: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <Popover 
      visible={opened} 
      trigger='click' 
      placement='bottomLeft' 
      content={EditorSettingsContent}  
      onVisibleChange={visible => setOpened(visible)}
    >
      <FloatingTriggerButton onClick={() => setOpened(!opened)}>
        <Tooltip placement='right' title={`${opened ? 'Close' : 'Open'} editor settings`}>
          {opened ? <CloseCircleOutlined /> : <SettingOutlined />}
        </Tooltip>
      </FloatingTriggerButton>
    </Popover>
  )
}

const EditorSettingsContent = () => {
  return (
    <>
      <Divider orientation="left" orientationMargin={0}>Paddings</Divider>
      <PaddingInput />
    </>
  )
}

export default EditorSettings;
