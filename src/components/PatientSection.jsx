import React from "react";
import PatientInfo from "./PatientInfo";
import Activity from "./Activity";

function PatientSection() {
  return (
    <div className="flex flex-col pt-3 w-[250px]">
      <div className="mb-3">
        <div className="text-3xl pl-3 font-medium text-darkslateblue-200">
          Patient Info
        </div>
        <PatientInfo />
      </div>
      <Activity />
    </div>
  );
}

export default PatientSection;
