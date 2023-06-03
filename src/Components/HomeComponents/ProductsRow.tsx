import { FC } from "react";
import { IProductsRow } from "interfaces/productsInterfaces";
import Product from "./Product";
const ProductsRow: FC<IProductsRow> = ({ productsList }) => {
  return (
    <div className="product_row">
      {productsList.map((productData) => {
        return (
          <Product
            key={productData.id}
            id={productData.id}
            title={productData.title}
            price={productData.price}
            rating={productData.rating}
            imgSrc={productData.imgSrc}
          />
        );
      })}
    </div>
  );
};

export default ProductsRow;
