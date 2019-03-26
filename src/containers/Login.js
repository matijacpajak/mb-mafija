import React, {Component} from 'react';
import {changeNameAction} from '../actions/action';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
    componentDidMount(){
        dispatch(changeNameAction('Matija'))
    }
    render(){
        return(
            <LoginForm dispatch={this.props.dispatch}/>
        )
    }
}