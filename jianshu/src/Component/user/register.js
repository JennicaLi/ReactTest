import React,{Component} from 'react';
import TextBox from '../common/TextBox'

class Register extends Component{
    constructor(props){
        super(props);
        this.state={username:'',pwd:'',repwd:''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleInputChange(value, name) {
        this.setState({[name]: value});
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.pwd);
        console.log(this.state.repwd);
    }
  render(){
      return (
          <div className="sign">
              <div className="main">
                  <div className="login-container">
                      <form>
                          <TextBox placeholder="手机号或邮箱" name="username" iconClass="icon-user"
                                   changeFunc={this.handleInputChange}></TextBox>
                          <TextBox isPwd={true} placeholder="密码" name="pwd" iconClass="icon-pwd"
                                   changeFunc={this.handleInputChange}></TextBox>
                          <TextBox isPwd={true} placeholder="确认密码" name="repwd" iconClass="icon-pwd"
                                   changeFunc={this.handleInputChange}></TextBox>
                          <button className="big-button" onClick={(e) => this.handleClick(e)}>注册</button>
                      </form>
                  </div>
              </div>
          </div>
      )
  }
}

export default Register;