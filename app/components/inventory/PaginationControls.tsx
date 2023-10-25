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
    <div className="flex gap-2">
      <button
        className="bg-blue-500 text-white p-1"
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
        className="bg-blue-500 text-white p-1"
        disabled={!hasNextPage}
        onClick={() =>
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }
      >
        next page
      </button>
    </div>
  );
};

export default PaginationControls;
