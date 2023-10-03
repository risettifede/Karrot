import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const Toast = ({ message, type, onClose }) => {
  return (
    <div className='fixed font-mont inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-black opacity-50 z-40'></div>
      <div className='relative p-4 bg-white border border-gray-300 rounded shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 z-50'>
        <button
          type='button'
          className='absolute -top-1 right-4 text-5xl focus:outline-none'
          onClick={onClose}
        >
          &times;
        </button>
        <div className='flex items-center space-x-4'>
          {type === 'success' ? (
            <AiOutlineCheck className='text-green-500 w-10 h-10' />
          ) : (
            <AiOutlineClose className='text-red-500 w-10 h-10' />
          )}
          <div className='flex-1'>
            <div className='flex justify-between items-center'>
              <strong className='text-lg'>
                {type === 'success' ? 'Congrats!' : 'Try again'}
              </strong>
            </div>
            <p className='mt-2'>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
