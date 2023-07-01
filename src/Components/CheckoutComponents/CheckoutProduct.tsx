import { FC } from "react";

import StarRateIcon from "@mui/icons-material/StarRate";

import { IProduct } from "interfaces/productsInterfaces";

const CheckoutProduct: FC<IProduct> = ({
  id,
  title,
  price,
  rating,
  imgSrc,
}: IProduct) => {
  // creating rating array to display rating stars
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div className="checkout_product">
      <img src={imgSrc} alt={title} className="checkout_product_img" />
      <div className="checkout_product_info">
        <div className="checkout_product_title">{title} </div>
        <div className="checkout_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="checkout_product_rating">
          {stars.map((_, i) => (
            <StarRateIcon key={i} className="checkout_product_rating_star" />
          ))}
        </div>
        <button className="remove_checkout_product">remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
