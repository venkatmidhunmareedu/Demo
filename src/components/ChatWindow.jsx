import React from 'react'
import { FaRegSmile } from "react-icons/fa";
import { MessageList } from 'react-chat-elements'
import { SideBar } from 'react-chat-elements'
const messageListReferance = React.createRef();
import { Input, Button } from 'react-chat-elements'
const inputReferance = React.createRef()


const ChatWindow = () => {
    return (
        <div className='text-sm font-sm rounded-xl bg-whitesmoke-100 box-border max-w-screen-md h-full border-[1px] border-solid border-gainsboro-200 font-poppins scale-90'>
            { /* chat window header */}
            <div className="rounded-t-xl rounded-b-none bg-whitesmoke-200 box-border w-full h-[82px] border-[1px] border-solid border-gainsboro-200" >
                <div className='flex items-center justify-start space-x-4 px-4 pt-2'>
                    <img
                        className=" top-[227px] left-[1371px] rounded-[50%] w-11 h-11 object-cover"
                        alt=""
                        src="/gt@2x.png"
                    />
                    <p> Franky Schmidt </p>
                </div>
            </div>
            {/* chat window body */}
            {/* <div className='flex flex-col px-4'>
                <div className="flex justify-center text-center text-lg font-medium text-darkgray my-3">
                    December 21, 2023
                </div>
                <div className='flex  justify-end items-center space-x-2'>
                    <div>
                        <div className="rounded-t-3xs rounded-br-none rounded-bl-3xs bg-limegreen max-w-fit max-h-fit px-3 py-1 " >
                            <p className="font-medium text-white text-center"> Hi, Dr. Dandamudi </p>
                        </div>
                        <div className="text-sm font-semibold font-sofia-pro text-silver text-right me-1 mt-2">
                            09:35
                        </div>
                    </div>
                    <img
                        className="rounded-[50%] w-11 h-11 object-cover"
                        alt="image is missing"
                        src="/gt@2x.png"
                    />
                </div>
                <div className='flex  justify-start items-center space-x-2'>
                    <img
                        className="rounded-[50%] w-11 h-11 object-cover"
                        alt=""
                        src="/gt@2x.png"
                    />

                    <div className=''>
                        <div className="rounded-t-3xs rounded-br-3xs rounded-bl-none bg-gainsboro-100 max-w-fit max-h-fit px-3 py-1" >
                            <p className="font-medium text-center"> Hello!
                            </p>
                        </div>
                        <div className="text-sm font-semibold font-sofia-pro text-silver text-left me-1 mt-2">
                            09:35
                        </div>
                    </div>
                </div>
            </div> */}
            <br />
            <div className='md:mx-4 h-[45vh] overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-400 scrollbar-thumb-rounded'> 
                <div className="flex justify-center text-center text-lg font-medium text-darkgray my-3">
                    December 21, 2023
                </div>
                <MessageList
                    referance={messageListReferance}
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    dataSource={[
                        {
                            position: 'right',
                            type: 'text',
                            titleColor: 'green',
                            className: '',
                            title: 'Franky Schmidt',
                            text: 'Hello Doctor!',
                            date: new Date("2022-03-25"),
                            dateString: '02:52 pm',
                            status: 'read',
                            avatar: '/gt@2x.png'
                        },
                        {
                            position: 'left',
                            type: 'text',
                            titleColor: 'blue',
                            className: '',
                            title: 'Dr. Dandamudi',
                            text: 'Hello Doctor!',
                            date: new Date(),
                            avatar: '/gt@2x.png'
                        },
                        {
                            position: 'left',
                            type: 'text',
                            titleColor: 'blue',
                            className: '',
                            title: 'Dr. Dandamudi',
                            text: 'Hello Doctor!',
                            date: new Date(),
                            avatar: '/gt@2x.png'
                        },
                        {
                            position: 'left',
                            type: 'text',
                            titleColor: 'blue',
                            className: '',
                            title: 'Dr. Dandamudi',
                            text: 'Hello Doctor!',
                            date: new Date(),
                            avatar: '/gt@2x.png'
                        },
                    ]} />
            </div>
            <br />
            <br />
            { /* chat window status */}

            <div className='flex flex-row mx-4 justify-between items-center'>

                <div className='flex items-center space-x-1'>
                    <div className="text-sm font-semibold text-lightslategray text-right">
                        Send To
                    </div>
                    <div className='rounded-sm bg-lightgray-100 flex space-x-1 px-1 py-1'>
                        <button className="rounded-sm bg-pink flex items-center font-poppins space-x-1 px-2  text-center cursor-pointer" >
                            <img
                                className="w-[14.6px] h-[14.6px]"
                                alt=""
                                src="/group-17189.svg"
                            />
                            <div className="text-[13px] text-brown">
                                Patient
                            </div>
                        </button>
                        <button className='font-poppins rounded-sm bg-lightgray-100 flex items-center space-x-1 px-1 pe-3 text-center cursor-pointer'>
                            @ Internal
                        </button>
                    </div>
                </div>

                <div className='flex justify-center items-center space-x-1'>
                    <div className="text-sm font-semibold text-lightslategray text-right">
                        Channel Status :
                    </div>
                    <img
                        className="rounded-[50%] w-4 h-4"
                        alt=""
                        src="/ellipse-1327.svg"
                    />
                    { /*select menu */}
                    <select name="" id="" className='font-poppins'>
                        <option value="open">open</option>
                        <option value="close">closed</option>
                    </select>
                </div>
            </div>

            { /* chat window message input */}
            <div className='mx-4 my-4'>
                <div className="flex items-center justify-between space-x-1 rounded-[30px] bg-white box-border max-w-fit h-fit border-[1px] border-solid border-gainsboro-200" >
                    <input
                        className="px-3 font-medium font-poppins rounded-[30px] bg-white box-border w-[853px] h-[60px] border-[1px] border-solid border-e-0 border-t-0 border-b-0 border-gainsboro-200 outline-none"
                        type="text"
                        placeholder="Enter your message here"
                    />
                    <div className='flex justify-center items-center space-x-3 px-3'>
                        <FaRegSmile className='w-[22.41px] h-[22px] text-darkgray cursor-pointer' />
                        <img
                            className="w-[22.41px] h-[22px] cursor-pointer"
                            alt=""
                            src="/paperclip.svg"
                        />
                        <div className="rounded-full bg-yellowgreen w-[46px] h-[46px] flex justify-center items-center text-center cursor-pointer">
                            <img
                                className="h-[59.95%] w-[59.95%]"
                                alt=""
                                src="/path-76.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChatWindow