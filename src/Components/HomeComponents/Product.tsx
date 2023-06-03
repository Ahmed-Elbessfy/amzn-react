import { FC } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

import { IProduct } from "interfaces/productsInterfaces";

const Product: FC<IProduct> = ({ title, price, rating, imgSrc }: IProduct) => {
  // creating rating array to display rating stars
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div className="product">
      <div className="product_info">
        <div className="product_title">{title} </div>
        <div className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product_rating">
          {stars.map((_, i) => (
            <StarRateIcon key={i} className="product_rating_star" />
          ))}
        </div>
      </div>
      <img src={imgSrc} alt={title} className="product_img" />
      <button className="add_product">add to cart</button>
    </div>
  );
};

export default Product;
