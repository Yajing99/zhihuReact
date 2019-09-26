import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	HomeWrapper,
	HomeBody,
  HomeLeft,
  Article,
  ArticleTitle,
  ArticleBody,
  ArticleBottom,
  ArticleInfo,
  ArticleAgree,
  ArticleDisagree,
  ArticleComment,
  ArticleShare,
  HomeLeftButtom
} from './style';
import Header from '../common/header';
import HomeAnswerRight from '../common/homeAnswerRight';
import axios from 'axios';

function Home() {
  const page = useSelector((state) => state.getIn(['home', 'page']));
  const word = useSelector((state) => state.getIn(['home', 'word']));
  const dispatch = useDispatch();
  const [ articleP, setarticleP ] = useState();
  const articlePage = [];
  
  useEffect(() => {
    dispatch({ type : 'CLICK_HOME' });
  }, [dispatch]);

  useEffect(() => {
    axios.get('./api/articles.json').then((res) => {
      let articleListP = res.data.data;
      for(let i = 0; i < (page+1)*10; i++) {
        articlePage.push(
          <Article key={ articleListP[i].id }>
            <ArticleTitle>{ articleListP[i].title }</ArticleTitle>
            <ArticleBody>
              <img className='img-pic' src={ articleListP[i].imgUrl } />
              <div className='content'>{ articleListP[i].content }</div>
            </ArticleBody>
            <ArticleBottom>
              <ArticleInfo>
                <ArticleAgree>
                  <span className='iconfont'>&#xe643;</span>
                  <span>赞同 { articleListP[i].agree }</span>
                </ArticleAgree>
                <ArticleDisagree><span className='iconfont'>&#xe642;</span></ArticleDisagree>
              </ArticleInfo>
              <ArticleComment>
                <span className='iconfont'>&#xe763;</span>
                <span>{ articleListP[i].comment }条评论</span>
              </ArticleComment>
              <ArticleShare>
                <span className='iconfont'>&#xe618;</span>
                <span>分享</span>
              </ArticleShare>
              <ArticleShare>
                <span className='iconfont'>&#xe783;</span>
                <span>收藏</span>
              </ArticleShare>
              <ArticleShare>
                <span className='iconfont'>&#xe60d;</span>
                <span>举报</span>
              </ArticleShare>                
            </ArticleBottom>
          </Article>
        );
      }
      setarticleP(articlePage);
      console.log(articleP);
    }).catch((err) => {
      console.log(err);
    });
  }, [page]);

	return (
    <HomeWrapper>
      <Header />
      <HomeBody>
        <HomeLeft>
          { articleP }
          <HomeLeftButtom
           onClick = { () => dispatch({ type : 'NEXT_PAGE', page : page }) }
          >{ word }</HomeLeftButtom>
        </HomeLeft>
        <HomeAnswerRight />
      </HomeBody>
    </HomeWrapper> 
	);

}

export default Home;