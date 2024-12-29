import React from 'react';
import {Link} from 'react-router-dom'
import Shiva from '../assets/images/Shiva.jpg';
import { FaRegStar } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdOutlinePayment, MdOutlineHomeRepairService, MdOutlineGroups } from "react-icons/md";
import { FaHistory, FaShareAlt } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiUserCommunityLine, RiFeedbackLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="grid sm:grid-cols-12 gap-4 p-4">
      {/* Sidebar */}
      <div className="sm:col-span-3 border-2 shadow-lg flex flex-col p-4 rounded-lg overflow-y-auto h-screen sm:h-auto">
        {/* Profile Section */}
        <div className="hidden sm:flex flex-col items-center border-2 shadow-md rounded-md p-4 mb-4">
          <a href="#">
            <img src={Shiva} alt="Shivanand Kumar" className="w-24 h-24 rounded-full mb-2" />
          </a>
          <h1 className="font-bold text-lg">Shivanand Kumar</h1>
          <h3 className="text-sm text-gray-600">Plumbing</h3>
          <div className="rating flex mt-2 gap-1">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>

        {/* Menu Section */}
        <div className="flex flex-col gap-4">
          <Link to="/personal-information" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <IoInformationCircleOutline className="text-xl" />
            <span className="hidden sm:inline">Personal Information</span>
          </Link>
          <Link to="/address-details" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <FaRegAddressCard className="text-xl" />
            <span className="hidden sm:inline">Address Details</span>
          </Link>
          <Link to="/payment-method" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <MdOutlinePayment className="text-xl" />
            <span className="hidden sm:inline">Payment Method</span>
          </Link>
          <Link to="/services" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <MdOutlineHomeRepairService className="text-xl" />
            <span className="hidden sm:inline">Services</span>
          </Link>
          <Link to="/booking-history" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <FaHistory className="text-xl" />
            <span className="hidden sm:inline">Booking History</span>
          </Link>
          <Link to="/notifications" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <IoIosNotificationsOutline className="text-xl" />
            <span className="hidden sm:inline">Notifications</span>
          </Link>
          <Link to="/support-feedback" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <RiFeedbackLine className="text-xl" />
            <span className="hidden sm:inline">Support and Feedback</span>
          </Link>
          <Link to="/share" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <FaShareAlt className="text-xl" />
            <span className="hidden sm:inline">Share</span>
          </Link>
          <Link to="/groups" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <MdOutlineGroups className="text-xl" />
            <span className="hidden sm:inline">Groups</span>
          </Link>
          <Link to="/community" className="icon-text flex sm:items-center gap-2 text-base sm:text-lg">
            <RiUserCommunityLine className="text-xl" />
            <span className="hidden sm:inline">Community</span>
          </Link>
        </div>
</div>

        {/* Main Content */}
        <div className="sm:col-span-9 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold">Welcome to Your Profile</h1>
          <p className="mt-2 text-gray-600">Here you can manage your information, bookings, and more.</p>
        </div>
      </div>
      );
};

      export default Profile;
