import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	RightWrapper,
	TransitionInfo,
	DisplayTag,
	WriteInfo,
	WriteIdea,
	Write,
	WriteQuestion,
	EnjoyInfo,
	EnjoyLife,
	EnjoyLibrary,
	EnjoyCircle,
	EnjoyColumn,
	EnjoyPay
} from './style';
import useInterval from './useInterval';
import pictureone from '../../statics/僵小鱼4.jpg';
import picturetwo from '../../statics/僵小鱼5.jpg';
import picturethree from '../../statics/僵小鱼8.jpg';

function HomeAnswerRight() {
	const [selected, setSelected] = useState(0);
	const [stop, setStop] = useState(false);
	const focused = useSelector((state) => state.getIn(['header', 'focused']));
	const collect = useSelector((state) => state.getIn(['homeAnswerRight', 'collect']));
	const question = useSelector((state) => state.getIn(['homeAnswerRight', 'question']));
	const invite = useSelector((state) => state.getIn(['homeAnswerRight', 'invite']));
	const dispatch = useDispatch();
	let eleDrag;

	useInterval(() => {
		selected < 2 ? setSelected(selected + 1) : setSelected(0)
	}, stop ? null : 2000);

	const preventDefault = (e) => {
		e.preventDefault();
	};

	const esetData = (e) => {
		eleDrag = e.target.id;
	};

	const egetData = (e) => {
		console.log(eleDrag);
		if(eleDrag) {
			e.target.parentNode.appendChild(document.getElementById(eleDrag));
		}
	};

	const getEnjoy = useCallback(() => {
		if (!focused) {
			return (
				<EnjoyInfo>
					<EnjoyLife 
					 id = 'life'
					 className='enjoy'
					 draggable='true'
					 onDragOver={(e) => preventDefault(e)}
					 onDrag={(e) => esetData(e)}
					 onDrop={(e) => egetData(e)}					
					>
						<span className='iconfont lif'>&#xe62e;</span>
						生活
					</EnjoyLife>
					<EnjoyLibrary 
					 id = 'library'
					 className='enjoy'
					 draggable='true'
					 onDragOver={(e) => preventDefault(e)}
					 onDrag={(e) => esetData(e)}
					 onDrop={(e) => egetData(e)}
					>
						<span className='iconfont lib'>&#xe607;</span>
						书店
					</EnjoyLibrary>
					<EnjoyCircle 
					 id = 'circle'
					 className='enjoy'
					 draggable='true'
					 onDragOver={(e) => preventDefault(e)}
					 onDrag={(e) => esetData(e)}
					 onDrop={(e) => egetData(e)}					 
					>
						<span className='iconfont cir'>&#xe637;</span>
						圆桌
					</EnjoyCircle>
					<EnjoyColumn 
					 id = 'column'
					 className='enjoy'
					 draggable='true'
					 onDragOver={(e) => preventDefault(e)}
					 onDrag={(e) => esetData(e)}
					 onDrop={(e) => egetData(e)}					
					>
						<span className='iconfont col'>&#xe62b;</span>
						专栏
					</EnjoyColumn>
					<EnjoyPay 
					 id = 'pay'
					 className='enjoy'
					 draggable='true'
					 onDragOver={(e) => preventDefault(e)}
					 onDrag={(e) => esetData(e)}
					 onDrop={(e) => egetData(e)}					 
					>
						<span className='iconfont mon'>&#xe641;</span>
						付费咨询
					</EnjoyPay>
				</EnjoyInfo>
			);
		}
	}, [focused]);

	return (
		<RightWrapper>
			<TransitionInfo
				onMouseEnter={() => setStop(true)}
				onMouseLeave={() => setStop(false)}
			>
				<img src={pictureone} className={selected == 0 ? 'active' : ''}></img>
				<img src={picturetwo} className={selected == 1 ? 'active' : ''}></img>
				<img src={picturethree} className={selected == 2 ? 'active' : ''}></img>
				<span className='left' onClick={() => selected > 0 ? setSelected(selected - 1) : setSelected(2)}>&lt;</span>
				<span className='right' onClick={() => selected < 2 ? setSelected(selected + 1) : setSelected(0)}>&gt;</span>
				<DisplayTag>
					<div className={selected == 0 ? 'active' : ''}></div>
					<div className={selected == 1 ? 'active' : ''}></div>
					<div className={selected == 2 ? 'active' : ''}></div>
				</DisplayTag>
			</TransitionInfo>
			<WriteInfo>
				<WriteIdea>
					<Write
						id='article'
						draggable='true'
						onDragOver={(e) => preventDefault(e)}
						onDrag={(e) => esetData(e)}
						onDrop={(e) => egetData(e)}
					>
						<span className='iconfont'>&#xe659;</span>
						写文章
					</Write>
					<Write
						id='attention'
						draggable='true'
						onDragOver={(e) => preventDefault(e)}
						onDrag={(e) => esetData(e)}
						onDrop={(e) => egetData(e)}
					>
						<span className='iconfont'>&#xe61d;</span>
						关注的人
					</Write>
					<Write
						id='fans'
						draggable='true'
						onDragOver={(e) => preventDefault(e)}
						onDrag={(e) => esetData(e)}
						onDrop={(e) => egetData(e)}
					>
						<span className='iconfont'>&#xe665;</span>
						粉丝
					</Write>
				</WriteIdea>
				<WriteQuestion>
					<span className='iconfont'>&#xe617;</span>
					我的稍后答
			  </WriteQuestion>
				<WriteQuestion>
					<span className='iconfont'>&#xe64a;</span>
					我的草稿
			  </WriteQuestion>
			</WriteInfo>
			{getEnjoy()}
			<WriteInfo>
				<WriteQuestion className='hover'>
					<span className='iconfont'>&#xe783;</span>
					我的收藏
						<div className='collect'>{collect}</div>
				</WriteQuestion>
				<WriteQuestion className='hover'>
					<span className='iconfont'>&#xe605;</span>
					我关注的问题
						<div className='collect'>{question}</div>
				</WriteQuestion>
				<WriteQuestion>
					<span className='iconfont'>&#xe61b;</span>
					我的邀请
						<div className='collect'>{invite}</div>
				</WriteQuestion>
				<WriteQuestion>
					<span className='iconfont'>&#xe622;</span>
					站务中心
					</WriteQuestion>
				<WriteQuestion>
					<span className='iconfont'>&#xe6d5;</span>
					版权服务中心
					</WriteQuestion>
			</WriteInfo>
		</RightWrapper>
	);
}

export default HomeAnswerRight;
