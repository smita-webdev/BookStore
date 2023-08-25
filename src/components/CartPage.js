import { useSelector } from "react-redux";
import { PlusBtn, MinusBtn } from "../assets";
import "./CartPage.css";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allCoupons = useSelector((state) => state.coupon.coupons);
  //JSON.parse(localStorage.getItem("cart-item")) || [];

  const CartItem = ({ item }) => (
    <div
      key={item.id}
      style={{
        border: "1px solid grey",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <h4>Title : {item.title}</h4>
      <h4>Price : {item.discount ? item.discount : item.price}</h4>
      <div className="quantity-control">
        <div>
          <PlusBtn />
        </div>
        {cartItems && cartItems?.length ? (
          <div style={{ fontSize: "30px" }}>{item.quantity || 1}</div>
        ) : (
          <></>
        )}
        <div>
          <MinusBtn />
        </div>
      </div>
    </div>
  );

  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => {
    let cartTotalAgg = cartTotal;
    cartItems?.forEach((element) => {
      cartTotalAgg = cartTotalAgg + element.quantity * element.price;
    });
    setcartTotal(cartTotalAgg);
  }, [cartItems]);

  const [couponCode, setcouponCode] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  // const [couponValue, setCouponValue] = useState('');
  console.log("coupon_code", allCoupons[couponCode], allCoupons, couponCode);
  const handleApplyCoupon = () => {
    let cartTotalAgg;

    //const allCoupons = JSON.parse(localStorage.getItem("couponCodes"));
    if (couponCode && allCoupons[couponCode]) {
      const { value: couponValue, type: couponType } = allCoupons[couponCode];
      // setCouponValue(couponValue);
      let discountValueStr = "";
      if (couponType === "percentage") {
        cartTotalAgg = cartTotal - cartTotal * (couponValue / 100);
        discountValueStr = `${couponValue}%`;
      } else if (couponType === "sum") {
        cartTotalAgg = cartTotal - couponValue;
        discountValueStr = `${couponValue}%`;
      }
      console.log(cartTotalAgg);
      setcartTotal(cartTotalAgg);
      setDiscountValue(discountValueStr);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-list">
        {cartItems && cartItems?.length ? (
          cartItems.map((item) => <CartItem item={item} />)
        ) : (
          <p>No Item in cart</p>
        )}
      </div>
      <div className="cart-amount">
        <div>
          <input
            type="text"
            label="couponcode"
            placeholder="enter coupon code"
            onChange={(e) =>
              setcouponCode(
                e?.currentTarget?.value ? e.currentTarget?.value : ""
              )
            }
          ></input>
          <button onClick={handleApplyCoupon}>Apply</button>
        </div>
        <h4>
          Discount Applied :
          {couponCode &&
          allCoupons[couponCode] &&
          allCoupons[couponCode]?.value &&
          allCoupons[couponCode]?.type === "percentage"
            ? `- ${allCoupons[couponCode].value}% OFF`
            : allCoupons[couponCode] && allCoupons[couponCode].value
            ? `- FLAT ${allCoupons[couponCode].value} OFF`
            : ""}
        </h4>
        <h4>Total Amount: {cartTotal}</h4>
        <button type="submit">CheckOut</button>
      </div>
    </div>
  );
};
export default CartPage;
