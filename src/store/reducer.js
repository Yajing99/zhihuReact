import { combineReducers } from 'redux-immutable';
import signInReducer from '../login/signin/reducer';
import signUpReducer from '../login/signup/reducer';
import headerReducer from '../common/header/reducer';
import homeAnswerRightReducer from '../common/homeAnswerRight/reducer';
import homeReducer from '../home/reducer';
import personalPageReducer from '../personalpage/reducer';
import writeReducer from '../write/reducer';
import readReducer from '../read/reducer';
import putQuestionReducer from '../putquestion/reducer';

const reducer = combineReducers({
	signIn : signInReducer, 
	signUp : signUpReducer,
	header : headerReducer,
    homeAnswerRight : homeAnswerRightReducer,
    home : homeReducer,
    personalPage : personalPageReducer,
    write : writeReducer,
    read : readReducer, 
    putQuestion : putQuestionReducer
});

export default reducer;