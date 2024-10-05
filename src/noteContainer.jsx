import React from 'react';
import Notes from './notes';
import './App.css';
import { Box } from '@mui/material'; // Import Box from Material-UI

export default function NoteContainer(props) {
  return (
    <>
      <div id='noteContainer'>
        {props.note.length > 0 ? (
          props.note.map((item) => (
            <Notes key={item.id} note={item} deleteNote={props.deleteNote} updateText={props.updateText} />
          ))
        ) : (
          <h2>NO NOTES ADDED</h2>
        )}
      </div>
    </>
  );
}
