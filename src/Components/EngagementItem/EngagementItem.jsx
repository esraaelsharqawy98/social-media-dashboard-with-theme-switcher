import "./EngagementItem.css";
function EngagementItem(props) {
  const converNumbertoK = (number) => {
    if( number >= 10000){
      number = number / 1000;
      return number + 'k';
    }
    return number;
  }
  return (
    <div className="engagement-card">
      <div className="engagement-header">
        <p className="engagement-metric">{props.metric}</p>
        <img src={`/images/icon-${props.platform}.svg`} alt="" className="engagement-icon" />
      </div>
      <div className="engagement-details">
        <p className="engagement-value">{converNumbertoK(props.value)}</p>
        <p className="engagement-change">
          <img src={`/images/${props.isup ? 'icon-up' : 'icon-down'}.svg`} className="change-icon" alt="change icon" />
         <span className={props.isup ? "up" : "down"}>{props.change}</span> 
          </p>
      </div>
    </div>
  );
}
export default EngagementItem;
