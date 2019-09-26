import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import {
	SignInWrapper,
	SignInLogo,
	SignInContainer,
	SignInContent,
	SignInTitle,
    SignInBox,
    SignInInput,

} from './style';

function SignIn() {
	const signIn = useSelector((state) => state.getIn(['signIn', 'signIn']));
	const dispatch = useDispatch();
 	let account = '', password = '';

	const getData = useCallback(() => {
		const pass = /^\w{6,12}$/; 
		if(account && password.match(pass)) {	
			axios.post('http://39.107.93.66:3000/users/login', qs.stringify({
				"name" : account,
				"password" : password
			})).then((res) => {
				localStorage.setItem("token", res.data.token);
			    dispatch({ type : 'SIGN_IN' });
			}).catch((err) => {
				alert('用户名或密码错误！');
			})
		} else {
			alert('请输入正确的用户名和密码！');
		}
	});

	return (
		<SignInWrapper>
			<SignInLogo></SignInLogo>
			<SignInContainer>
				<SignInContent>
					<SignInTitle className='click'>登录</SignInTitle>
					<SignInTitle>๑</SignInTitle>					
					<Link to='/signup' className='link'><SignInTitle onClick={() => dispatch({type:'SIGN_UP_OUT'})}>注册</SignInTitle></Link>					
				</SignInContent>
				<SignInBox>
					<SignInInput 
					 className='use' 
					 placeholder='用户名' 
					 onChange = { (e) =>  account = e.target.value } 
					/>
					<span className='iconfont usename'>&#xe602;</span>
					<SignInInput 
					 placeholder='密码' 
					 type='password' 
					 onChange = { (e) =>  password = e.target.value } 
					/>
					<span className='iconfont pass'>&#xe6df;</span>
					<span className='question'>忘记密码？</span>
					<div  className='load' onClick={ () => getData() }>登录</div>
					<div className='number'>----------------社交账号----------------</div>
					<span className='iconfont qq'>&#xe63e;</span>
					<span className='iconfont wechat'>&#xeb16;</span>
					{ signIn ? <Redirect to='/home' /> : null }
				</SignInBox>
			</SignInContainer>
		</SignInWrapper>
	);
}

export default SignIn;