import React from "react";

const Appointments = () => {
  return (
    <div>
      <div className="flex font-poppins rounded-3xs pl-1">
        <div>
          <button className="text-large uppercase font-bold font-poppins rounded-3xs">
            EVENTS
          </button>
          <div className="rounded-l-3xs my-2 bg-whitesmoke-300 h-1.5"></div>
        </div>
        <div>
          <button className="text-large mx-6 uppercase font-bold cursor-pointer font-poppins rounded-3xs">
            SIGNALS
          </button>
          <div className="my-2 bg-whitesmoke-300 h-1.5"></div>
        </div>
        <div>
          <button className="text-large uppercase font-bold cursor-pointer font-poppins rounded-3xs">
            ATTACHMENTS
          </button>
          <div className=" rounded-r-3xs my-2 bg-whitesmoke-300 h-1.5"></div>
        </div>
      </div>

      <div>
        <div className="flex items-center">
            <div className="">
                Appointments
            </div>
            <div>
                <img
                    className="w-[12.82px] h-[8.05px]"
                    alt=""
                    src="/icon-materialnavigatenext.svg"
                />
            </div>
        </div>
        <div>
          <p>
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
