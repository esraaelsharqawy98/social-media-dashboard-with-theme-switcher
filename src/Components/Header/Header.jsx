import { useState } from "react";
import "./Header.css";
function Header() {
  const [ischecked, setIsChecked] = useState(false);
  function toggleDarkMode() {
    document.getElementById('root').classList.toggle('dark', !ischecked);
    setIsChecked(!ischecked);
  }
  return (
    <div className="header">
      <div className="title">
        <h1>Social Media Dashboard</h1>
        <h4> Total Followers: 23,004</h4>
      </div>
      <div className="mode">
        <h3>Dark Mode</h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={ischecked}
            onChange={toggleDarkMode}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
export default Header;
