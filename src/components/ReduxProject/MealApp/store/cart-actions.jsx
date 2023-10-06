import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const CART_DATA_URL = "https://react-learning-udemy-f1f2f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json";

const handleFetchErrors = (response) => {
  if (!response.ok) {
    throw new Error("Could not fetch data!");
  }
  return response.json();
};

const sendRequest = async (cart) => {
  const response = await fetch(CART_DATA_URL, {
    method: "PUT",
    body: JSON.stringify({
      items: cart.items,
      totalQuantity: cart.totalQuantity,
    }),
  });

  return handleFetchErrors(response);
};

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(CART_DATA_URL);
      const data = await handleFetchErrors(response);

      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    try {
      await sendRequest(cart);
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
