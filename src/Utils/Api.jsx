import axios from "axios";

export const fetchAllArticles = () => {
  return axios
    .get(`https://nc-news-iweb.onrender.com/api/articles`)
    .then((response) => {
      return response.data.articleData;
    });
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-iweb.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    });
};

export const fetchCommentsByArticleId = (article_id) => {
  return axios
    .get(
      `https://nc-news-iweb.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response.data.commentData;
    });
};

export const patchVotesByArticle_Id = (article_id, inc_votes) => {
  return axios.patch(
    `https://nc-news-iweb.onrender.com/api/articles/${article_id}`,
    inc_votes
  );
};

export const postCommentByArticle_Id = (article_id, commentData) => {
  return axios
    .post(
      `https://nc-news-iweb.onrender.com/api/articles/${article_id}/comments`,
      { username: "grumpy19", body: commentData }
    )
    .then((response) => {
      return response.data.commentData;
    });
};

export const deleteCommentByCommentId = (comment_id) => {
  return axios.delete(
    `https://nc-news-iweb.onrender.com/api/comments/${comment_id}`
  );
};
