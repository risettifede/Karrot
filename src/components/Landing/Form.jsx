// // import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
// import Logo from '../../assets/Icons/Logo.png';

// const Form = () => {
//   return (
//     <form>
//       <div className='w-11/12 mx-auto bg-pink space-y-10 rounded-2xl'>
//         <div className='border-gray-900/10 pb-12'>
//           <h2 className='text-center text-white text-xl uppercase p-6 font-semibold leading-7'>
//             Contact
//           </h2>

//           {/* INPUTS */}

//           <div className='mt-2 p-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
//             <div className='-mt-2 sm:col-span-4'>
//               <div className='mt-1'>
//                 <div className='flex rounded-md shadow-sm sm:max-w-md'>
//                   <input
//                     type='text'
//                     name='name'
//                     id='name'
//                     autoComplete='name'
//                     className='block flex-1 border-2 rounded-md bg-white py-2 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6'
//                     placeholder='Insert your name'
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='mt-2 p-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
//             <div className='-mt-2 sm:col-span-4'>
//               <div className='mt-1'>
//                 <div className='flex rounded-md shadow-sm sm:max-w-md'>
//                   <input
//                     type='text'
//                     name='email'
//                     id='email'
//                     autoComplete='email'
//                     className='block flex-1 border-2 rounded-md bg-white py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
//                     placeholder='Insert your email'
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='mt-2 p-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
//             <div className='-mt-2 sm:col-span-4'>
//               <div className='mt-1'>
//                 <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
//                   <input
//                     type='text'
//                     name='subjet'
//                     id='subjet'
//                     autoComplete='subjet'
//                     className='block flex-1 border-2 rounded-md bg-white py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
//                     placeholder='Insert your subjet'
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='mt-2 p-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
//             <div className='-mt-2 sm:col-span-4'>
//               <div className='mt-1'>
//                 <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
//                   <input
//                     type='message'
//                     name='message'
//                     id='message'
//                     autoComplete='message'
//                     className='block flex-1 border-2 rounded-md bg-white py-12 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
//                     placeholder='Insert your message'
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='mt-6 flex items-center justify-end gap-x-6 mx-auto'>
//             <button
//               type='submit'
//               className='rounded-md mx-auto bg-bubble py-2 px-6 text-sm uppercase font-semibold text-white shadow-sm hover:bg-bubble focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Form;

const Form = () => {
  return (
    <>
      <div id='formulario' className='p-8 -mt-20'>
        <div className='flex bg-pink rounded-xl shadow-xl min-h-full flex-1 flex-col justify-center px-6 py-10 mx-auto'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            {/* <img
              className='mx-auto h-20 w-auto'
              src={Logo}
              alt='Your Company'
            /> */}
            <h2 className='mt-10 uppercase text-center text-2xl font-bold leading-9 tracking-tight text-white'>
              Contact us
            </h2>
          </div>

          <div className='mt-10 '>
            <form className='space-y-6' action='#' method='POST'>
              <div>
                <label
                  htmlFor='name'
                  className='block font-mont text-sm font-medium leading-6 text-gray-900'
                >
                  Your name
                </label>
                <div className='mt-2'>
                  <input
                    id='name'
                    name='name'
                    type='name'
                    autoComplete='name'
                    required
                    className='block w-full font-mont rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='Email'
                    className='block font-mont text-sm font-medium leading-6 text-gray-900'
                  >
                    Email address
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='Email'
                    name='Email'
                    type='Email'
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
                    className='block font-mont text-sm font-medium leading-6 text-gray-900'
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
                    className='block font-mont text-sm font-medium leading-6 text-gray-900'
                  >
                    Your messagge
                  </label>
                </div>
                <div className='mt-2'>
                  <textarea
                    id='messagge'
                    name='messagge'
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
                  className='uppercase rounded-md bg-bubble px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 '
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
