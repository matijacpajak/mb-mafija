import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';

class Login extends Component {
    
    render(){
        return(
            <LoginForm dispatch= {this.props.dispatch}/>
        )
    }
}

export default connect()(Login)