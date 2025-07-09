import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyOrders = ({ onViewOrder }) => {
  const [myorders, setmyorders] = useState([]);

  useEffect(() => {
    const getorderdetails = async () => {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");

      try {
        const response = await axios.get(
          `http://localhost:8000/api/getorderbyId/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const orders = response.data;

        setmyorders(orders);
      } catch (error) {
        toast.error(error.response?.data?.error || "Failed to fetch orders");
      }
    };

    getorderdetails();
  }, []);

  return (
    <div className="p-2">
      <h2 className="text-3xl border-b font-bold mb-12 pb-4 border-gray-400">
        My Orders
      </h2>

      {myorders.length === 0 ? (
        <div className="flex flex-col items-center">
          <img className="w-48 h-48" src="/empty-cart.png" alt="No orders" />
          <p className="text-gray-600 mt-4">
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        myorders.map((order) => (
          <Link
            key={order._id}
            onClick={() => onViewOrder(order._id)}
            className="mb-6 p-4 justify-between border border-fuchsia-500 flex rounded-lg"
          >
            <div>
              <h1 className="font-semibold">{order.orderId}</h1>
              <p className="text-sm text-gray-600">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="font-semibold">₹{order.finalAmount}</p>
              <h1 className="text-green-600">{order.Orderstatus}</h1>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default MyOrders;
