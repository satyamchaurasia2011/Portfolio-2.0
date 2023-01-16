import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}
type Props = {};

function ContactMe({}: Props) {
    const { 
        register, 
        handleSubmit 
    } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ((formData) => {
    window.location.href = `mailto:satyamchaurasia2011@gmail.com?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.message} `
  });
  return (
    <div
      className="h-screen flex flex-cols items-center relative text-center
    md:text-left md:flex-row max-w-7xl justify-evenly px-0 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-28">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#0af7ef]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-3">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className="text-[#0af7ef] h-7 w-7 animate-pulse" />
            <p className="text-xl">+91 9354287186</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="text-[#0af7ef] h-7 w-7 animate-pulse" />
            <p className="text-xl">satyamchaurasia2011@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className="text-[#0af7ef] h-7 w-7 animate-pulse" />
            <p className="text-xl">Nangloi, New Delhi</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
                <input {...register('name')} placeholder="Name" className="contactInput" type="text" required/>
                <input {...register('email')} placeholder="Email" className="contactInput" type="email" required/>
            </div>

            <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" required/>
            <textarea {...register('message')} placeholder="Message" className="contactInput" required />
            <button 
            className="bg-[#0af7ef] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit">Submit</button>
        </form>
      </div>
    </div>
  ); 
}

export default ContactMe;
