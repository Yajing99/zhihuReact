import React from 'react';
import {
	AnswerWrapper,
	AnswerBody,
	AnswerLeft,


} from './style';
import Header from '../common/header';
import HomeAnswerRight from '../common/homeAnswerRight';

function Answer() {

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