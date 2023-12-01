// TweetList.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { TwitterContext } from '../context/TwitterContext';

const TweetsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const TweetItem = styled.li`
  list-style: none;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .user-name {
      font-weight: bold;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;

    button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      outline: none;

      &:hover {
        background-color: #2980b9;
      }
    }
  }
`;

const TweetList = () => {
  const { tweets } = useContext(TwitterContext);

  if (!Array.isArray(tweets)) {
    console.error('tweets is not an array:', tweets);
    return <p>Error loading tweets</p>;
  }

  return (
    <TweetsContainer>
      <h2>Tweets</h2>
      <ul>
        {tweets.map((tweet) => (
          <TweetItem key={tweet.id}>
            <div className="user-info">
              {tweet.user && (
                <>
                  <img
                    src={'https://png.pngitem.com/pimgs/s/482-4821503_vernon-unsworth-png-download-elon-musk-smile-transparent.png'}
                    alt="User Avatar"
                    className="user-avatar"
                  />
                  <span className="user-name">{tweet.user.name}</span>
                </>
              )}
            </div>
            {tweet.text}
            {tweet.media && (
              <img
                src={tweet.media[0].url}
                alt="Tweet"
              />
            )}
            <div className="actions">
              <button>♡</button>
              {/* Boshqa tugmachalar shu yerga qo'shishingiz mumkin */}
            </div>
          </TweetItem>
        ))}
      </ul>
    </TweetsContainer>
  );
};

export default TweetList;
