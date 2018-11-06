import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './css/loginMain.css';
import './css/loginUtil.css';

class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}

	createElementToShowMessage(){
		const newElement = document.createElement("p");
		newElement.setAttribute('id', 'infoMessage');
		newElement.style.padding = '10px 10px';
		newElement.style.color = 'green';
		return newElement;
	}
	removeInfoMessage(){
		const node = document.getElementById("infoMessage");
		if(node === null)
			return ;
		else{
			const parent = node.parentNode;
			parent.removeChild(node);
		}
	}
	getUserName(userName){
		this.setState((prevState, prevProps)=> {
			return  {
				username : userName,
				password : prevState.password
			}
		})
	}

	getPassword(userPassword){
		this.setState((prevState, prevProps)=> {
			return  {
				username : prevState.username,
				password : userPassword
			}
		})
	}
	validateUser(event){
		event.preventDefault();
		this.removeInfoMessage(); // remove previous text( if present)
		const actualUsername = 'admin';
		const actualPassword = 'admin@qatar';

		const adminElement = document.getElementsByClassName("login100-form")[0];
		const newElement = this.createElementToShowMessage();
		if(this.state.username === actualUsername && this.state.password === actualPassword){
			global.isLoggedIn = true;	// set global flag to TRUE
			const path = '/home';
			this.props.history.push(path);
		}
		else if(this.state.username === '' || this.state.password === ''){
			const text = document.createTextNode('Username/password cannot be empty. Please enter your credentials properly.');
			newElement.appendChild(text);
			adminElement.insertBefore(newElement, adminElement.lastChild);
			this.setState(()=> {
				return  {
					username : '',
					password : ''
				}
			})
		}
		else{
			const text = document.createTextNode('Invalid username/password. Please try again.');
			newElement.appendChild(text);
			adminElement.insertBefore(newElement, adminElement.lastChild); 
			this.setState(()=> {
				return  {
					username : '',
					password : ''
				}
			})
		}
	}
	render() {
		return (
			<div className="limiter">
			 <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />
			 <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

			<div className="container-login100" style={{backgroundImage: "url('assets/bg-01.jpg'"}}>
				<div className="wrap-login100">
					<form className="login100-form validate-form" onSubmit={(event)=>this.validateUser(event)}>
						<span className="login100-form-logo">
							<img className="icon-image" src="assets/qatar.PNG" alt="logo"/>
						</span>

						<span className="login100-form-title p-b-34 p-t-27">
							ADMIN
						</span>
	
						<div className="wrap-input100 validate-input" data-validate = "Enter username">
							<input className="input100" id="user" type="text" name="username" placeholder="Username" value={this.state.username} onFocus={()=>this.removeInfoMessage()} onChange={(event) => this.getUserName(event.target.value)}/>
							<span className="focus-input100" data-placeholder='&#xf207;'></span>
						</div>
	
						<div className="wrap-input100 validate-input" data-validate="Enter password">
							<input className="input100" id="psw" type="password" name="pass" placeholder="Password" value={this.state.password} onFocus={()=>this.removeInfoMessage()} onChange={(event) => this.getPassword(event.target.value)}/>
							<span className="focus-input100" data-placeholder="&#xf191;"></span>
						</div>
						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
							<label className="label-checkbox100" htmlFor="ckb1">
								Remember me
							</label>
						</div>
						<div className="container-login100-form-btn">
							<button id="secured" className="login100-form-btn">
								Login
							</button>
						</div>
						<div>
							<p id="infoMessage"></p>
						</div>
						<div className="text-center p-t-90">
							<p className="txt1" href="#">
								Forgot Password?
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
		);
	}
}

export default withRouter(Login);