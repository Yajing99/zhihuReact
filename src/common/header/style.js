import styled from 'styled-components';
import backgroundPic from '../../statics/知乎.png';

export const HeaderWrapper = styled.div`
	display : flex;
	justify-content : center;
	height : 3.2rem;
	width : 100%;
    background-color : #fff;
    box-shadow : 0px .5px 10px #b4b4b4; 
`;

export const HeaderContainer = styled.div`
	width : 63rem;
	display : flex;
	align-content : space-between;
	.link {
		text-decoration : none;
		width : 5rem;
	}
`;

export const Logo = styled.a.attrs({
	href: '/'
})`
	width : 8%;	
	margin-right : 5%;
	background : url(${backgroundPic});
	background-size : cover;
`;

export const HomeButton = styled.div`
	display : flex;
	align-items : center;
	justify-content : center;
	width : 2rem;
	font-size : 1rem;
	color : #8590a6;
	height : 100%;
	&.focused {
		color : #444;
	  font-weight : bold;
    border-bottom : 0.2rem solid #0084ff;
	}
	cursor : pointer;
`;

export const WaitAnswer = styled.div`
	display : flex;
	align-items : center;
	justify-content : center;
	width : 4rem;
	height : 100%;
	font-size : 1rem;
	color : #8590a6;
	&.focused {
		color : #444;
	  font-weight : bold;
    border-bottom : 0.2rem solid #0084ff;
	}
	cursor : pointer;
`;

export const SearchQuestion = styled.div`
	display : flex;
	align-items : center;
	position : relative;
	width : 23rem;
	margin : 0 7.5% 0 7.8%;
	.search {
		font-size : 1.1rem;
		margin-left : -7%;
		cursor : pointer;
	}
	.change {
    display : flex;
    justify-content : center;
    align-items : center;
    width : 3rem;
    height : 2.2rem;
    border-radius : 0.4rem;
    margin-left : -8%;
		background-color : #0084ff;
    color : #fff;
	}
`;

export const SearchInput = styled.input`
  width : 77%;
  height : 2rem;
  padding-left : 3%;
  padding-right : 12%;
  border-radius : 0.5rem;
  font-size : 1rem;
  color : #444;
  border : none;
  outline : none;
  background-color : #f6f6f6;
  &::placeholder {
  	color : #8590a6;
  	font-size : 1rem;
  }
  &.focused {
    width : 22.25rem;
    border : 0.05rem solid #8590a6;
  }
  &.slide-enter { 	
    transition : all .5s ease-in-out;
  }
  &.slide-enter-active {
    width : 22.25rem;
    border : 0.05rem solid #8590a6; 
  }
  &.slide-exit {
  	transition : all .5s ease-in-out;
  }
  &.slide-exit-active {	
  	width : 77%;
  	border : none;
  }
`;

export const SearchButton = styled.div`
	font-size : 1rem;
	margin-left : 7%;
	width : 15%;
    height : 2rem; 
    border-radius : 0.2rem;  
    background-color : #0084ff;
    cursor : pointer;
	display : flex;
	align-items : center;
	justify-content : center;  
    .link { 
    	padding-left : 20%;
    	color : #fff;
		text-decoration : none;
	}
`;

export const SearchInfo = styled.div`
  position : absolute;
  top : 3.4rem;
  width : 23.5rem;
  height : 14rem;
  box-shadow : 0 0.3rem #eee;
  background-color : #fff;
  z-index : 1;
`;

export const SearchHead = styled.div`
  display : flex;
  align-items : center;
  height : 2.5rem;
  font-size : 0.9rem;
  color : #8590a6;
  padding-left : 0.6rem;
  border-bottom : 0.1rem solid #f6f6f6; 
`;

export const PersonalInformation = styled.div`
	display : flex;
	justify-content : flex-end;
  align-items : center;
  position : relative;
  width : 12.1rem;
  color : #8590a6;
`;

export const Message = styled.div`
  flex-grow : 1;
  margin-left : 20%;
  outline : none;
  cursor : pointer;
	.message {
    font-size : 1.2rem;
	}
`;

export const MessageInfo = styled.div`
  position : absolute;
	top : 3.4rem;
	right : -2rem;
	height : 28rem;
	width : 20rem;
	background-color : #fff; 
	box-shadow : 0 0.3rem #eee;
	:after {
		position : absolute;
		content : '';
		width : 0;
		height : 0;
		top : -0.6rem;
		left : 8.4rem;
		border-left : 0.6rem solid transparent;
		border-right : 0.6rem solid transparent;
		border-bottom : 0.6rem solid #fff;
	}
	z-index : 1;
`;

export const MessageHead = styled.div`
	display : flex;
  justify-content : space-around;
  align-items : center;
	height : 3rem;
	width : 100%;
	font-size : 1.2rem;
	color : #eee;
	border-bottom : 0.1rem solid #f6f6f6;
  .iconfont {
  	font-size : 1.2rem;
  	color : #8590a6;
  	cursor : pointer;
  }
  .news, .peoples, .likes {
  	color : #0084ff;
  }
`;

export const Envalope = styled.div`
	flex-grow : 1;
	cursor : pointer;
	outline : none;
	.envalope {
		font-size : 1.2rem;
	}
`;

export const EnvalopeInfo = styled.div`
  position : absolute;
	top : 3.4rem;
	right : -5rem;
	height : 28rem;
	width : 20rem;
	background-color : #fff; 
	box-shadow : 0 0.3rem #eee;
	:after {
		position : absolute;
		content : '';
		width : 0;
		height : 0;
		top : -0.6rem;
		left : 9.2rem;
		border-left : 0.6rem solid transparent;
		border-right : 0.6rem solid transparent;
		border-bottom : 0.6rem solid #fff;
	}	
	z-index : 1;
`;

export const EnvalopeHead = styled.div`
	display : flex;
  justify-content : center;
  align-items : center;
	height : 3rem;
	width : 100%;
	font-size : 0.8rem;
	color : #8590a6;
	border-bottom : 0.1rem solid #f6f6f6;
`;

export const Personal = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
	flex-grow : 1;
	max-width : 2rem;
	height : 2rem;
	cursor : pointer;
  outline : none;
  .img-pic {
	  max-width : 2rem;
		height : 2rem;
  }
`;

export const PersonalInfo = styled.div`
  display : flex;
  flex-direction : column;
  position : absolute;
	top : 3.8rem;
	right : -2rem;
	height : 5.2rem;
	width : 6rem;
	background-color : #fff; 
	box-shadow : 0 0.3rem #eee;
	:after {
		position : absolute;
		content : '';
		width : 0;
		height : 0;
		top : -0.6rem;
		left : 2.4rem;
		border-left : 0.6rem solid transparent;
		border-right : 0.6rem solid transparent;
		border-bottom : 0.6rem solid #fff;
	}	  
	z-index : 1;
	.link {
		text-decoration : none;
		color : #8590a6;
	}
`;

export const PersonalPage = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  flex-grow : 1;
  font-size : 0.8rem;
  height : 2.6rem;
  border-bottom : 0.1rem solid #f6f6f6;
  cursor : pointer;
  .iconfont {
  	color : #8590a6;
  	padding-right : 0.2rem;
  }
`;

export const PersonalExit = styled.div`
  display : flex;
  align-items : center;

  flex-grow : 1;
  font-size : 0.8rem;
  height : 2.6rem;
  cursor : pointer;
  .iconfont {
  	color : #8590a6;
  	padding-left : 0.3rem;
  	padding-right : 0.2rem;
  }
`;