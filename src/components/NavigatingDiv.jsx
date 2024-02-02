import React from 'react';
import logo from '../assets/Subtract1.png';
import dashboard from '../assets/Dashboard.png';
import upload from '../assets/Upload1.png';
import invoice from '../assets/Invoice.png';
import schedule from '../assets/Schedule.png';
import calender from '../assets/Calendar.png';
import notification from '../assets/Notification.png';
import setting from '../assets/Setting.png';
import { Link } from 'react-router-dom';

const NavigatingDiv = () => {
  return (
    <div className="border w-[300px] md:w-[240px] lg:w-[300px] bg-white rounded-lg h-screen md:h-auto">
      <div className="flex items-center gap-2 justify-center my-5 md:my-10">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h2 className="font-semibold text-2xl md:text-3xl">Base</h2>
      </div>
      <div className="navigatingDivs">
        <div>
          <Link to="/">
            <img src={dashboard} alt="Dashboard" />
          </Link>
          <span className=" ">Dashboard</span>
        </div>
        <div className="text-blue-800">
          <img src={upload} alt="Upload" />
          <span className=" ">Upload</span>
        </div>
        <div>
          <img src={invoice} alt="Invoice" />
          <span className=" ">Invoice</span>
        </div>
        <div>
          <img src={schedule} alt="Schedule" />
          <span className=" ">Schedule</span>
        </div>
        <div>
          <img src={calender} alt="Calendar" />
          <span className=" ">Calendar</span>
        </div>
        <div>
          <img src={notification} alt="Notification" />
          <span className=" ">Notification</span>
        </div>
        <div>
          <img src={setting} alt="Setting" />
          <span className=" ">Setting</span>
        </div>
      </div>
    </div>
  );
};

export default NavigatingDiv;
