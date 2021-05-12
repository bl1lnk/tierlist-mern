import React, { Component } from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'


const Container = styled.div`
    border:1px solid lightgrey;
    border-radius:2px;
    padding:8px;
    margin-right:8px;
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items: center;
 
`;


export default class task extends Component {

  
    render() {
        return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {provided=>(
                 <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} 
                 image={this.props.task.content}>
                  
                  <img src={this.props.task.content}></img>
                   
                    </Container>
            )}
        </Draggable>
       )
    }
}
