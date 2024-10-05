import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Addtask from './addTask';
import Headings from './heading';
import BasicGrid from './Layout';
import DigitalClock from './time';
import AiChatBot from './AiChatBot';
import AiImageGenerator from './AiImageGenerator';
import LandingPage from './LandingPage';
import Layout from './Layout';
import { ToDoStore } from './store';
import TaskManager from './TaskManager';
import NoteContainer from './noteContainer';
import Sidebar from './sidebar';
import './App.css';
import Heading2 from './heading2';

// MUI theme configuration
const muiTheme = createTheme({
  typography: {
    fontSize: 12,
  },
});

function App() {
  // State and functions for notes management
  let [note, setNotes] = useState(JSON.parse(localStorage.getItem("notes-app")) || []);

  const addNote = (color) => {
    const tempNotes = [...note];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...note];
    let index = tempNotes.findIndex(item => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...note];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(note));
  }, [note]);

  return (
    <Provider store={ToDoStore}>
      <ChakraProvider>
        <ThemeProvider theme={muiTheme}>
          <Router>
            {/* Routing Setup */}
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="Headings" element={<Headings />} />
                <Route path="Addtask" element={<Addtask />} />
                <Route path="DigitalClock" element={<DigitalClock />} />
                <Route path="BasicGrid" element={<BasicGrid />} />
                <Route path="TaskManager" element={<TaskManager />} />
                <Route path="AiChatBot" element={<AiChatBot />} />
                <Route path="AiImageGenerator" element={<AiImageGenerator />} />
                {/* Note-taking feature */}
                <Route
                  path="Notes"
                  element={
                    <>
                      <Heading2 />
                      <div id="main">
                        <Sidebar addNote={addNote} />
                        <NoteContainer
                          note={note}
                          deleteNote={deleteNote}
                          updateText={updateText}
                        />
                      </div>
                    </>
                  }
                />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
