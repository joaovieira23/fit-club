import React, { useRef } from 'react'
import './Join.scss';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

   const sendEmail = (e: any) => {
      e.preventDefault();
    
      //@ts-ignore
      emailjs.sendForm('service_extzqa9', 'template_5fbt3fr', form.current, 'VLwg1ltOWvnCYAiK_')
        .then((result: any) => {
        console.log(result.text);
      }, (error: any) => {
         console.log(error.text);
        });
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>

            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            {/*
                // @ts-ignore */}
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email address' />
                <button className='btn btn-j'>Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join