import React, { useState } from "react";

const Appointments = () => {
    const [eventButton,setEventButton] = useState(true);
    const [signalButton,setSignalButton] = useState(false);
    const [attachmentsButton,setAttachmentsButton] = useState(false);

    const handleEvent = () =>{
        setEventButton(true);
        setSignalButton(false);
        setAttachmentsButton(false);
    }

    const handleSignal = () =>{
        setEventButton(false);
        setSignalButton(true);
        setAttachmentsButton(false);
    }

    const handleAttachments = () =>{
        setAttachmentsButton(true);
        setEventButton(false);
        setSignalButton(false);
    }

  return (
    <div>
      <div className="flex font-poppins pl-1">
        <div>
          <button className="text-large uppercase bg-white font-bold cursor-pointer font-poppins" onClick={handleEvent}>
            EVENTS
          </button>
          <div className={`rounded-l-3xs my-2 ${eventButton ? "bg-blue-400" : " bg-whitesmoke-300"} h-1.5`}></div>
        </div>
        <div>
          <button className="text-large bg-white mx-6 uppercase font-bold cursor-pointer font-poppins " onClick={handleSignal}>
            SIGNALS
          </button>
          <div className={`my-2 ${signalButton ? "bg-blue-400" : " bg-whitesmoke-300"} h-1.5`}></div>
        </div>
        <div>
          <button className="text-large bg-white uppercase font-bold cursor-pointer font-poppins" onClick={handleAttachments}>
            ATTACHMENTS
          </button>
          <div className={`rounded-r-3xs ${attachmentsButton ? "bg-blue-400" : " bg-whitesmoke-300"} my-2 h-1.5`}></div>
        </div>
      </div>

      <div className=" bg-lavenderblush p-2 rounded-mini font-poppins font-medium">
        <div className="flex justify-start">
        <div className="p-1">
          <img
            className="w-3.5 h-4"
            alt=""
            src="/icon-awesomecalendaralt.svg"
          />
        </div>
        <div className="flex ml-3">
          <div className="text-md mt-[2px]">Appointments</div>
          <div className="ml-28">
            <img
            className="cursor-pointer"
              alt=""
              src="/icon-materialnavigatenext.svg"
            />
          </div>
        </div>

        </div>
        <div>
          <p className="mx-6 mt-1 text-xs">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
