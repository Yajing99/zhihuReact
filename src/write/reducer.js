import { fromJS } from 'immutable';

const defaultState = fromJS({
	editorContent : '',
	submitArticle : false,
});

export default(state = defaultState, action) => {
	switch(action.type) {
		case 'EDITOR_CHANGE' :
			return state.set('editorContent', action.words);
		case 'SUBMIT_ARTICLE' :
			return state.set('submitArticle', true);
		default :
			return state;
	}
};
