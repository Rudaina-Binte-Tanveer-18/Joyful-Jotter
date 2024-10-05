import React, { useState } from 'react'
import './sidebar.css'

export default function Sidebar(props) {
    let [open, setOpen] = useState(false)
    let colors = ['#E27396', '#EA9AB2', '#EFCFE3', '#B3DEE2']
    return (
        <div id='sidebar'>
            <p onClick={()=> setOpen(!open)}  id='add'>&#10010;</p>
            <ul id='list' className={`list ${open ? 'listActive' : ""}`}>
                {colors.map((item, index) => (
                    <li key={index} id='color' style={{ backgroundColor: item }} onClick={()=>props.addNote(item)}></li>
                ))}
            </ul>
        </div>
    )
}
