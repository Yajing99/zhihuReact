import styled from 'styled-components';
import backgroundPic from '../../statics/知乎.png';

export const SignUpWrapper = styled.div`
	display : flex;
	flex-direction : column;
	align-items : center;
	width : 100%;
	height : 100%;	
`;

export const SignUpLogo = styled.div`
	margin-top : 2.5rem;
	width : 7rem;
	height : 3.8rem;
	background : url(${backgroundPic});
	background-size : cover;
`;

export const SignUpContainer = styled.div`
	display : flex;
	flex-direction : column;
	align-items : center;
	margin-top : 2.2rem;
	width : 24rem;
	height : 26rem;
	border : 0.1rem solid #d8dee2;
	background-color : #fff;
	box-shadow : 0 0 8px rgba(0, 0, 0, .1);
`;

export const SignUpContent = styled.div`
	display : flex;
	align-items : center;
	width : 50%;
	height : 6rem;
	margin-bottom : 1rem;
	.link {
		text-decoration : none;
	}
`;

export const SignUpTitle = styled.div`
	display : flex;
	justify-content : center;
	align-items : center;
	flex-grow : 1;
	color : #969696;
	font-size : 1.3rem;
	font-weight : 300;
	height : 3rem;
	cursor : pointer;
	:hover {
		color : #175199;
	}
	&.click {	
		color : #0084ff;
		font-weight : bold;
		border-bottom : 0.2rem solid #0084ff;
	}
`;

export const SignUpBox = styled.div`
	display : flex;
	flex-direction : column;
	align-items : center;
	position : relative;
	width : 70%;
	height : 10rem;	
	margin-bottom : 2rem;
	.usename {
		position : absolute;
		font-size : 1rem;
		color : #969696;
		top : 1.1rem;
		left : 0.2rem;
	}
	.pass {
		position : absolute;
		font-size : 1rem;
		color : #969696;
		top : 4.3rem;
		left : 0.2rem;
	}
`;

export const SignUpInput = styled.input`
	display : flex;
	align-items : center;
	width : 90%;
	height : 3rem;	
	padding-left : 2.4rem;
	padding-right : 0.5rem;
	font-size : 1rem;
	color : #333;
	border : 0.1rem solid #c8c8c8;
	outline : none;
	background-color : hsla(0, 0, 71%, .1); 
	&.use {
		border-bottom : none;
	}
	&::placeholder {
	  	color : #969696;
    }	
`;

export const SignUpBotton = styled.div`
	display : flex;
	flex-direction : column;
	align-items : center;
	justify-content : space-between;
	height : 5rem;
	.registered {
		display : flex;
		justify-content : center;
		align-items : center;
		width : 144%;
		height : 2.8rem;
		border-radius : 2rem;
		font-size : 1rem;
		color : #fff;
		background-color : #42c02e;
		cursor : pointer;		
	}
	.word {
		font-size : 0.8rem;
		color : #969696;
	}
`;