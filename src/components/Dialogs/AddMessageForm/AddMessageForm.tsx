import React from 'react';
import { InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {NewMessageFormValuesType} from '../Dialogs';


const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
    = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>("Enter your message", 'newMessageBody', [required, maxLength50], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm);
