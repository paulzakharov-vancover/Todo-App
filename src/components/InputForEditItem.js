import React from 'react'

const InputForEditItem = (props) => {
    return (
        <form onSubmit={props.handleChangingItemTitle}>
            <input type='text'
                placeholder='Edit a Todo Item' 
                value={props.temporaryItemTitle}
                onChange={props.changingTemporaryItemTitle} />


        </form>
    )
}


export default InputForEditItem