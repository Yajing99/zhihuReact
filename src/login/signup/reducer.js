import { fromJS } from 'immutable';

const defaultState = fromJS({
	signUp : false
});

export default(state = defaultState, action) => {
	switch(action.type) {
		case  'SIGN_UP':
			return state.set('signUp', true);
		case 'SIGN_UP_OUT' :
			return state.set('signUp', false);
		default :
			return state; 
	}
};