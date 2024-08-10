import { useState, useEffect } from "react";
import './FollowersWrapper.css'
import FollowerItem from "../FollowerItem/FollowerItem";

function FollowersWrapper() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    function callApi() {
      fetch("http://localhost:3000/followers")
        .then((response) => response.json())
        .then((finalResult) => setFollowers(finalResult));
    }
    callApi();
  }, []);

  return (
    <div className="followers-list">
      {followers.map((follower) => (
        <FollowerItem key={follower.id} {...follower} />
      ))}
    </div>
  );
}

export default FollowersWrapper;
