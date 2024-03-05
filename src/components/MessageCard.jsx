import React from "react";
import ContactCard from "./ContactCard";
import ProfileCard from "./ProfileCard";

function MessageCard() {
  return (
    <div className="flex flex-col mx-2">
      <ProfileCard />
      <ContactCard />
    </div>
  );
}

export default MessageCard;
