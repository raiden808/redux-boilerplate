import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const ConnectedPosts = ({ getData, articles }) => {

  useEffect(() => {

    getData();

    //console.log(articles)

  }, [])

  useEffect(() => {

    console.log('articles', articles)

  }, [articles])


  return (
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

const Post = connect(
  mapStateToProps,
  { getData }
)(ConnectedPosts);

export default Post