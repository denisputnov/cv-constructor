import React, { useState } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

interface SiderTriggerProps {
  collapsed: boolean;
  onClick: () => void
}

const SiderTrigger: React.FC<SiderTriggerProps> = ({collapsed, onClick}) => {
  return (
    <SiderTriggerWrapper onClick={onClick}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </SiderTriggerWrapper>
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
        <SiderTrigger collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
        Sider
      </EditorSider>
      <EditorContent>
        Content
      </EditorContent>
    </EditorLayout>
  );
}

const SiderTriggerWrapper = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 10px;
  right: -50px;
  padding: 0;
  font-size: 22px;
  border-radius: 10px;
  background-color: #FAFBFC;
  /* border: 2px solid #E2E5E8; */
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
  z-index: 2;
`

const EditorLayout = styled(Layout)`
  height: 100vh;
`

const EditorSider = styled(Sider)`
  position: relative;
  height: 100vh;
  background-color: #FAFBFC;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
`

const EditorContent = styled(Content)`
  height: 100vh;
  background-color: #E2E5E8;
  text-align: center;
`

export default Editor