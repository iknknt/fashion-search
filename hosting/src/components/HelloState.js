import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class HelloState extends React.Component {
  render() {
    const { state, props } = this;

    let component = null;

    if(state.isLogin) {
      component = (
        <div>ログインしました</div>
      );
    } else {
      component = (
        <div>
          <div>
            <TextField label="メールアドレス"　value={state.email} onChange={this.changeEmail}></TextField>
          </div>
          <div>
            <TextField label="パスワード" value={state.paassword}  onChange={this.changePassword} type="password"></TextField>
          </div>
          <Button variant='contained' onClick={this.login}>ログイン</Button>
        </div>
      );
    }

    return (
      <div>
        <h2>{props.title}</h2>
        <p>{state.count}</p>
        {component}
        {/* <p>{state.isLogin ? "ログインしています" : "ログインしていません"}</p> */}
      </div>
    );
  }

  state = {
    count: 0,
    email: "",
    password: "",
    isLogin: false,
    isPasswordInvalid: false,
  }

  changeEmail = event => {
    this.setState({ email: event.target.value});
  }

  changePassword = event => {
    this.setState({ password: event.target.value});
  }

  login = () => {
    const { state } = this;

    console.log("login")
    if(state.email === "aaa" && state.password === "aaa") {
      this.setState({
        isLogin: true
      });
    } else {
      this.setState({ isLogin: false})
    }

    console.log(state)
    this.setState({ count: state.count++ });
  }
}
