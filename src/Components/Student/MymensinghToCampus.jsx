import React from "react";
import { NavLink } from "react-router-dom";

const MymensinghToCampus = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  console.log(hour, min);
  return (
    <div className=" text-black flex items-center justify-center min-h-[calc(100vh_-_80px)] flex-col gap-5">
      <h1 className="text-4xl font-bold mb-2 mt-5">Mymensingh to Campus</h1>
      <table className="text-center gap-5 border-2 border-[#39ad50] rounded-2xl mb-5">
        <tr>
          <th colSpan={2} className="text-3xl p-5">
            Time Schedule
          </th>
        </tr>
        <tr>
          <th className="border-1 border-[#39ad50] p-4">Departure Time</th>
          <th className="border-1 border-[#39ad50] py-5"></th>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">8:00 AM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 7 && min >= 0) || (hour === 8 && min <= 0)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              <NavLink to="/student/mymensinghtocampus/8:00 AM">Available Seats</NavLink>
            </button>
          </td>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">8:45 AM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 7 && min >= 45) || (hour === 8 && min <= 45)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              <NavLink to="/student/mymensinghtocampus/8:45 AM">Available Seats</NavLink>
            </button>
          </td>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">9:45 AM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 8 && min >= 45) || (hour === 9 && min <= 45)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              <NavLink to="/student/campustomymensingh/9:45 AM">Available Seats</NavLink>
            </button>
          </td>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">10:45 AM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 9 && min >= 45) || (hour === 10 && min <= 45)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              <NavLink to="/student/campustomymensingh/4:15 PM">
                Available Seats
              </NavLink>
            </button>
          </td>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">2:00 PM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 13 && min >= 0) || (hour === 14 && min <= 0)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              <NavLink to="/student/campustomymensingh/5:15 PM">
                Available Seats
              </NavLink>
            </button>
          </td>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">6:00 PM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 17 && min >= 0) || (hour === 18 && min <= 15)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              Available Seats
            </button>
          </td>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">7:00 PM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 18 && min >= 0) || (hour === 19 && min <= 0)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              Available Seats
            </button>
          </td>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">9:10 PM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 20 && min >= 10) || (hour === 21 && min <= 10)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              Available Seats
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MymensinghToCampus;
