import React from 'react';
import {useSelector} from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { getIsFetching } from '../../redux/users-selectors';
import { Users } from './Users';

type UsersPageType = {
    pageTitle: string
}

export const UsersPage: React.FC<UsersPageType> = (props) => {
    
    const isFetching = useSelector(getIsFetching)

    return <>
            <h2>{props.pageTitle}</h2>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </>
}