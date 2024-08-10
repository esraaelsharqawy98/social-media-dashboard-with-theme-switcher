import "./FollowerItem.css";
function FollowerItem(props) {
  const colors= {
    facebook: 'bg-Facebook',
    twitter: 'bg-Twitter',
    instagram: 'bg-Instagram',
    youtube: 'bg-YouTube'
  }
  const converNumbertoK = (number) => {
    if( number >= 10000){
      number = number / 1000;
      return number + 'k';
    }
    return number;
  }
  return (
    <div className={`follower-card ${colors[props.platform]}`}>
      <p className="follower-info">
        <img src={`/images/icon-${props.platform}.svg`} alt="platform icon" />
        <span className="follower-username">{props.username}</span>
      </p>
      <div className="follower-statistics">
          <h2 className="follower-count">{converNumbertoK(props.value)}</h2>
          <p className="follower-metric">{props.metric}</p>
      </div>
      <p className="follower-change ">
      <img src={`/images/${props.isup ? 'icon-up' : 'icon-down'}.svg`} className="change-icon" alt="change icon" />
        <span className={props.isup ? "up" : "down"}>{props.change}</span>
      </p>
    </div>
  );
}
export default FollowerItem;
