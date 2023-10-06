import {  useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { useSelector, useDispatch } from "react-redux";
import CartNew from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import Layout from "./components/Layout/Layout";
import Notification from "./components/UI/Notification";

let isInitial = true;

const MealAPP  = () =>{
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state?.ui?.cartIsVisible);
  const cart = useSelector((state) => state?.cart);
  const notification = useSelector((state) => state?.ui?.notification)

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart?.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Provider store={store}>
    {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {<CartNew />}
        <Products />
      </Layout>
    </Provider>
  );
}
export default MealAPP;