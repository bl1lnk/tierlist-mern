import React, { Component, useState} from 'react'
import initialData from './inial-data'
import Column from './column'
import '@atlaskit/css-reset'
import styled from 'styled-components'
import {DragDropContext} from 'react-beautiful-dnd'
import task from './task'
import MultiUploads from './components/MutiUploads'
import axios from 'axios'
const Container = styled.div`
  display:block;
`


export default class App extends Component {


   constructor(props)  {
     super(props);
     function SaveDataToLocalStorage(data)
     {
  
         // Parse the serialized data back into an aray of objects
    
         // Alert the array value
     
         // Re-serialize the array back into a string and store it in localStorage
         localStorage.setItem('images', JSON.stringify(data));
     }

     
   const images = async (props) =>{
    const {data} = await axios.get('/api/images/')
    SaveDataToLocalStorage(data)
 
   }
 images()
   
   const listimages = localStorage.getItem('images')
   ? JSON.parse(localStorage.getItem('images'))
   : null

    


   initialData.tasks = {
    'task-6':{id: 'task-6', content:'coca.jpg'},
    'task-2':{id: 'task-2', content:'7up.jpg'},
    'task-3':{id: 'task-3', content:'7up.jpg'},
}


let tasks = {};
try {

  
  for (let i in listimages){
    console.log('inserting', listimages[i]._id)
    var  taskname = listimages[i]._id
    tasks[taskname] = {}
    tasks[taskname].id = listimages[i]._id
    tasks[taskname].content = listimages[i].name
  }

 initialData.tasks = tasks
} catch (error) {
  console.log(error)
}
console.log( tasks)

/*
tasks.task1 = {};
tasks.task1.id = 'task1';
tasks.task1.content = 'coca.jpg';
tasks.task2 = {}
tasks.task2.id='task2'
tasks.task2.content='7up.jpg'
tasks.task3 = {}
tasks.task3.id='task3'
tasks.task3.content='coca.jpg'
*/

  
  const  tasks_id= initialData.tasks

  let tasksArray = []

  for (var i in tasks_id){
    tasksArray.push(tasks_id[i].id)
  }
  initialData.columns['column-6'].taskIds = tasksArray
  console.log(initialData.columns['column-6'].taskIds)
  }


  state = initialData
 
  onDragEnd = result=> {
    const {destination, source, draggableId} = result;
    if(!destination){
      return;
    }
    if(destination.droppableId == source.droppableId &&
      destination.index == source.index){
        return;
      }

      const start = this.state.columns[source.droppableId];
      const finish = this.state.columns[destination.droppableId];

      if (start === finish){
      
        const newTaskIds = Array.from(start.taskIds)
        newTaskIds.splice(source.index,1)
        newTaskIds.splice(destination.index,0, draggableId);
        
        const newColumn ={
          ...start,
          taskIds: newTaskIds,
        };
  
       const newState = {
         ...this.state,
         columns:{
           ...this.state.columns,
           [newColumn.id]: newColumn,
         },
       };
  
       this.setState(newState)
       return;
      }  
   
      const startTaskIds = Array.from(start.taskIds)
      startTaskIds.splice(source.index,1);
      const newStart = {
        ...start,
        taskIds:startTaskIds,
      };
      const finishTaskIds = Array.from(finish.taskIds)
      finishTaskIds.splice(destination.index,0,draggableId);
      const newFinish= {
        ...finish,
        taskIds: finishTaskIds,
      };
      
      const newState = {
        ...this.state,
        columns:{
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
 
      this.setState(newState)
  }

  render() {
    return (
    
      <DragDropContext 
        onDragEnd={this.onDragEnd}>
           
          <Container>
          {this.state.columnOrder.map((columnId)=>{
      const column = this.state.columns[columnId]
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} className={column.id} column={column} tasks={tasks} />;
    })}

 
          </Container>
       <div>
       <MultiUploads/>
       </div>
   </DragDropContext>
    )
  }
}
