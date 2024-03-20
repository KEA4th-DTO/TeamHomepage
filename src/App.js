import './App.css';
import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from './component/EmptyPage';
import Member from './component/Member';
import Home from './views/Home';
import lenis from "./utils/lenis";
import link from "./utils/link";

function App() {

    useEffect(() => {
        lenis();
        link();
    }, []);

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members/:id" element={<Member />} />

        <Route path="*" element={<EmptyPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
