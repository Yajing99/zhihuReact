import styled from 'styled-components';

export const WriteWrapper = styled.div`
	display : flex;
	flex-direction : column;
	align-items : center;
	position : relative;
	width : 100%;
	height : 100%;
	overflow : auto;
	background-color : #fff;	
`;

export const WriteHead = styled.div`
	display : flex;
	justify-content : center;
	height : 3.2rem;
	width : 100%;
    box-shadow : 0px .5px 5px #b4b4b4; 
`;

export const WriteContainer = styled.div`
	width : 63rem;
	display : flex;
	align-content : space-between;
	position : relative;
`;

export const Logo = styled.a.attrs({
	href : '/'
})`
	width : 8%;	
	background-color : #000;
`;

export const WriteWord = styled.span`
	display : flex;
	align-items : center;
	margin-left : 1.5rem;
	font-size : 1.2rem;
	font-weight : bold;
`;

export const WriteButton = styled.span`
	position : absolute;
	right : 6rem;
	top : 1.1rem;
	font-size : 1rem;
	cursor : pointer;
	color : rgba(0, 0, 0, .2);
`;

export const WriteArticle = styled.span`
	position : absolute;
	right : 0;
	top : 1.2rem;
	font-size : 1rem;
	cursor : pointer;
	color : rgba(0, 0, 0, .2);
`;

export const WriteBody = styled.div`
	position : absolute;
	top : 6.6rem; 
`;

export const WriteEditorMenu = styled.div`
	display : flex;
	align-items : center;
	width : 100%;
	height : 3rem;
	font-size : 1rem;
	color : #8590a6;
	border-top :  0.05rem solid rgba(0, 0, 0, .09);
	border-bottom : 0.05rem solid rgba(0, 0, 0, .09);
`;

export const WriteEditorBody = styled.div`
	width : 100%;

`;