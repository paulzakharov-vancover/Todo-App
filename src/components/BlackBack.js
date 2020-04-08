import React from 'react'
import './BlackBack.css'

const BlackBack = (props) => {
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

export default BlackBack








// 1. Сделать зеленое выделение редактируемого элемента полностью зону item
// 2. Сделать поп-ап при удалении предмета - спрашивает надо ли удалить предмет?
// 3. Сделать галочку при выполнении задания
// 4. Поменять восклицательный знак
// 5. Сделать ограничение по количеству символов требуемых для инпута.    -------------- DONE