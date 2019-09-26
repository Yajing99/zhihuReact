import { fromJS } from 'immutable';

const defaultState = fromJS({

});

export default(state = defaultState, action) => {
	switch(action.type) {
		case 0 : 
			return 0;
		default : 
			return state;
	}
};