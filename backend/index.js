const express = require('express');
const { MessagingResponse } = require('twilio').twiml;
const smsutils = require('./utils/smsutils');

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('The Robots are coming! Head for the hills!');
    res.type('text/xml').send(twiml.toString());
});

app.get('/',(req,res)=>{
    res.send('hiii');
})
const list_messages = () => {
    client.messages.list({ limit: 2 })
        .then(messages => messages.forEach(m => console.log(m.body)));
}

app.post('/whatsapp', (req, res) => {
    list_messages();
    const twiml = new MessagingResponse();
    twiml.message('This is whatsapp testing');
    res.type('text/xml').send(twiml.toString());
});

app.post('/whatsapp/send', (req, res) => {
    // const twiml = new MessagingResponse();
    // twiml.message('This is whatsapp testing');
    // res.type('text/xml').send(twiml.toString());
    console.log(req.query);
    const message = req.query.message;
    try {
        smsutils.send_message(message);
        res.json({ 
            success: true,
            message: 'Message sent successfully'
         })
    }
    catch (error) {
        res.json({
            success: false,
            message: 'Error sending message'
        })
    }
 
});

app.listen(1337, () => {
    console.log('Express server listening on port 1337');
});

