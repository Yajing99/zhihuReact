import { fromJS } from 'immutable';

const defaultState = fromJS({
	page : 0,
	word : '加载更多'
});

export default(state = defaultState, action) => {
	switch(action.type) {
		case 'NEXT_PAGE' : 
			if(action.page < 3) {
				return state.set('page', action.page+1);
			} else {
				return state.set('word', '没有更多了');
			}
		default : 
			return state;
	}
};