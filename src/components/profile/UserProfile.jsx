import { lazy, Suspense, useState } from "react";
const Profile = lazy(() => import("./Profile"));
const MyCart2 = lazy(() => import("../mycart/MyCart2"));
const Settings = lazy(() => import("../setttings/Settings"));
const WishList = lazy(() => import("../wishlist/WishList"));
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const Navigate = useNavigate();

  const renderComponent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "mycart2":
        return <MyCart2 />;
      case "settings":
        return <Settings />;
      case "wishlist":
        return <WishList />;
      default:
        return null;
    }
  };

  const email = localStorage.getItem("email");
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");

  const logout = () => {
    localStorage.clear();
    toast.success("Logout successfully");
    Navigate("/");
  };

  return (
    <div className="pt-20 px-4 pb-6 md:px-8 lg:px-12 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
      <div className="flex flex-col w-full md:w-[250px] bg-white rounded-xl p-4 gap-4 shadow-md">
        <div className="text-center md:text-left md:mb-4">
          <p className="font-semibold text-lg">
            {firstname} {lastname}
          </p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>

        {/* Tab Buttons */}
        {[
          {
            name: "Profile",
            value: "profile",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            ),
          },
          {
            name: "MyCart",
            value: "mycart2",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            ),
          },
          {
            name: "Settings",
            value: "settings",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-settings"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ),
          },
          {
            name: "WishList",
            value: "wishlist",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            ),
          },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`flex items-center gap-3 w-full px-4 py-2 rounded-xl transition-colors ${
              activeTab === tab.value
                ? "bg-pink-100 text-fuchsia-700"
                : "hover:bg-pink-100 text-gray-700"
            }`}
          >
            <span className="flex-shrink-0">{tab.icon}</span>
            <span className="truncate">{tab.name}</span>
          </button>
        ))}

        <button
          onClick={logout}
          className="flex items-center gap-3 w-full mt-6 px-4 py-2 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
        >
          <img src="logout.png" alt="Logout" className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>

      {/* Main content */}
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
