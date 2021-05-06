import React from 'react' 
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
                </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dallas' },
        { id: 2, name: 'Jack' },
        { id: 3, name: 'Joseph' },
        { id: 4, name: 'Eva' },
        { id: 5, name: 'Siberia' },
        { id: 6, name: 'Tokio' },
    ]
    let messagesData = [
            { id: 1, message: 'Tokio is calling Berlin' },
            { id: 2, message: 'Tokio is calling Dock' },
            { id: 3, message: 'Tokio is calling Albania' },
            { id: 4, message: 'Eva' },
            { id: 5, message: 'Siberia' },
            { id: 6, message: 'Tokio' },
        ]
    
    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messagesData.map( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               { dialogsElements }
            </div>
            <div className={s.messages}>
               { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs