const displayPrice = (price) => {
  return price > 0 ? `৳${price}` : `Free`;
};

export default displayPrice;
