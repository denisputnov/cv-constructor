import React from 'react';
import "antd/dist/antd.min.css";
import Editor from './pages/Editor/Editor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UnsupportedResolution from './pages/UnsupportedResolution';
import useResolutionSupported from './hooks/useResolutionSupported';

export default function App() {
  const resolutionSupported: boolean = useResolutionSupported()
  console.log(resolutionSupported)
  if (!resolutionSupported) return <UnsupportedResolution />
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Editor/>}/>
      </Routes>
    </BrowserRouter>
  )
}
