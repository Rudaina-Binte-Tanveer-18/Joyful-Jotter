import React, { useState } from 'react'
import './notes.css'
import './notetask.css'

export default function Notes(props) {
    const [timeout, setTimeoutState] = useState(null);
    const timer = 500; // Debounce delay (e.g., 500ms)

    const formatDate = (value) => {
        if (!value) return "";

        const date = new Date(value);
        const monthNames = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",];

        let hrs = date.getHours();
        let amPm = hrs >= 12 ? "PM" : "AM";
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? hrs - 12 : hrs;
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min;
        let day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${hrs}:${min} ${amPm} ${day} ${month}`;
    }

    const debounce = (func) => {
        if (timeout) clearTimeout(timeout);
        const newTimeout = setTimeout(func, timer);
        setTimeoutState(newTimeout);
    };

    const updateText = (text, id) => {
        debounce(() => props.updateText(text, id));
    };

    return (
        <>
            <div id="note" style={{ backgroundColor: props.note.color }}>
                <textarea defaultValue={props.note.text} onChange={(event) => updateText(event.target.value, props.note.id)}></textarea>
                <div>
                    <p>{formatDate(props.note.time)} </p>
                    <p style={{cursor: 'pointer', fontWeight: 'bolder'}} onClick={()=>props.deleteNote(props.note.id)}>&#10006;</p>
                    </div>

            </div>
        </>
    )
}
