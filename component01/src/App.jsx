import {useState} from 'react'
import React from "react";
import './App.css'
import Model from "./Components/Model.jsx";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div
                    className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
            </div>
            <div className="app-container">
                <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
                    Open Modal
                </button>

                <Model isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
                    <p>This is a simple modal body.</p>
                </Model>
            </div>
        </>
    )
}

export default App
