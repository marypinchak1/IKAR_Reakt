import React, { useState, useEffect } from 'react'
import NewsCard from '../components/news/HomeNewsCard'

const Home = () => {
  let [news, setNews] = useState([]);
  let [primaryPosts, setPrimaryPosts] = useState([]);

  useEffect(() => {
    getNews();
    getPrimaryPosts();
  }, []);



  useEffect(() => {
    console.log(news)
    console.log(primaryPosts)
  }, [news, primaryPosts]);


  const BASE_URL = "https://admin.ikar-thinktank.org/api";
  const getNews = async () => {
    await fetch(`${BASE_URL}/news`)
      .then((response) => response.json())
      .then((res) => {
        const CLEARED_DATA = res.data.map((item) => {
          return {
            id: item.id,
            ...item.attributes,
          };
        });
        setNews(CLEARED_DATA);
      });
  };
  const getPrimaryPosts = async () => {
    await fetch(`${BASE_URL}/primary-post`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        const PRIMARY_POSTS_DATA = res.data.map((item) => {
          return (
            <NewsCard key={item.id} news={item}/>
          );
        });
        setPrimaryPosts(PRIMARY_POSTS_DATA);
      })
      .catch((err) => {
        console.log(err);
      })
  };




  return (
    <>
      <div>Home</div>
      {news.map((item) => {
        return (
          <div key={item.id} >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        );
      })}
      <div>
        {primaryPosts.map((item) => {
          return (
            <div key={item.id}>
              {setPrimaryPosts}
            </div>         
            );
        })}
      </div>
    </>
  );
};

export default Home