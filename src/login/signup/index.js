import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import {
	SignUpWrapper,
	SignUpLogo,
	SignUpContainer,
	SignUpContent,
	SignUpTitle,
	SignUpBox,
	SignUpInput,
	SignUpBotton,

} from './style';

function SignUp() {
	const signUp = useSelector((state) => state.getIn(['signUp', 'signUp']));
	const dispatch = useDispatch();
    let account = '', password = '';

	const postData = useCallback(() => {
		const pass = /^\w{6,12}$/; 
		if(account && password.match(pass)) {	
			axios.post('http://39.107.93.66:3000/users', qs.stringify({
				"name" : account,
				"password" : password
			})).then((res) => {
				dispatch({ type : 'SIGN_UP' });
			}).catch((err) => {
				alert('注册失败，或许换个用户名试试？');
			})
		} else {
			alert('请输入正确的用户名和密码！密码为六至十二位的任意数字字母组合');
		}
	});

	return (
		<SignUpWrapper>
			<SignUpLogo></SignUpLogo>
			<SignUpContainer>
				<SignUpContent>
					<Link to='/' className='link'><SignUpTitle>登录</SignUpTitle></Link>
					<SignUpTitle>๑</SignUpTitle>
					<SignUpTitle className = 'click'>注册</SignUpTitle>
				</SignUpContent>	
				<SignUpBox>
					<SignUpInput 
					 className='use' 
					 placeholder='昵称' 
					 onChange = { (e) =>  account = e.target.value } 
					/>
					<span className='iconfont usename'>&#xe602;</span>					
					<SignUpInput 
					 placeholder='密码'
					 type='password' 
					 onChange = { (e) => password = e.target.value } 
					/>
					<span className='iconfont pass'>&#xe6df;</span>
				</SignUpBox>	
				<SignUpBotton>
					<div  className='registered' onClick={ () => postData() }>注册</div>
					<div className='word'>点击"注册"即表示您同意并愿意遵守</div>
					<div className='word'>用户协议和隐私政策</div>
					{ signUp ? <Redirect to='/' /> : null }
				</SignUpBotton>		
			</SignUpContainer>
		</SignUpWrapper>
	);
}

export default SignUp;