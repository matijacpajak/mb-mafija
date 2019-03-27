import React, {Component} from 'react';
import {changeNameAction} from '../actions/Action';

export default class LoginForm extends Component {
    componentDidMount() {
        this.props.dispatch(changeNameAction('Maki'))
    }
    render(){
        return(
            <div>
                <button>Click me</button>
            </div>
        )
    }
}