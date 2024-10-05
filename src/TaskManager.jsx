import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { deleteToDo, markDoneToDo } from './slice';
import { useSelector, useDispatch } from 'react-redux';
import './allTasks.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MyApp from './calender';
import DigitalClock from './time';
import Headings from './heading';
import AddTask from './addTask';
import './taskmanager.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#E27396',
    color: theme.palette.common.black,
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '16px',
    fontFamily: 'Trebuchet MS',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "#000",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TaskManager = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const del = (id) => {
    dispatch(deleteToDo(id));
  };

  const done = (id) => {
    dispatch(markDoneToDo(id));
    console.log(todos);
  };

  return (
    <>
      <Headings />
      <Box sx={{ width: '70vw', margin: 'auto', flexGrow: 1 }}>
        <div id="addTaskForm">
          <AddTask />
        </div>
        <div id='table1'>
          <div id='allTable'>
            <Item>
              <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Date</StyledTableCell>
                      <StyledTableCell align="center">Category</StyledTableCell>
                      <StyledTableCell align="center">Time</StyledTableCell>
                      <StyledTableCell align="center">Task</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {todos.map((todo) => (
                      <StyledTableRow key={todo.id}>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          {todo.date}
                        </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          {todo.category}
                        </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          {todo.time}
                        </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          {todo.task}
                        </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          <div id="buttons" style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                            <button id="del" onClick={() => del(todo.id)} style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                              <p style={{ cursor: 'pointer', fontWeight: 'bolder' }}>&#10006;</p>
                            </button>
                            <label id="done" style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                              <input id="checkbox" type="checkbox" checked={todo.taskDone} onChange={() => done(todo.id)} />
                            </label>
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </div>
          <div id='clockCal'>
            <DigitalClock />
            <MyApp />
          </div>
        </div>

        <div id='categoryTable'>
          <Item>
            <TableContainer component={Paper}>
              <Table sx={{ width: '100%' }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Category</StyledTableCell>
                    <StyledTableCell align="center">Task</StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {todos.map((todo) => (
                    <StyledTableRow key={todo.id}>
                      <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                        {todo.category}
                      </StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                        {todo.task}
                      </StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                        <div id="buttons" style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                          <button id="del" onClick={() => del(todo.id)} style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                            <p style={{ cursor: 'pointer', fontWeight: 'bolder' }}>&#10006;</p>
                          </button>
                          <label id="done" style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                            <input id="checkbox" type="checkbox" checked={todo.taskDone} onChange={() => done(todo.id)} />
                          </label>
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </div>

        <div id='table2'>
          <div id='timeTable'>
            <Item>
              <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="customized table">
                  <TableHead style={{ backgroundColor: '#E27396' }}>
                    <TableRow>
                      <StyledTableCell align="center">Time</StyledTableCell>
                      <StyledTableCell align="center">Task</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {todos.map((todo) => (
                      <StyledTableRow key={todo.id}>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          {todo.time}
                        </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          {todo.task}
                        </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          <div id="buttons" style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                            <button id="del" onClick={() => del(todo.id)} style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                              <p style={{ cursor: 'pointer', fontWeight: 'bolder' }}>&#10006;</p>
                            </button>
                            <label id="done" style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                              <input id="checkbox" type="checkbox" checked={todo.taskDone} onChange={() => done(todo.id)} />
                            </label>
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </div>
          <div id="dateTable">
            <Item>
              <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="customized table">
                  <TableHead style={{ backgroundColor: '#E27396' }}>
                    <TableRow>
                      <StyledTableCell align="center">Date</StyledTableCell>
                      <StyledTableCell align="center">Task</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {todos.map((todo) => (
                      <StyledTableRow key={todo.id}>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center" component="th" scope="row">
                          {todo.date}
                        </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          {todo.task}
                        </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }} align="center">
                          <div id="buttons" style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                            <button id="del" onClick={() => del(todo.id)} style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                              <p style={{ cursor: 'pointer', fontWeight: 'bolder' }}>&#10006;</p>
                            </button>
                            <label id="done" style={{ backgroundColor: todo.taskDone ? '#B3DEE2' : '#EFCFE3' }}>
                              <input id="checkbox" type="checkbox" checked={todo.taskDone} onChange={() => done(todo.id)} />
                            </label>
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </div>
        </div>
      </Box>
    </>
  );
};

export default TaskManager;
