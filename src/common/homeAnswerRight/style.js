import styled from 'styled-components';

export const RightWrapper = styled.div`
	width : 19rem;
`;

export const TransitionInfo = styled.div`
	position : relative;
	width : 100%;
    margin-bottom : 0.5rem;
    background-color : #fff;
    height : 12.5rem;
    img {
    	width : 0;
    	height : 0;
    	background-size : contain;
    	&.active {
    		width : 100%;
    	    height : 100%;
    	}
    }
    span {
    	display : flex;
    	justify-content : center;
    	align-items : center;
		position : absolute;
		width : 1.5rem;
		height : 2rem;
		font-size : 0.6rem;
		color : #fff;
		background-color : rgba(0, 0, 0, .1);
		cursor : pointer;
		top : 5.25rem;
		:hover {
			background-color : rgba(0, 0, 0, .5);
		}
    }
    .left {
		left : 0;
    }
    .right {
		right : 0;
    }
`;

export const DisplayTag = styled.div`
	display : flex;
	justify-content : space-around;
	align-items : center;
	position : absolute;
	top : 11rem;
	left : 8rem; 
	width : 3rem;
	height : 1rem;
	border-radius : 0.5rem;
	background-color : rgba(255, 255, 255, .3);
	div {
		width : 0.5rem;
		height : 0.5rem;
		background-color : #fff;
		border-radius : 0.5rem;
		&.active {
			background-color : #ffdd55;
		}
	}
`;

export const WriteInfo = styled.div`
	width : 100%;
    margin-bottom : 0.5rem;
    background-color : #fff;
`;

export const WriteIdea = styled.div`
	display : flex;
	width : 100%;
	max-height : 6.5rem;
	min-height : 6.5rem;
	margin-bottom : 1rem;	
`;

export const Write = styled.div`
	display : flex;
	flex-direction : column;
	align-items : center;
	flex-grow : 1;
	font-size : 1rem;
	color : #444;
	cursor : pointer;
	height : 100%;
	.iconfont {
		color : #8590a6;
		font-size : 1.2rem;
		display : block;
		margin-top : 2.5rem;
		margin-bottom : 0.8rem;
	}
	:hover {
		color : #175199;
	}
`;

export const WriteQuestion = styled.div`
	display : flex;
	position : relative;
	align-items : center;
	width : 100%;
	height : 2.5rem;
	font-size : 0.9rem;
	color : #8590a6;
	border-bottom : 0.1rem solid #f6f6f6; 
	cursor : pointer;
	.iconfont {
		font-size : 0.9rem;
		margin-left : 1rem;
		margin-right : 0.5rem;
	}
	&.hover {
		:hover {
			background-color : #f6f6f6;
			.collect {
				background-color : #fff;
			}
		}
	}
	.collect {
		display : flex;
		align-items : center;
		justify-content : center;
		position : absolute;
		width : 1.5rem;
		height : 1.5rem;
		font-size : 0.5rem;
		color : #8590a6;
		right : 1.5rem;
		background-color : #f6f6f6;
	}
`;

export const EnjoyInfo = styled.div`
	display : flex;
	justify-content : flex-start;
	flex-wrap : wrap;
	width : 100%;
	max-height : 15rem;
	min-height : 15rem;
	margin-bottom : 0.5rem;
    background-color : #fff;
    .enjoy {
		display : flex;
		flex-direction : column;
		align-items : center;
		flex-grow : 1;
		min-width : 6.3rem;
		max-width : 6.3rem;
		height : 7.5rem;
		color : #8590a6;
		font-size : 1rem;
		cursor : pointer;    
		.iconfont {
			font-size : 1.5rem;
	        margin-top : 2.5rem;
	        margin-bottom : 0.8rem;
	    }	
    }
`;

export const EnjoyLife = styled.div`
	:hover, .lif {
		color : rgb(255, 207, 0);
	}
`;

export const EnjoyLibrary = styled.div`
	:hover, .lib {
		color : rgb(67, 212, 128);
	}
`;

export const EnjoyCircle = styled.div`
	:hover, .cir {
		color : rgb(0, 132, 255);
	}
`;

export const EnjoyColumn = styled.div`
	:hover, .col {
		color : rgb(15, 136, 253);
	}
`;

export const EnjoyPay = styled.div`
	:hover, .mon {
		color : rgb(84, 120, 240);
	}
`;