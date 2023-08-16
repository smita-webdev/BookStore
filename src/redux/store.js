import { combineReducers, createStore } from "redux";
import cartReducer from "./cart/cartActions";
import couponReducer from "./discount/discountActions";

const rootReducer = combineReducers({
  cart: cartReducer,
  coupon: couponReducer,
});
const store = createStore(rootReducer);



export default store;
