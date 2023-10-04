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
          className='absolute h-[50%] rotate-12 -top-[20%] left-[20%] object-cover z-0'
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
