import React from 'react'
import './EditItemInput.css'

 const EditItemInput = (props) => {
    return (
        <form 
        className='editForm'
        onSubmit={props.handleItemEditSubmit}>
            <input className='editInput'
            placeholder="edit your item here"
                    onChange={props.handleItemEdit}
                    value={props.test}
             />
        </form>
    )
}

export default EditItemInput