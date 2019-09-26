import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused : 0,
	focusedSearch : false,
	focusedInput : false,
	focusedMessage : false,
	focusedMessageNews : true,
	focusedMessagePeoples : false,
	focusedMessageLikes : false,
	focusedEnvalope : false,
	focusedPersonal : false,
	personalIn : false,
	mouseIn : false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'CLICK_HOME' :
			return state.set('focused', 0);
		case 'CLICK_ANSWER' :
		  return state.set('focused', 1);
		case 'NO_STYLE_FOCUSED' :
		  return state.set('focused', 2);
		case 'FOCUS_SEARCH' :
		  return state.set('focusedSearch', true);
		case 'BLUR_SEARCH' :
		  return state.merge({
		  	focusedSearch : false,
            focusedInput : false
		  });
		case 'CHANGE_CONTENT' :
		  return state.set('focusedInput', true);
		case 'MOUSE_ENTER' :
		  return state.set('mouseIn', true);
		case 'MOUSE_LEAVE' :
		  return state.set('mouseIn', false);
		case 'FOCUS_MESSAGE' :
		  return state.set('focusedMessage', true);
		case 'BLUR_MESSAGE' :
		  return state.set('focusedMessage', false);
		case 'FOCUS_EVALOPE' :
		  return state.set('focusedEnvalope', true);
		case 'BLUR_EVALOPE' :
		  return state.set('focusedEnvalope', false);
		case 'FOCUS_PERSONAL' :
		  return state.set('focusedPersonal', true);
		case 'BLUR_PERSONAL' :
		  return state.set('focusedPersonal', false);
		case 'BLUR_PERSONAL_IN' :
		  return state.merge({
		  	focusedPersonal : false,
		  	personalIn : false
		  });
		case 'PERSONAL_ENTER' :
		  return state.set('personalIn', true);
		case 'PERSONAL_LEAVE' :
		  return state.set('personalIn', false);
		default :
			return state;
	}
};