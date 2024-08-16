import React, { useState, useEffect } from "react";
import EngagementItem from "../EngagementItem/EngagementItem";
import "./EngagementsWrapper.css";
function EngagementsWrapper() {
  const [engagements, setEngagement] = useState(
    [
      {
          "id":1,
          "platform": "facebook",
          "metric": "Page Views",
          "value": 87,
          "change": "3%"
      },
      {
          "id":2,
          "platform": "facebook",
          "metric": "Likes",
          "value": 52,
          "change": "2%",
          "isup":true
      },
      {   
          "id":3,
          "platform": "instagram",
          "metric": "Likes",
          "value": 5462,
          "change": "2257%",
          "isup":false
      },
      {
          "id":4,
          "platform": "instagram",
          "metric": "Profile Views",
          "value": 52000,
          "change": "1375%",
          "isup":true
      },
      {
          "id":5,
          "platform": "twitter",
          "metric": "Retweets",
          "value": 117,
          "change": "303%",
          "isup":true
      },
      { 
          "id":6,
          "platform": "twitter",
          "metric": "Likes",
          "value": 507,
          "change": "553%",
          "isup":true
      },
      {
          "id":7,
          "platform": "youtube",
          "metric": "Likes",
          "value": 107,
          "change": "19%",
          "isup":false
      },
      {
          "id":8,
          "platform": "youtube",
          "metric": "Total Views",
          "value": 1407,
          "change": "12%",
          "isup":false
      }
  ]
  );

  // useEffect(() => {
  //   function callApi() {
  //     fetch("http://localhost:3000/engagement")
  //       .then((response) => response.json())
  //       .then((finalResult) => setEngagement(finalResult));
  //   }
  //   callApi();
  // }, []);

  return (
    <div className="engagementsWrapper">
      <h2 className="title">Overview - Today</h2>
      <div className="engagement-list">
        {engagements.map((engagement) => (
          <EngagementItem key={engagement.id} {...engagement} />
        ))}
      </div>
    </div>
  );
}

export default EngagementsWrapper;
