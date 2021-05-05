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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Jack' id='2'/>
                <DialogItem name='Joseph' id='3'/>
                <DialogItem name='Eva' id='4'/>
                <DialogItem name='Siberia' id='5'/>
                <DialogItem name='Tokio' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Tokio is calling Berlin'/>
                <Message message='Tokio is calling Berlin'/>
                <Message message='Tokio is calling Berlin'/>
                <Message message='Tokio is calling Berlin'/>
                <Message message='Tokio is calling Berlin'/>
            </div>
        </div>
    )
}

export default Dialogs