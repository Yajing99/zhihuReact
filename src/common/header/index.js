import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
	HeaderWrapper,
	HeaderContainer,
	Logo,
	HomeButton,
	WaitAnswer,
	SearchQuestion,
	SearchInput,
	SearchButton,
	SearchInfo,
	SearchHead,
	PersonalInformation,
	Message,
	MessageInfo,
	MessageHead,
	Envalope,
	EnvalopeInfo,
	EnvalopeHead,
	Personal,
	PersonalInfo,
	PersonalPage,
	PersonalExit,

} from './style';

function Header() {
	const focused = useSelector((state) => state.getIn(['header', 'focused']));
	const focusedAnswer = useSelector((state) => state.getIn(['header', 'focusedAnswer']));
	const focusedSearch = useSelector((state) => state.getIn(['header', 'focusedSearch']));
	const focusedInput = useSelector((state) => state.getIn(['header', 'focusedInput']));
	const focusedMessage = useSelector((state) => state.getIn(['header', 'focusedMessage']));
	const focusedMessageNews = useSelector((state) => state.getIn(['header', 'focusedMessageNews']));
	const focusedMessagePeoples = useSelector((state) => state.getIn(['header', 'focusedMessagePeoples']));
	const focusedMessageLikes = useSelector((state) => state.getIn(['header', 'focusedMessageLikes']));
	const focusedEnvalope = useSelector((state) => state.getIn(['header', 'focusedEnvalope']));
	const focusedPersonal = useSelector((state) => state.getIn(['header', 'focusedPersonal']));
	const personalIn = useSelector((state) => state.getIn(['header', 'personalIn']));
	const mouseIn = useSelector((state) => state.getIn(['header', 'mouseIn']));
	const dispatch = useDispatch();



	const getSearch = useCallback(() => {
		if (focusedSearch || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={() => dispatch({ type: 'MOUSE_ENTER' })}
					onMouseLeave={() => dispatch({ type: 'MOUSE_LEAVE' })}
				>
					<SearchHead>热搜</SearchHead>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}, [focusedSearch, mouseIn]);
	const getMessage = useCallback(() => {
		if (focusedMessage) {
			return (
				<MessageInfo>
					<MessageHead>
						<span className={focusedMessageNews ? 'iconfont news' : 'iconfont'}>&#xe614;</span>
						<span>|</span>
						<span className={focusedMessagePeoples ? 'iconfont peoples' : 'iconfont'}>&#xe63a;</span>
						<span>|</span>
						<span className={focusedMessageLikes ? 'iconfont likes' : 'iconfont'}>&#xe663;</span>
					</MessageHead>
				</MessageInfo>
			);
		} else {
			return null;
		}
	}, [focusedMessage]);
	const getEvalope = useCallback(() => {
		if (focusedEnvalope) {
			return (
				<EnvalopeInfo>
					<EnvalopeHead>我的私信</EnvalopeHead>
				</EnvalopeInfo>
			);
		} else {
			return null;
		}
	}, [focusedEnvalope]);
	const getPersonal = useCallback(() => {
		if (focusedPersonal || personalIn) {
			return (
				<PersonalInfo
					onMouseEnter={() => dispatch({ type: 'PERSONAL_ENTER' })}
					onMouseLeave={() => dispatch({ type: 'PERSONAL_LEAVE' })}
					onClick={() => dispatch({ type: 'BLUR_PERSONAL_IN' })}
				>
					<Link to='/personalpage' className='link'>
						<PersonalPage>
							<span className='iconfont'>&#xe657;</span>
							我的主页
          	</PersonalPage>
					</Link>
					<Link to='/' className='link'>
						<PersonalExit>
							<span className='iconfont'>&#xe626;</span>
							退出
          	</PersonalExit>
					</Link>
				</PersonalInfo>
			);
		} else {
			return null;
		}
	}, [focusedPersonal, personalIn]);



	return (
		<HeaderWrapper>
			<HeaderContainer>
				<Logo />
				<Link to='/home' className='link'>
					<HomeButton
						className={focused == 0 ? 'focused' : ''}
						onClick={() => dispatch({ type: 'CLICK_HOME' })}
					>首页</HomeButton>
				</Link>
				<Link to='/answer' className='link'>
					<WaitAnswer
						className={focused == 1 ? 'focused' : ''}
						onClick={() => dispatch({ type: 'CLICK_ANSWER' })}
					>等你来答</WaitAnswer>
				</Link>
				<SearchQuestion>
					<CSSTransition
						in={focusedSearch || mouseIn}
						timeout={500}
						classNames='slide'
					>
						<SearchInput
							placeholder='周杰伦新歌说好不哭'
							className={(focusedSearch || mouseIn) ? 'focused' : ''}
							onFocus={() => dispatch({ type: 'FOCUS_SEARCH' })}
							onBlur={() => dispatch({ type: 'BLUR_SEARCH' })}
							onInput={() => dispatch({ type: 'CHANGE_CONTENT' })}
						></SearchInput>
					</CSSTransition>
					<span className={focusedInput ? 'iconfont search change' : 'iconfont search'}>&#xe649;</span>
					{(focusedSearch || mouseIn) ? null :
						<SearchButton><Link to='/putquestion' className='link'>提问</Link></SearchButton>}
					{getSearch()}
				</SearchQuestion>
				<PersonalInformation>
					<Message
						tabIndex='0'
						onFocus={() => dispatch({ type: 'FOCUS_MESSAGE' })}
						onBlur={() => dispatch({ type: 'BLUR_MESSAGE' })}
					>
						<span className='iconfont message'>&#xe6f2;</span>
						{getMessage()}
					</Message>
					<Envalope
						tabIndex='1'
						onFocus={() => dispatch({ type: 'FOCUS_EVALOPE' })}
						onBlur={() => dispatch({ type: 'BLUR_EVALOPE' })}
					>
						<span className='iconfont envalope'>&#xe60f;</span>
						{getEvalope()}
					</Envalope>
					<Personal
						tabIndex='2'
						onFocus={() => dispatch({ type: 'FOCUS_PERSONAL' })}
						onBlur={() => dispatch({ type: 'BLUR_PERSONAL' })}
					>
						<img className='img-pic' src='https://pic4.zhimg.com/da8e974dc_is.jpg'></img>
						{getPersonal()}
					</Personal>
				</PersonalInformation>
			</HeaderContainer>
		</HeaderWrapper>
	);
}

export default Header;