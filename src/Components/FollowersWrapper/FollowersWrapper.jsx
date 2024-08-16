import { useState, useEffect } from "react";
import './FollowersWrapper.css'
import FollowerItem from "../FollowerItem/FollowerItem";

function FollowersWrapper() {
  const [followers, setFollowers] = useState(
    [
      {
          "id":1,
          "platform": "facebook",
          "username": "@nathanf",
          "metric": "Followers",
          "value": 1987,
          "change": "12 Today",
          "isup":true
      },
      {
          "id":2,
          "platform": "twitter",
          "username": "@nathanf",
          "metric": "Followers",
          "value": 1044,
          "change": "99 Today",
          "isup":true
      },
      {
          "id":3,
          "platform": "instagram",
          "username": "@realnathanf",
          "metric": "Followers",
          "value": 11000,
          "change": "1099 Today",
          "isup":true
      },
      {
          "id":4,
          "platform": "youtube",
          "username": "Nathan F.",
          "metric": "Subscribers",
          "value": 8239,
          "change": "144 Today",
          "isup":false
      }
  ]
  );

  // useEffect(() => {
  //   function callApi() {
  //     fetch("http://localhost:3000/followers")
  //       .then((response) => response.json())
  //       .then((finalResult) => setFollowers(finalResult));
  //   }
  //   callApi();
  // }, []);

  return (
    <div className="followers-list">
      {followers.map((follower) => (
        <FollowerItem key={follower.id} {...follower} />
      ))}
    </div>
  );
}

export default FollowersWrapper;
