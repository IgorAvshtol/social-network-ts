import React from 'react';
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";


type UsersComponentType = {
    isAuth: boolean
    login: string
    // setAuthUserData: (id: number, email: string, login: string) => void
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<UsersComponentType> {

    componentDidMount() {
        this.props.getAuthUserData()

        //     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //         withCredentials: true // проверяем авторизованы ли мы
        //     })
        //         .then(response => {
        //             if (response.data.resultCode === 0) {
        //                 let {id, email, login} = response.data.data
        //                 this.props.setAuthUserData(id, email, login)
        //             }
        //         })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)

