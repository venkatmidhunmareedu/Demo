import React from "react";
import PatientInfo from "./PatientInfo";

function PatientSection() {
  return (
    <div className="flex flex-col p-3">
      <div className="text-3xl font-medium text-darkslateblue-200">
        Patient Info
      </div>
      <PatientInfo />
    </div>
  );
}

export default PatientSection;
