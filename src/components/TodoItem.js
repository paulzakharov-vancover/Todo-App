import React from 'react'
import EditItemInput from './EditItemInput'
import BlackBack from './BlackBack'
import './TodoItem.css'


const TodoItem = (props) => {
    const cls = []
    const clsForImportantBtn = ['icons imp-btn fas fa-bookmark']
    const clsForDoneBtn = ['fas fa-check-circle doneBtn']

    if (props.itemIsDone) {
        cls.push('done')
        clsForDoneBtn.push('doneBtnIsActive')
    } else if (props.itemIsImportant) {
        cls.push('important')
        clsForImportantBtn.push("impBtnIsActive")
    }

    const clsForEditingBtn = ['icons pen-btn fas fa-pen']
    if (props.itemIsEditing) {
        clsForEditingBtn.push('editBtnIsActive')
    }

    return (

        <li className='itemList'>
            {props.itemIsEditing ?

                <EditItemInput

                    handleItemEdit={props.handleItemEdit}
                    test={props.test}
                    handleItemEditSubmit={props.handleItemEditSubmit}
                />

                :
                <div className='container'>
                    <i className={clsForDoneBtn.join(' ')}
                        onClick={props.onToggleItemIsDone} />
                    <div className='flex-input'>
                        <h6
                            className={cls.join(' ')}
                            onClick={props.onToggleItemIsDone}
                        >{props.title}</h6>
                        <div className='todoIcons'>

                            <span
                                onClick={props.onToggleItemIsImportant}>
                                <i className={clsForImportantBtn.join(' ')}></i>
                            </span>
                            <span
                                onClick={props.toggleEditItem}>
                                <i className={clsForEditingBtn.join(' ')} />
                            </span>
                            <span
                                onClick={props.deleteItemPopUp}
                            >
                                <i className='icons del-btn fas fa-trash' />
                            </span>
                        </div>
                    </div>
                </div>




            }


        </li>

    )
}

export default TodoItem