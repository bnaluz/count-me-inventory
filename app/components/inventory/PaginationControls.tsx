'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  inventoryNumber: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  inventoryNumber,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams?.get('page') ?? '1';
  const per_page = searchParams?.get('per_page') ?? '10';

  return (
    <>
      <div className="flex items-center justify-between pt-4">
        <button
          className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#214258] dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={!hasPrevPage}
          onClick={() =>
            router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
          }
        >
          prev page
        </button>

        <div>
          {page} / {Math.ceil(inventoryNumber / Number(per_page))}
        </div>

        <button
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:dark:bg-[#214258] dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={!hasNextPage}
          onClick={() =>
            router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
          }
        >
          next page
        </button>
      </div>
    </>
  );
};

export default PaginationControls;
