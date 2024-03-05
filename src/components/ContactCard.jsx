import React from "react";
import Message from "./Message";

const ContactCard = () => {
  return (
    <span className="font-poppins text-xs mt-2">
      <div className="text-3xl font-medium text-darkslategray my-2">
        Recent Messages
      </div>
      <Message />
    </span>
  );
};

export default ContactCard;
