import React from 'react';
import "antd/dist/antd.css";
import Editor from './pages/Editor/Editor';
import ImageUploader from './components/ImageUploader/ImageUploader';
import styled from 'styled-components';

export default function App() {
  return (
    <Editor></Editor>
  )
}

const Wrapper = styled.div`
  width: 400px;
  height: 300px;
`