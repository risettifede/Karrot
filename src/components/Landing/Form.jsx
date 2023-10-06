import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';
import Spinner from './Spinner';
import { useForm } from 'react-hook-form';
import triangle from '../../assets/Resources/Triangle.webp';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data, e) => {
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        'service_c06utff',
        'template_4q86fqo',
        e.target,
        'lzxTgk2DmiNxY5ObE'
      );

      setToastMessage('Email sent successfully!');
      setToastType('success');
    } catch (error) {
      console.error('There was an error sending the email:', error);
      setToastMessage('Error sending email. Please try again later.');
      setToastType('error');
    } finally {
      setShowToast(true);
      setIsLoading(false);
    }

    e.preventDefault();
  };

  return (
    <>
      <div id='formulario' className='relative p-8 -mt-4'>
        <img
          src={triangle}
          alt='Background Image'
          className='absolute h-[50%] rotate-12 -top-[20%] left-[20%] object-cover z-0
          lg:h-[39%] lg:-top-[29%] lg:left-[65%] lg:z-20
          xxxl:h-[60%] xxxl:-top-[45%] xxxl:left-[63%] xxxl:z-0
          xxxxl:h-[35%] xxxxl:-top-[25%] xxxxl:left-[73%] xxxxl:z-0'
        />
        <div className='flex bg-pink rounded-xl shadow-xl min-h-full flex-1 flex-col justify-center px-6 py-10 mx-auto relative z-10'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 uppercase text-center text-2xl leading-9 tracking-tight text-white'>
              Contact us
            </h2>
          </div>

          <div className='mt-10'>
            <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor='name'
                  className='block font-mont text-xl leading-6 text-white uppercase font-extrabold'
                >
                  name
                </label>
                <div className='mt-2'>
                  <input
                    {...register('user_name', { required: true })}
                    id='name'
                    type='text'
                    autoComplete='name'
                    className='block w-full font-mont p-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray sm:text-sm sm:leading-6'
                  />

                  {errors.user_name && (
                    <span className='text-red-500 font-mont'>
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div className='flex uppercase items-center justify-between'>
                  <label
                    htmlFor='Email'
                    className='block font-mont text-xl leading-6 text-white uppercase font-extrabold'
                  >
                    E-mail
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    {...register('user_email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    id='Email'
                    type='email'
                    autoComplete='Email'
                    className='block w-full font-mont p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                  />
                  {errors.user_email && (
                    <span className='text-red-500 font-mont '>
                      Invalid email address
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='Subject'
                    className='block font-mont text-xl leading-6 text-white uppercase font-extrabold'
                  >
                    Subject
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    {...register('Subject', { required: true })}
                    id='Subject'
                    type='text'
                    autoComplete='Subject'
                    className='block w-full font-mont p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                  />
                  {errors.Subject && (
                    <span className='text-red-500 font-mont'>
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='message'
                    className='block font-mont text-xl leading-6 text-white uppercase font-extrabold'
                  >
                    message
                  </label>
                </div>
                <div className='mt-2'>
                  <textarea
                    {...register('message', {
                      required: true,
                      maxLength: 1000,
                    })}
                    id='message'
                    rows='4'
                    className='block font-mont w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'
                  />
                  {errors.message && (
                    <span className='text-red-500 font-mont'>
                      This field is required and should not exceed 1000
                      characters
                    </span>
                  )}
                </div>
              </div>

              <div className='flex justify-center mt-6'>
                <button
                  type='submit'
                  value='Send'
                  className='uppercase rounded-md bg-bubble px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2'
                  style={{ width: 'max-content' }}
                >
                  {isLoading && <Spinner />}
                  <span
                    className={`transition-opacity duration-300 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Submit
                  </span>
                </button>
              </div>
              {showToast && (
                <Toast
                  message={toastMessage}
                  type={toastType}
                  onClose={() => setShowToast(false)}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

// NUEVO FORMULARIO

// import React from "react";
// import { TEInput, TERipple } from "tw-elements-react";

// export default function ExampleV2(): JSX.Element {
//   return (
//     <section className="h-full bg-neutral-200 dark:bg-neutral-700">
//       <div className="container h-full p-10">
//         <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
//           <div className="w-full">
//             <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
//               <div className="g-0 lg:flex lg:flex-wrap">
//                 {/* <!-- Left column container--> */}
//                 <div className="px-4 md:px-0 lg:w-6/12">
//                   <div className="md:mx-6 md:p-12">
//                     {/* <!--Logo--> */}
//                     <div className="text-center">
//                       <img
//                         className="mx-auto w-48"
//                         src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                         alt="logo"
//                       />
//                       <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
//                         We are The Lotus Team
//                       </h4>
//                     </div>

//                     <form>
//                       <p className="mb-4">Please login to your account</p>
//                       {/* <!--Username input--> */}
//                       <TEInput
//                         type="text"
//                         label="Username"
//                         className="mb-4"
//                       ></TEInput>

//                       {/* <!--Password input--> */}
//                       <TEInput
//                         type="password"
//                         label="Password"
//                         className="mb-4"
//                       ></TEInput>

//                       {/* <!--Submit button--> */}
//                       <div className="mb-12 pb-1 pt-1 text-center">
//                         <TERipple rippleColor="light" className="w-full">
//                           <button
//                             className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
//                             type="button"
//                             style={{
//                               background:
//                                 "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//                             }}
//                           >
//                             Log in
//                           </button>
//                         </TERipple>

//                         {/* <!--Forgot password link--> */}
//                         <a href="#!">Forgot password?</a>
//                       </div>

//                       {/* <!--Register button--> */}
//                       <div className="flex items-center justify-between pb-6">
//                         <p className="mb-0 mr-2">Don't have an account?</p>
//                         <TERipple rippleColor="light">
//                           <button
//                             type="button"
//                             className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
//                           >
//                             Register
//                           </button>
//                         </TERipple>
//                       </div>
//                     </form>
//                   </div>
//                 </div>

//                 {/* <!-- Right column container with background and description--> */}
//                 <div
//                   className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
//                   style={{
//                     background:
//                       "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//                   }}
//                 >
//                   <div className="px-4 py-6 text-white md:mx-6 md:p-12">
//                     <h4 className="mb-6 text-xl font-semibold">
//                       We are more than just a company
//                     </h4>
//                     <p className="text-sm">
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
