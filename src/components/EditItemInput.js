import React from 'react'
import './EditItemInput.css'

const EditItemInput = (props) => {
    return (
        <div className='BlackLayout'>
            <div className="editQuestion">
                <h3>Please, edit item here:</h3>
                <form
                    className='editForm'
                    onSubmit={props.handleItemEditSubmit}>
                    <input className='editInput'
                        placeholder="edit your item here"
                        onChange={props.handleItemEdit}
                        value={props.temporaryItemTitleWhileEditing}
                    />
                </form>
                <div className='editYesBtn'
                    onClick={props.handleItemEditSubmit}>Confirm</div>
            </div>
        </div>
    )
}

export default EditItemInput