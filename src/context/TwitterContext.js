// TwitterContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TwitterContext = createContext();

const TwitterProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);

  const tweetId = '1349129669258448897';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://twitter154.p.rapidapi.com/tweet/replies?tweet_id=${tweetId}`,
          {
            headers: {
              'X-RapidAPI-Key': 'c634b6352fmsh3b0bb34b83d9902p1593a0jsn86cda020a6bd',
              'X-RapidAPI-Host': 'twitter154.p.rapidapi.com',
            },
          }
        );

        console.log(response.data); 
        if (Array.isArray(response.data.replies)) {
          setTweets(response.data.replies);
        } else {
          setTweets([]);
        }
        setForceUpdate((prev) => !prev);
      } catch (error) {
        console.error(error);
        setTweets([]);
        setForceUpdate((prev) => !prev);
      }
    };

    fetchData();
  }, [tweetId]);

  useEffect(() => {
    console.log(tweets); 
  }, [tweets]);

  return (
    <TwitterContext.Provider value={{ tweets, forceUpdate }}>
      {children}
    </TwitterContext.Provider>
  );
};

export default TwitterProvider;
