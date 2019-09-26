import styled from 'styled-components';

export const PutQuestionWrapper = styled.div`
	display : flex;
	justify-content : center;
	position : relative;
	width : 100%;
	height : 100%;
`;

export const PutQuestionInput = styled.textarea`
	width : 50%;
	height : 20rem;
	margin-top : 6rem;
	background-color : #fff;
	border : none;
	outline : none;
	&::placeholder {
		font-size : 1rem;
	  	color : #969696;
    }
`;

export const PutQuestionButton = styled.div`
	display : flex;
	justify-content : center;
	align-items : center;
	position : absolute;
	top : 28rem;
	left : 59.1rem;
	background-color : #fff;
	width : 5rem;
	height : 3rem;
	font-size : 1rem;
	color : #0084ff;
	cursor : pointer;
`;