import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { userRequest } from "../../requestMethods";
import './Success.css'

const Success = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
          try {
            const res = await userRequest.post("/orders", {
              userId: currentUser._id,
              products: cart.products.map((item) => ({
                productId: item._id,
                quantity: item._quantity,
              })),
              amount: cart.total,
              address: data.billing_details.address,
            });
            setOrderId(res.data._id);
          } catch {}
        };
        data && createOrder();
      }, [cart, data, currentUser]);

    return(
        <div className="order-id">
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successfull. Your order is being prepared...`}
            <button>Go to Homepage</button>
        </div>
    )
}

export default Success