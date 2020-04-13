import React from "react";
import "./style.scss";

function MenuItem({ title, subtitle, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitile">{subtitle.toUpperCase()}</span>
      </div>
    </div>
  );
}
export default MenuItem;
