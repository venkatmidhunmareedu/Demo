import React from "react";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MessageCard from "../components/MessageCard";
import ChatWindow from "../components/ChatWindow";
import PatientSection from "../components/PatientSection";

function Home() {
  return (
    <div className="grid grid-rows-2 w-[100vw] h-[100vh]">
      <div className="row-span-10 flex justify-start space-x-0">
        <SideBar />
        <div className="w-fit flex justify-between">
          <MessageCard />
          <ChatWindow />
          <PatientSection />
        </div>
      </div>
      <div className="row-span-3">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
