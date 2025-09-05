import React from "react";
import { NavLink } from "react-router-dom";

const BhalukaToCampus = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  console.log(hour, min);
  return (
    <div className=" text-black flex items-center justify-center min-h-[calc(100vh_-_80px)] flex-col gap-5">
      <h1 className="text-4xl font-bold mb-2 mt-5">Bhaluka to Campus</h1>
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
          <td className="border-1 border-[#39ad50] py-1">8:20 AM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 7 && min >= 20) || (hour === 8 && min <= 20) ? "" : ""
              }`}
            >
              <NavLink to="/student/bhalukatocampus/8:20 AM">
                Available Seats
              </NavLink>
            </button>
          </td>
        </tr>
        <tr className="border-1 border-[#39ad50]">
          <td className="border-1 border-[#39ad50] py-1">10:00 AM</td>
          <td className="py-2">
            <button
              className={`btn btn-outline btn-success bg-white text-black hover:bg-[#39ad50] hover:text-white ${
                (hour === 9 && min >= 0) || (hour === 10 && min <= 0)
                  ? ""
                  : "btn-disabled"
              }`}
            >
              <NavLink to="/student/bhalukatocampus/10:00 AM">
                Available Seats
              </NavLink>
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BhalukaToCampus;
