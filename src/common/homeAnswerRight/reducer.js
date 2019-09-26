import { fromJS } from 'immutable';

const defaultState = fromJS({
	collect : 0,
	question : 0,
	invite : 0
});

export default(state = defaultState, action) => {
	switch(action.type) {
		case 0 : 
			return 0;
		default :  
			return state;
	}
};