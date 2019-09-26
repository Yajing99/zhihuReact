import styled from 'styled-components';

export const HomeWrapper = styled.div`
	display : flex;
	justify-content : center;
	position : relative;
	width : 100%;
	height : 100%;
`;

export const HomeBody = styled.div`
	display : flex;
    position : absolute;
	top : 3.6rem;
	width : 63rem;
`;

export const HomeLeft = styled.div`
	width : 43.5rem;
	margin-right : 0.5rem;
	background-color : #fff;
`;

export const Article = styled.div`
	width : 41.5rem;
	height : 12rem;
	padding : 1rem 1rem;
	border-bottom : 0.08rem solid #f0f2f7;
`;

export const ArticleTitle = styled.div`
	width : 100%;
	font-size : 1.1rem;
	color : #1a1a1a;
	font-weight : bold;
	margin-bottom : 0.8rem;
`;

export const ArticleBody = styled.div`
	display : flex;
	justify-content : space-between;
	width : 100%;
	height : 8rem;
	.img-pic {
		width : 12.8rem;
		height : 100%;
		background-size : cover;
		border-radius : 0.3rem;
		margin-right : 0.8rem;
	}
	.content {
		margin-top : 0.1rem;
		width : 28.2rem;
		font-size : 1rem;
		color : #1a1a1a;
		line-height : 1.5rem;
		:hover {
			color : #646464;
		}
	}
`;

export const ArticleBottom = styled.div`
	display : flex;
	justify-content : space-between;
	align-items : center;
	margin-top : 0.5rem;
	width : 70%;
	height : 2rem;	
`;

export const ArticleInfo = styled.div`
	display : flex;
	justify-content : space-between;
	width : 8.8rem;
	height : 100%;
`;

export const ArticleAgree = styled.div`
	display : flex;
	justify-content : center;
	align-items : center;
	width : 6.3rem;
	background-color : rgba(0,132,255,.1);
	border-radius : 0.1rem;
	font-size : 0.9rem;
	color : #0084ff;
	.iconfont {
		color : #0084ff;
		margin-right : 0.3rem;
		font-size : 0.6rem;
	}
	cursor : pointer;
`;

export const ArticleDisagree = styled.div`
	display : flex;
	justify-content : center;
	align-items : center;
	width : 2rem;
	background-color : rgba(0,132,255,.1);
	.iconfont {
		font-size : 0.6rem;
		color : #0084ff;
	}
	cursor : pointer;
`;

export const ArticleComment = styled.div`
	display : flex;
	align-items : center;
	justify-content : center;
	width : 7.6rem;
	height : 100%;
	color : #8590a6;
	font-size : 0.9rem;
	cursor : pointer;
`;

export const ArticleShare = styled.div`
	display : flex;
	justify-content : space-between;
	align-items : center;
	width : 3rem;
	height : 100%;
	color : #8590a6;
	font-size : 0.9rem;
	cursor : pointer;
`;

export const HomeLeftButtom = styled.div`
	display : flex;
	justify-content : center;
	align-items : center;
	margin-top : 2rem;
	margin-left : 15%;
	margin-right : 15%;
	height : 2rem;
	font-size : 1rem;
	background-color : #0084ff;
	border-radius : 2rem;
	color : #fff;
	cursor : pointer;
`;








