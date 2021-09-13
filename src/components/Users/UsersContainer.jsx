import React from 'react';
import {connect} from 'react-redux';
import { follow, setCurrentPage, getUsers} from '../../redux/users-reducer';
import { unfollow } from '../../redux/users-reducer';
import Users from './Users.js';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
}

render() {

    return <>
        { this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  followingInProgress={this.props.togglefollowingInProgress}
    />
    </>
}
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:  state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default withAuthRedirect(connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers }))(UsersContainer);