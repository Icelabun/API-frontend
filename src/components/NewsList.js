import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/news')
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading news...</p>
      ) : news.length > 0 ? (
        news.map((article) => (
          <div key={article.id} className="news-item">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
};

export default NewsList;
