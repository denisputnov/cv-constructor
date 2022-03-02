import React from 'react'
import styled from 'styled-components';
import { Modal } from 'antd';

interface FloatingModalProps {
  title: string
  width?: number
  visible: boolean
  close: () => void
  children?: React.ReactNode
}

const FloatingModal: React.FC<FloatingModalProps> = ({ title, width, visible, close, children }) => {
  return (
    <StyledModal
      title={title}
      centered
      visible={visible}
      onCancel={close}
      footer={null}
      width={width ?? 800}
    >
      {children}
    </StyledModal>
  )
}

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 10px;
    overflow: hidden;
  }
`

export default FloatingModal