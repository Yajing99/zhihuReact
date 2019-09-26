import { fromJS } from 'immutable';

const defaultState = fromJS({
	signIn : false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case "SIGN_IN" :
			return state.set('signIn', true);
		default :
			return state;
	}
};