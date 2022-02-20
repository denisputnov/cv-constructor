import React from 'react';
import "antd/dist/antd.min.css";
import Editor from './pages/Editor/Editor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Editor/>}/>
      </Routes>
    </BrowserRouter>
  )
}
