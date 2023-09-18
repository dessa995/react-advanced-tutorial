import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "unknown item"} />
      <h4>{name}</h4>
      <p>{price || "priceless"}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: "pricelsess",
//   image: {
//     url: defaultImage,
//   },
// };

export default Product;
