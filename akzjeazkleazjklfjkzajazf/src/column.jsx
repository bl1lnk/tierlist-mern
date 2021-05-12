import React, { Component } from 'react'
import styled from 'styled-components'
import Task from './task'
import {Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius:2px;
    display:flex;
    flex-direction:row;
    position:relative;
    max-width:760px;


    
    
`;
const Title = styled.h3`
    padding:8px;
    background:#FF7F7F;
    width:100px;
    height:100px;
    display:flex;
    justify-content:center;
    align-items: center;
    `;
const TaskList = styled.div`
    padding:8px;
    flex-grow:1;
    min-height:100px;
    display:flex;
`;

export default class column extends Component {
    render() {
        return (
            <Container className={this.props.className}>
              
                <Title>{this.props.column.title}</Title>
               <Droppable droppableId={this.props.column.id} direction="horizontal">
                     {provided=>(
                         <TaskList
                            ref= {provided.innerRef}
                            {...provided.droppableProps}
                         >
                         {this.props.tasks.map((task,index)=> <Task key={task.id} task={task} index={index}/>)}
                         {provided.placeholder}
                     </TaskList>
                     )}
                </Droppable>
            </Container>
        )
    }
}
