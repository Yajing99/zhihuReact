import styled from 'styled-components';

export const PersonalPageWrapper = styled.div`
	display : flex;
	justify-content : center;
	position : relative;
	width : 100%;
	height : 80rem;
`;

export const PersonalPageBody = styled.div`
	display : flex;
	flex-direction : column;
	align-items : center;
    position : absolute;
	top : 3.6rem;
	width : 63rem;
	height : 75rem;
	border : 0.03rem solid rgba(0, 0, 0, .05);

`;

export const PersonalPageOne = styled.div`
	position : relative;
	width : 100%;
	height : 15rem;
	border : 0.1rem solid rgba(0, 0, 0, .05);
`;

export const PersonalPageInput = styled.input`
	width : 100%;
	height : 100%;
	opacity : 0;
	cursor : pointer;
`;

export const PersonalPageButton = styled.span`
	display : flex;
	justify-content : center;
	align-items : center;
	margin-top : -13rem;
	margin-left : 52rem;
	width : 7.6rem;
	height : 2.2rem;
	font-size : 0.9rem;
	color : #d3d3d3;
	cursor : pointer;
	border : 0.05rem solid rgba(0, 0, 0, .09);
	.iconfont {
		font-size : 1.1rem;
	}
`;

export const PersonalPagePhoto = styled.div`
	position : absolute;
	top : 13.5rem;
	left : 1.5rem;
	z-index : 1;
	width : 10rem;
	height : 10rem;
	border-radius : 0.5rem;
	border : 0.1rem solid #fff;
	background-color : rgb(26, 26, 26);
	background-size : cover;
	background-image : url(${(props) => props.imgUrl});
`;

export const PersonalPageTwo = styled.div`
	position : absolute;
	top : 15.2rem;
	width : 100%;
	height : 59.7rem;
	background-color : #fff;
`;

export const PersonalPageHeader = styled.div`
	display : flex;
	align-items : center;
	justify-content : space-between;
	width : 49rem;
	margin-left : 13rem;
	height : 4rem;
	.name {
		color : #1a1a1a;
		font-size : 2rem;
		font-weight : bold;
		cursor : pointer;
	}
	.personalHomePage {
		color : #8590a6;
		font-size : 1rem;
		cursor : pointer;
		:hover {
			color : #444;
		}
	}
	.fillin {
		margin-left : 1rem;
		color : #175199; 
		cursor : pointer;
		font-size : 1rem;
		font-weight : normal;
		:hover {
			color : rgb(15, 136, 253);
	    }	
	}
	.link {
		text-decoration : none;
	}
`;

export const PersonalPageInfo = styled.div`
	display : flex;
	flex-direction : column;
	margin-top : 2rem;
	margin-left : 13rem;
	width : 49rem;
	height : 48rem;
`;

export const PersonalPageThree = styled.div`
	display : flex;
	align-items : center;
	flex-grow : 1;
	font-size : 1rem;
	border-bottom : 0.05rem solid rgba(0, 0, 0, .09);
	.question {
		color : #444;
		font-weight : bold;
		width : 10rem;
	}
	.introduce { 
		color : #1a1a1a;	
	}
	.fillin {
		margin-left : 1rem;
		color : #175199; 
		cursor : pointer;
		:hover {
			color : rgb(15, 136, 253);
		}
	}
`;

