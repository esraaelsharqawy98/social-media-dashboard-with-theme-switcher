import React, { useState, useEffect } from "react";
import EngagementItem from "../EngagementItem/EngagementItem";
import "./EngagementsWrapper.css";
function EngagementsWrapper() {
  const [engagements, setEngagement] = useState([]);

  useEffect(() => {
    function callApi() {
      fetch("http://localhost:3000/engagement")
        .then((response) => response.json())
        .then((finalResult) => setEngagement(finalResult));
    }
    callApi();
  }, []);

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
