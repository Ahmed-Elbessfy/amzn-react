import { FC } from "react";
import { RootState } from "store";
import { useSelector } from "react-redux";

import "./Products.css";

import ProductsRow from "./ProductsRow";

const Products: FC = () => {
  // consuming products from store
  const {
    firstRowProductsListData,
    secondRowProductsListData,
    thirdRowProductsListData,
  } = useSelector((state: RootState) => state.initViewProducts);
  return (
    <section className="products_container">
      <ProductsRow productsList={firstRowProductsListData} />
      <ProductsRow productsList={secondRowProductsListData} />
      <ProductsRow productsList={thirdRowProductsListData} />
    </section>
  );
};

export default Products;
