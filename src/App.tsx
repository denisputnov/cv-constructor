import React from 'react';
import styled from 'styled-components';
import ImageUploader from './components/ImageUploader/ImageUploader';
import "antd/dist/antd.css";
import Editor from './components/Editor';

export default function App() {
  // return (
  //   <ImageUploadContainer>
  //     <ImageUploader />
  //   </ImageUploadContainer>
  // )
  return (
    <Editor></Editor>
  )
}

// const ImageUploadContainer = styled.div`
//   /* width: 400px; */
//   height: 80vh;
//   padding: 20px;
//   display: flex;
//   & > div {
//     width: 400px;
//   }
// `