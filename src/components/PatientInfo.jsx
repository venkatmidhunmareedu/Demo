import React from 'react'

const PatientInfo = () => {
    return (
        <div className='font-poppins bg-lavender'>
            <div className="rounded-mini " />
            <div className="text-lg font-semibold text-darkslategray">
                Franky Schmidt
            </div>
            <div className="text-lg leading-[40px]">
                <p className="m-0">Sex</p>
                <p className="m-0">DOB</p>
                <p className="m-0">Language</p>
                <p className="m-0">Preferred Contact</p>
                <p className="m-0">Texting Allowed</p>
                <p className="m-0">SMS Status</p>
                <p className="m-0">Portal Status</p>
            </div>
            <div className="text-base leading-[40px]">
                <p className="m-0">Female</p>
                <p className="m-0">07-06-1993</p>
                <p className="m-0">English</p>
                <p className="m-0">97338244563</p>
                <p className="m-0">9747103004</p>
                <p className="m-0">Opt-In</p>
                <p className="m-0">Unenrolled</p>
            </div>
        </div>
    )
}

export default PatientInfo