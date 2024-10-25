import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
          'bg-red-500 text-white': status === 'late', // Added conditional class for 'late'
        },
      )}
    >
      {status === 'pending' && (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      )}
      {status === 'paid' && (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      )}
      {status === 'late' && ( // Logic to render "Late" status
        <>
          Late
          <ClockIcon className="ml-1 w-4 text-white" /> // Clock icon for 'late'
        </>
      )}
    </span>
  );
}
