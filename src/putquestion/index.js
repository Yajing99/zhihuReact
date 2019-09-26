import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	PutQuestionWrapper,
	PutQuestionInput,
	PutQuestionButton
} from './style';
import qs from 'qs';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function PutQuestion() {
	const sendQuestion = useSelector((state) => state.getIn(['putQuestion', 'sendQuestion']));
	let question = '';
	const dispatch = useDispatch();

	const postQuestion = useCallback(() => {
		if(question) {
			axios.post('', qs.stringify({
				question : question
			})).then((res) => {
				console.log(res);
				dispatch( {type : 'SUCCESS_QUESTION'} );
			}).catch((err) => {
				console.log(err);
			});
		}
	});

	return (
		<PutQuestionWrapper>
			<PutQuestionInput 
			 type = 'textarea'
			 placeholder='请输入你的问题'
			 onChange = { (e) => question = e.target.value }
			></PutQuestionInput>
			<PutQuestionButton
			 onClick={ postQuestion() }
			>提交</PutQuestionButton>
			{ sendQuestion ? <Redirect to='/home' /> : null }
		</PutQuestionWrapper>
	);
}

export default PutQuestion;