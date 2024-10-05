import { useState } from "react";
import React from "react";
import { addToDo } from "./slice";
import { useDispatch } from 'react-redux'
import './addTask.css'

export default function AddTask() {
    let [task, setTask] = useState("")
    let [date, setDate] = useState("")
    let [time, setTime] = useState("")
    let [category, setCategory] = useState("")

    let dispatch = useDispatch()

    let submit = (e) => {
        e.preventDefault()
        if (!task || !category || !date || !time) {
            alert("Please fill out all fields");
            return;
        }
        dispatch(addToDo({
            task: task,
            category: category,
            date: date,
            time: time
        }))

        setTask("")
        setTime("")
        setDate("")
        setCategory("")
    }
    return (
        <>
            <form>
                <input className="task" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task name" />
                <input className="task" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
                <input className="task" type="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time" />
                <input className="task" id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
                <button id="add" className="bg-gradient-to-r from-pink-300 to-blue-300 hover:bg-gradient-to-br text-white font-semibold rounded-lg text-lg px-6 py-3 shadow-lg transition-transform transform hover:scale-105" onClick={submit} disabled={!task || !category || !date || !time}>Add</button>
            </form>
        </>
    )
}