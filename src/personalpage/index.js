import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	PersonalPageWrapper,
	PersonalPageBody,
	PersonalPageOne,
	PersonalPageInput,
	PersonalPageButton,
	PersonalPagePhoto,
	PersonalPageTwo,
	PersonalPageHeader,
	PersonalPageInfo,
	PersonalPageThree,

} from './style';
import Header from '../common/header';

function PersonalPage() {
	const name = useSelector((state) => state.getIn(['personalPage', 'name']));
	const personalHomePage = useSelector((state) => state.getIn(['PersonalPage', 'personalHomePage']));
	const sex = useSelector((state) => state.getIn(['personalPage', 'sex']));
	const sexButton = useSelector((state) => state.getIn(['personalPage', 'sexButton']));
	const mouse = useSelector((state) => state.getIn(['personalPage', 'mouse']));
	const mouseNa = useSelector((state) => state.getIn(['personalPage', 'mouseNa']));
	const nameButton = useSelector((state) => state.getIn(['personalPage', 'nameButton']));
	const introduce = useSelector((state) => state.getIn(['personalPage', 'introduce']));
	const introduceButton = useSelector((state) => state.getIn(['personalPage', 'introduceButton']));
	const lifePlace = useSelector((state) => state.getIn(['personalPage', 'lifePlace']));
	const lifePlaceButton = useSelector((state) => state.getIn(['personalPage', 'lifePlaceButton']));
	const profession = useSelector((state) => state.getIn(['personalPage', 'profession']));
	const professionButton = useSelector((state) => state.getIn(['personalPage', 'professionButton']));
	const proExperience = useSelector((state) => state.getIn(['personalPage', 'proExperience']));
    const proExperienceButton = useSelector((state) => state.getIn(['personalPage', 'proExperienceButton']));
	const eduExperience = useSelector((state) => state.getIn(['personalPage', 'eduExperience']));
	const eduExperienceButton = useSelector((state) => state.getIn(['personalPage', 'eduExperienceButton']));
	const focused = useSelector((state) => state.getIn(['header', 'focused']));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type : 'NO_STYLE_FOCUSED' });
	}, [dispatch]);

	return (
		<PersonalPageWrapper>
			<Header />
			<PersonalPageBody>
				<PersonalPageOne>
					<PersonalPageInput 
					 type='file' 
					 accept='.jpg, .jpeg, .png'
					 onChange = { (e) => console.log(window.URL.createObjectURL(e.target.value.getAsDataURL())) } 
					/>
					<PersonalPageButton>
						<span className='iconfont'>&#xe664;</span>
						<span>上传封面图片</span>
					</PersonalPageButton>
					<PersonalPagePhoto imgUrl='https://pic4.zhimg.com/da8e974dc_is.jpg'>
						
					</PersonalPagePhoto>
				</PersonalPageOne>
				<PersonalPageTwo>
					<PersonalPageHeader>
						<span 
						 className='name'
						 onMouseEnter = { () => dispatch({ type : 'MOUSE_ENTER_NA' })}
						 onMouseLeave = { () => dispatch({ type : 'MOUSE_LEAVE_NA' })}
						>{ name }{ mouseNa ? <span className='iconfont fillin'>&#xe61f;{ nameButton }</span> : null }</span>
						<Link to='/home' className='link' onClick={ () => dispatch({ type : 'CLICK_HOME' }) }>
							<span className='personalHomePage'>๑返回首页๑</span>
						</Link>
					</PersonalPageHeader>
					<PersonalPageInfo>
						<PersonalPageThree
						 onMouseEnter = { () => dispatch({ type : 'MOUSE_ENTER_IN' })}
						 onMouseLeave = { () => dispatch({ type : 'MOUSE_LEAVE_IN' })}
						>
							<span className='question'>性别</span>
							<span className = 'introduce'>{ sex }</span>
							{ mouse ? <span className='iconfont fillin'>&#xe61f;{ sexButton }</span> : null }
						</PersonalPageThree>
						<PersonalPageThree>
							<span className='question'>一句话介绍</span>
							<span className={ introduce ? 'introduce' : '' }>{ introduce }</span>
							<span className='iconfont fillin'>&#xe61f;{ introduceButton }</span>							
						</PersonalPageThree>
						<PersonalPageThree>
							<span className='question'>居住地</span>
							<span className={ introduce ? 'introduce' : '' }>{ lifePlace }</span>
							<span className='iconfont fillin'>&#xe61f;{ lifePlaceButton }</span>												
						</PersonalPageThree>
						<PersonalPageThree>
							<span className='question'>所在行业</span>
							<span className={ introduce ? 'introduce' : '' }>{ profession }</span>
							<span className='iconfont fillin'>&#xe61f;{ professionButton }</span>							
						</PersonalPageThree>
						<PersonalPageThree>
							<span className='question'>职业经历</span>
							<span className={ introduce ? 'introduce' : '' }>{ proExperience }</span>
							<span className='iconfont fillin'>&#xe61f;{ proExperienceButton }</span>							
						</PersonalPageThree>
						<PersonalPageThree>
							<span className='question'>教育经历</span>
							<span className={ introduce ? 'introduce' : '' }>{ eduExperience }</span>
							<span className='iconfont fillin'>&#xe61f;{ eduExperienceButton }</span>							
						</PersonalPageThree>
					</PersonalPageInfo>
				</PersonalPageTwo>
			</PersonalPageBody>
		</PersonalPageWrapper>
	);
}

export default PersonalPage;