import React, { useEffect } from 'react'

// patient info card
const PatientInfo = () => {

    // use tailwind css

    return (
        <div className='text-xs flex flex-col font-poppins mt-3 bg-lavender rounded-sm px-3 pt-2 max-w-full w-64'>
            <div className='flex space-x-3 items-center'>
                <div className="rounded-mini " />
                <img
                    className="rounded-[50%] w-11 h-11 object-cover"
                    alt=""
                    src="/ellipse-73@2x.png"
                />
                <div className=" font-semibold text-darkslategray">
                    Franky Schmidt
                </div>
            </div>
            <div className='flex justify-center space-x-4 '>
                <div className=" leading-[40px]">
                    <p className="m-0">Sex : </p>
                    <p className="m-0">DOB</p>
                    <p className="m-0">Language</p>
                    <p className="m-0">Preferred Contact</p>
                    <p className="m-0">Texting Allowed</p>
                    <p className="m-0">SMS Status</p>
                    <p className="m-0">Portal Status</p>
                </div>
                <div className="leading-[40px]">
                    <p className="m-0">Female</p>
                    <p className="m-0">07-06-1993</p>
                    <p className="m-0">English</p>
                    <p className="m-0">97338244563</p>
                    <p className="m-0">9747103004</p>
                    <p className="m-0">Opt-In</p>
                    <p className="m-0">Unenrolled</p>
                </div>
            </div>
        </div>
    )
}

export default PatientInfo