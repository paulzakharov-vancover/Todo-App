import React, { Component } from 'react'
import './TodoInput.css'

const TodoInput = (props) => {

    return (
        <div className='form'>
            <form onSubmit={props.handleSubmit}>
                <div className='inputing'>
                    <input
                        
                        type='text' className='todo-input'
                        placeholder='Add a Todo Item'
                        value={props.item}
                        onChange={props.handleChange} />
                </div>

                <div className='addItemBtn'
                onClick={props.handleSubmit}>
                    <a>
                        Add item to the List
                    </a>


                </div>
            </form>

        </div>
    )
}

export default TodoInput

