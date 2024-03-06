import React from "react";
import Message from "./Message";
import 'react-chat-elements/dist/main.css';
import { ChatItem } from 'react-chat-elements'
import { ChatList } from 'react-chat-elements'

const ContactCard = () => {
  return (
    <span className="font-poppins text-xs mt-2 scale-90">
      <div className="text-3xl font-medium text-darkslategray my-2">
        Recent Messages
      </div>
      <div className="h-[58vh] overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slategray">
        <ChatList
          className='chat-list'
          dataSource={[
            {
              avatar: '/ellipse-73@2x.png',
              alt: 'Reactjs',
              title: 'Franky Schmidt',
              subtitle: 'Hey whatsapp man',
              date: new Date(),
              unread: 10,
              muted : false,
              statusColor : 'lightgreen',
              statusColorType : 'badge',
            },
            {
              avatar: '/ellipse-73@2x.png',
              alt: 'Reactjs',
              title: 'Doctor Dandamudi',
              subtitle: 'How are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: '/ellipse-73@2x.png',
              alt: 'Reactjs',
              title: 'Channai Medicals',
              subtitle: 'Change the address to 113?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: '/ellipse-73@2x.png',
              alt: 'Reactjs',
              title: 'visitor',
              subtitle: 'Hi the above ...?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: '/ellipse-73@2x.png',
              alt: 'Reactjs',
              title: 'visitor',
              subtitle: 'Hi the above ...?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: '/ellipse-73@2x.png',
              alt: 'Reactjs',
              title: 'visitor',
              subtitle: 'Hi the above ...?',
              date: new Date(),
              unread: 0,
            },
          ]} />
      </div>
    </span>
  );
};

export default ContactCard;
