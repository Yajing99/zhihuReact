import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	AnswerWrapper,
	AnswerBody,
	AnswerLeft,


} from './style';
import Header from '../common/header';
import HomeAnswerRight from '../common/homeAnswerRight';

function Answer() {
	const dispatch = useDispatch();

	return (
  		<AnswerWrapper>
  			<Header />
  			<AnswerBody>
  				<AnswerLeft>


  				</AnswerLeft>
  				<HomeAnswerRight />
  			</AnswerBody>
  		</AnswerWrapper>
	);

}

export default Answer;