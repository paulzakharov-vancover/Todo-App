import React from 'react'
import './DeletePopUp.css'

const DeletePopUp = (props) => {
    return (
        <div className='backDrop'>
            <div className='deleteQuestion'>
                <h3>Do you really want to delete '{props.itemIdUserWantsToDelete.title}' ?</h3>
                <div className='questionBtns'>


                    <div className='yesBtn'
                     onClick={() => props.handleDelete(props.itemIdUserWantsToDelete.idx)}>Yes</div>

                    <div className='noBtn'
                    onClick={props.cancelDeleting}>No</div>
                    
                </div>
            </div>

        </div>
    )
}

export default DeletePopUp
