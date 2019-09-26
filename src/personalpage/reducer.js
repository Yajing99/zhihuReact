import { fromJS } from 'immutable';

const defaultState = fromJS({
	personalHomePage : false,
	name : '南方姑娘',
	sex : '未知',
	sexButton : '修改',
	mouse : false,
	mouseNa : false,
	nameButton : '修改',
	introduce : '',
	introduceButton : '填写',
	lifePlace : '',
	lifePlaceButton : '添加居住地',
	profession : '',
	professionButton : '请填写行业信息',
	proExperience : '',
	proExperienceButton : '添加职业经历',
	eduExperience : '',
	eduExperienceButton : '添加教育经历',
});

export default(state = defaultState, action) => {
	switch(action.type) {
		case 'MOUSE_ENTER_IN' : 
			return state.set('mouse', true);
		case 'MOUSE_LEAVE_IN' :
			return state.set('mouse', false);
		case 'MOUSE_ENTER_NA' :
			return state.set('mouseNa', true);
		case 'MOUSE_LEAVE_NA' :
			return state.set('mouseNa', false);
		default : 
			return state;
	}
};