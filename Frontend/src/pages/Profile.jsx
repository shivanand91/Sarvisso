import React from 'react';
import { Link } from 'react-router-dom';
import Shiva from '../assets/images/Shiva.jpg';
import { FaRegStar, FaHistory, FaShareAlt } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdOutlinePayment, MdOutlineHomeRepairService, MdOutlineGroups } from "react-icons/md";
import { RiUserCommunityLine, RiFeedbackLine } from "react-icons/ri";

const Profile = () => {
  const menuItems = [
    { to: '/personal-information', icon: <IoMdInformationCircleOutline />, label: 'Personal Information' },
    { to: '/address-details', icon: <FaRegAddressCard />, label: 'Address Details' },
    { to: '/payment-method', icon: <MdOutlinePayment />, label: 'Payment Method' },
    { to: '/services', icon: <MdOutlineHomeRepairService />, label: 'Services' },
    { to: '/booking-history', icon: <FaHistory />, label: 'Booking History' },
    { to: '/notifications', icon: <IoIosNotificationsOutline />, label: 'Notifications' },
    { to: '/support-feedback', icon: <RiFeedbackLine />, label: 'Support and Feedback' },
    { to: '/share', icon: <FaShareAlt />, label: 'Share' },
    { to: '/groups', icon: <MdOutlineGroups />, label: 'Groups' },
    { to: '/community', icon: <RiUserCommunityLine />, label: 'Community' }
  ];

  return (
    <div className="grid sm:grid-cols-12 gap-4 p-4">
      {/* Sidebar */}
      <div className="sm:col-span-3 border-2 shadow-lg flex flex-col p-4 rounded-lg overflow-y-auto h-screen sm:h-auto">
        {/* Profile Section */}
        <div className="hidden sm:flex flex-col items-center border-2 shadow-md rounded-md p-4 mb-4">
          <img src={Shiva} alt="Shivanand Kumar" className="w-24 h-24 rounded-full mb-2" />
          <h1 className="font-bold text-lg">Shivanand Kumar</h1>
          <p>shivanand91</p>
          <h3 className="text-sm text-gray-600">Plumbing</h3>
          <div className="rating flex mt-2 gap-1">
            {[...Array(5)].map((_, index) => <FaRegStar key={index} />)}
          </div>
        </div>

        {/* Menu Section */}
        <div className="flex flex-col gap-4">
          {menuItems.map(({ to, icon, label }) => (
            <Link key={to} to={to} className="icon-text flex sm:items-center gap-2 text-base sm:text-lg hover:bg-gray-200 p-2 rounded-md">
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="sm:col-span-9 bg-white shadow-lg rounded-lg p-6 w-full h-full">
        <h1 className="text-2xl font-bold">Welcome to Your Profile</h1>
        <p className="mt-2 text-gray-600">Here you can manage your information, bookings, and more.</p>

        <div className='w-full h-[720px] border shadow-lg mt-8 rounded-lg '>

        </div>

      </div>
    </div>
  );
};

export default Profile;
