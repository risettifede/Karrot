import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [toast, setToast] = useState({ visible: false, message: '', type: '' });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_c06utff',
        'template_4q86fqo',
        form.current,
        'lzxTgk2DmiNxY5ObE'
      );

      setToast({
        visible: true,
        message: 'Email sent successfully!',
        type: 'success',
      });
    } catch (error) {
      setToast({
        visible: true,
        message: 'Error sending email.',
        type: 'error',
      });
    }
  };

  const closeToast = () => {
    setToast({ ...toast, visible: false });
  };

  return (
    <>
      <div id='formulario' className='p-8 -mt-20'>
        <div className='flex bg-pink rounded-xl shadow-xl min-h-full flex-1 flex-col justify-center px-6 py-10 mx-auto'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 uppercase text-center text-2xl leading-9 tracking-tight text-white'>
              Contact us
            </h2>
          </div>

          <div className='mt-10 uppercase '>
            <form
              className='space-y-6'
              action='#'
              method='POST'
              ref={form}
              onSubmit={sendEmail}
            >
              <div>
                <label
                  htmlFor='name'
                  className='block font-mont text-sm leading-6 text-white font-extrabold'
                >
                  Your name
                </label>
                <div className='mt-2'>
                  <input
                    id='name'
                    type='text'
                    name='user_name'
                    autoComplete='name'
                    required
                    className='block w-full font-mont padding-left rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <div className='flex uppercase items-center justify-between'>
                  <label
                    htmlFor='Email'
                    className='block font-mont text-sm leading-6 text-white font-extrabold'
                  >
                    Email address
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='Email'
                    type='email'
                    name='user_email'
                    autoComplete='Email'
                    required
                    className='block w-full font-mont rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='Subjet'
                    className='block font-mont text-sm leading-6 text-white font-extrabold'
                  >
                    Subjet
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='Subjet'
                    name='Subjet'
                    type='Subjet'
                    autoComplete='Subjet'
                    required
                    className='block w-full font-mont rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='messagge'
                    className='block font-mont text-sm leading-6 text-white font-extrabold'
                  >
                    Your message
                  </label>
                </div>
                <div className='mt-2'>
                  <textarea
                    id='message'
                    name='message'
                    rows='4'
                    required
                    maxLength='1000'
                    // placeholder='Escribe tu consulta aquí...'
                    className='block font-mont w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='flex justify-center mt-6'>
                <button
                  type='submit'
                  value='Send'
                  className='uppercase rounded-md bg-bubble px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 '
                >
                  Submit
                </button>
              </div>
              {toast.visible && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                  <div className='absolute inset-0 bg-black opacity-60 blur-md'></div>
                  <div
                    className={`p-4 bg-${
                      toast.type === 'success' ? 'green' : 'red'
                    }-500 rounded shadow-lg text-white relative w-1/3`}
                  >
                    {toast.type === 'success' ? '✔' : '❌'} {toast.message}
                    <button
                      className='absolute top-2 right-2 text-xl'
                      onClick={closeToast}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
