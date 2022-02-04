import React, { useState } from 'react';
import styled from 'styled-components';
import { Divider, Layout, Popover, Tooltip } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, CloseCircleOutlined, SettingOutlined } from '@ant-design/icons';
import Drawer from '../components/Drawer/Drawer';
import PaddingInput from '../components/Inputs/PaddingInput';
import FloatingTriggerButton from '../lib/FloatingTriggerButton';


const { Sider, Content } = Layout;

interface TriggerButtonProps {
  collapsed: boolean;
  onClick: () => void
}

const SiderTrigger: React.FC<TriggerButtonProps> = ({ collapsed, onClick }) => {
  return (
    <FloatingTriggerButton onClick={onClick}>
      <Tooltip placement='right' title={`${collapsed ? 'Open' : 'Close'} sidebar`}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Tooltip>
    </FloatingTriggerButton>
  )
}

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
      {/* <Divider orientation="left" orientationMargin={0}>Editor Settings</Divider> */}
      <Divider orientation="left" orientationMargin={0}>Paddings</Divider>
      <PaddingInput />
    </>
  )
}

const Editor = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <EditorLayout>
      <EditorSider
        trigger={null}
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        width="max(30vw, 400px)"
        collapsedWidth={0}
        collapsible
      >
        <EditorFloatingButtons>
          <SiderTrigger collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
          <EditorSettings />
        </EditorFloatingButtons>
      </EditorSider>
      <EditorContent>
        <Drawer />
      </EditorContent>
    </EditorLayout>
  );
}

const EditorLayout = styled(Layout)`
  height: 100vh;
`

const EditorFloatingButtons = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  bottom: 10px;
  right: -50px;
  gap: 10px;
  flex-direction: column;
`

const EditorSider = styled(Sider)`
  position: relative;
  height: 100vh;
  background-color: #FAFBFC;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
`

const EditorContent = styled(Content)`
  display: flex;
  padding: 5vh;
  height: 100vh;
  background-color: #E2E5E8;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export default Editor