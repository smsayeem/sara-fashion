import React from "react";
import "./style.scss";
import CollectionItem from "../collection-item";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...restItemProps }) => (
          <CollectionItem key={id} {...restItemProps} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
