import React,{Component} from 'react';
import TextBox from '../common/TextBox';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={"username":"","pwd":""}
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleInputChange(value,name){
        this.setState({[name]:value});
    }
    handleClick(){
        console.log(this.state.username);
        console.log(this.state.pwd);
    }

    render(){
        return (
            <div className="login-container">
            <form >
                <TextBox placeholder="请输入手机号或邮箱" name="username" iconClass="icon-user" changeFunc={this.handleInputChange}></TextBox>
                <TextBox placeholder="请输入密码" name="pwd" iconClass="icon-pwd" changeFunc={this.handleInputChange}></TextBox>
                <button className="big-button" onClick={this.handleClick}>登陆</button>
            </form>
            </div>
        )
    }
}

export default Login;