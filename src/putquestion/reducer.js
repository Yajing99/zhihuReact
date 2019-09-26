import { fromJS } from 'immutable';

const defaultState = fromJS({
	sendQuestion : false,
});

export default(state=defaultState, action) => {
	switch(action.type) {
		case 'SUCCESS_QUESTION':
			return state.set('sendQuestion', true);
		default :
			return state;
	}
};