import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview";

function Shop() {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...restShopDataProps }) => (
        <CollectionPreview key={id} {...restShopDataProps} />
      ))}
    </div>
  );
}
export default Shop;
