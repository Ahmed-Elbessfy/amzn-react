import { FC } from "react";
import "./Products.css";

import ProductsRow from "./ProductsRow";

// Each products row data
// first row has 2 products, second has 3 products, last has 1 product
const firstRowProductsListData = [
  {
    id: 243457,
    title:
      'Lenovo 2022 Newest Ideapad 3 Laptop, 15.6" HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI, Webcam, Wi-Fi 5, Bluetooth, Windows 11 Home, Almond',
    price: "375.70",
    rating: 4,
    imgSrc: "https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL320_.jpg",
  },

  {
    id: 243455,
    title:
      "BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games",
    price: "25.99",
    rating: 5,
    imgSrc: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
  },
];

const secondRowProductsListData = [
  {
    id: 243456,
    title:
      "Cotton Farm Cheesecloth, Grade 100; 9* - 18-45 Square Feet (36x36 inch), 100% Natural Unbleached Cotton, Food Grade",
    price: "5.30",
    rating: 4,
    imgSrc: "https://m.media-amazon.com/images/I/91oq2Vc0JZL._AC_UL320_.jpg",
  },
  {
    id: 243459,
    title:
      "Stone Lain Porcelain 16 Piece Dinnerware Set, Service for 4, Black and Golden Rim",
    price: "107.09",
    rating: 3,
    imgSrc: "https://m.media-amazon.com/images/I/61pnQQ-+HwL._AC_UL320_.jpg",
  },
  {
    id: 243458,
    title:
      "SAMSUNG SSD T7 Portable External Solid State Drive 1TB, Up to 1050MB/s, USB 3.2 Gen 2, Reliable Storage for Gaming, Students, Professionals, MU-PC1T0T/AM, Gray",
    price: "89.99",
    rating: 4,
    imgSrc: "https://m.media-amazon.com/images/I/91YfRIy7kYL._AC_SY200_.jpg",
  },
];

const thirdRowProductsListData = [
  {
    id: 243451,
    title:
      "HOMORE Geometric Shag Rug for Bedroom, 5'x7' Gray Shaggy Rugs for Living Room, Soft Moroccan Area Rug for Kids Nursery Dorm, Memory Foam Bedside Rug Indoor Floor Carpet for Home Decor",
    price: "49.99",
    rating: 5,
    imgSrc:
      "https://m.media-amazon.com/images/I/81vCHVoAScL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
];
const Products: FC = () => {
  return (
    <section className="products_container">
      <ProductsRow productsList={firstRowProductsListData} />
      <ProductsRow productsList={secondRowProductsListData} />
      <ProductsRow productsList={thirdRowProductsListData} />
    </section>
  );
};

export default Products;
