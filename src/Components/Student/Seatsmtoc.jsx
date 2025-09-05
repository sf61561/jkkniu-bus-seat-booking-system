import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Seatarrangement from './Seatarrangement';

const Seatsmtoc = () => {
    const { paramsId } = useParams();
  const [availableSeats, setAvailableSeats] = useState([]);

  useEffect(() => {
    // Fetch available seats based on paramsId
    fetch("/mtocbusavailability.json")
      .then((response) => response.json())
      .then((data) => setAvailableSeats(data));
  }, []);
  const busesData = availableSeats.find((bus) => bus.time === paramsId);
  return (
    <div className="text-black">
      {busesData ? (
        <ul className="flex flex-col gap-10 mt-5">
          {busesData.registration.map((reg) => {
            return (
              <div>
                <details className="collapse border-[#39ad50] border-1">
                  <summary className="collapse-title font-semibold">
                    {reg}
                  </summary>
                  <div className="collapse-content text-sm">
                      <Seatarrangement />
                  </div>
                </details>
              </div>
            );
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Seatsmtoc;