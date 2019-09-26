import React, { Fragments, useCallback, useEffect } from 'react';
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
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch({ type : 'CLICK_HOME' });
  }, [dispatch]);

  const getArticle = useCallback(() => {
    axios.get('./api/articles.json').then((res) => {
      const articlePage = [];
      let articleListP = res.data.data;
      for(let i = 0; i < (page+1)*10; i++) {
        articlePage.push(
          <Article key={ i }>
            <ArticleTitle>{ articleListP[i].title }</ArticleTitle>
            <ArticleBody>
              <img className='img-pic' src='https://pic1.zhimg.com/80/v2-7d3525de6b0576aa26d1ef361afcc170_hd.jpg' />
              <div className='content'>{ articleListP[i].content }</div>
            </ArticleBody>
            <ArticleBottom>
              <ArticleInfo>
                <ArticleAgree>
                  <span className='iconfont'>&#xe643;</span>
                  <span>赞同 { articleListP.agree }</span>
                </ArticleAgree>
                <ArticleDisagree><span className='iconfont'>&#xe642;</span></ArticleDisagree>
              </ArticleInfo>
              <ArticleComment>
                <span className='iconfont'>&#xe763;</span>
                <span>{ articleListP.comment }条评论</span>
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
      console.log(articlePage);
      return articlePage;
    }).catch((err) => {
      console.log(err);
    });
  }, [page]);

	return (
    <HomeWrapper>
      <Header />
      <HomeBody>
        <HomeLeft>
          <div dangerouslySetInnerHTML={{__html : getArticle()}}></div>
          <HomeLeftButtom
           onClick = { () => dispatch({ type : 'NEXT_PAGE', page : page }) }
          >加载更多</HomeLeftButtom>
        </HomeLeft>
        <HomeAnswerRight />
      </HomeBody>
    </HomeWrapper> 
	);

}

export default Home;