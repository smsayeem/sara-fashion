import React from "react";
import { withRouter } from 'react-router-dom';
import "./style.scss";

function MenuItem(props) {
  const { title, imageUrl, size, subtitle, history, linkUrl, match } = props;
  return (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title && title.toUpperCase()}</h1>
        <span className="subtitile">{subtitle && subtitle.toUpperCase()}</span>
      </div>
    </div>
  );
}
export default withRouter(MenuItem);
