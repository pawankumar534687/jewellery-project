import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaBook } from "react-icons/fa6";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";

const Profile = lazy(() => import("./Profile"));
const MyCart2 = lazy(() => import("../mycart/MyCart2"));
const WishList = lazy(() => import("../wishlist/WishList"));
const MyOrders = lazy(() => import("../myorders/MyOrders"));
import OrderDeatails from "../myorders/OrderDeatails";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const Navigate = useNavigate();

  const renderComponent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "mycart2":
        return <MyCart2 />;
      case "wishlist":
        return <WishList />;
      case "myorders":
        return selectedOrderId ? (
          <OrderDeatails
            orderId={selectedOrderId}
            onBack={() => setSelectedOrderId(null)}
          />
        ) : (
          <MyOrders onViewOrder={(id) => setSelectedOrderId(id)} />
        );
      default:
        return null;
    }
  };

  const email = localStorage.getItem("email");
  const names = localStorage.getItem("names");
  const profileImage =
    localStorage.getItem("profileImage") || "/boy.png";

  const logout = () => {
    localStorage.clear();
    window.location.reload()
     Navigate("/");
    toast.success("Logout successfully");
   
  };

  return (
    <div className="pt-20 px-4 pb-6 md:px-8 lg:px-12 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
      <div className="flex flex-col w-full md:w-[250px] bg-white rounded-xl p-4 gap-4 shadow-md">
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-fuchsia-200"
          />
          <p className="font-semibold text-lg">{names}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:flex md:flex-col">
          {[
            {
              name: "Profile",
              value: "profile",
              icon: <RiAccountCircleLine className="w-6 h-6" />,
            },
            {
              name: "MyCart",
              value: "mycart2",
              icon: <BsFillCartPlusFill className="w-6 h-6" />,
            },
            {
              name: "MyOrders",
              value: "myorders",
              icon: <FaBook className="w-6 h-6" />,
            },
            {
              name: "WishList",
              value: "wishlist",
              icon: <FaRegHeart className="w-6 h-6" />,
            },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setSelectedOrderId(null);
              }}
              className={`flex items-center justify-start gap-2 w-full px-4 py-2 rounded-xl transition-colors ${
                activeTab === tab.value
                  ? "bg-pink-100 text-fuchsia-700"
                  : "hover:bg-pink-100 text-gray-700"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="truncate text-sm">{tab.name}</span>
            </button>
          ))}
        </div>

        <button
          onClick={logout}
          className="flex items-center justify-center gap-3 w-full mt-4 px-4 bg-amber-300 py-2 rounded-xl text-red-600 transition-colors"
        >
          <span className="font-medium">Logout</span>
          <img src="logout.png" alt="Logout" className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        >
          {renderComponent()}
        </Suspense>
      </div>
    </div>
  );
};

export default UserProfile;
