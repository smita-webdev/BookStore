

const initialState = {
  coupons: {
    flat50: {
      type: "percentage",
      value: 50,
    },
    flat20: {
      type: "sum",
      value: 20,
    },
  },
};

const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    //   case 'APPLY_COUPON':
    //   const appliedCoupon = state.coupons[action.payload.couponCode];
    //    if (appliedCoupon){
    //     const cuponValue = appliedCoupon.value;

    //    }
    default:
      return state;
  }
};

export default discountReducer;
