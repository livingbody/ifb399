import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

type PaginationPropsType = {
  pageNum: number
  currentPage: number
  totalItemNum: number
}
const genListNumber = (start: number, stop: number) => {
  let list: number[] = []
  for (let i = start; i <= stop; i++) {
    list.push(i)
  }
  return list
}

export default function Pagination({
  pageNum,
  currentPage,
  totalItemNum,
}: PaginationPropsType) {
  const pageList = genListNumber(1, pageNum)
  return (
    <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        <button className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
          Previous
        </button>
        <button className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
          Next
        </button>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>{currentPage}</span> to{' '}
            <span className='font-medium'>{pageNum}</span> of{' '}
            <span className='font-medium'>{totalItemNum}</span> results
          </p>
        </div>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <button className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </button>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {pageList.map((item) => {
              return item === currentPage ? (
                <button
                  key={item}
                  aria-current='page'
                  className='z-10 bg-blue-50 border-brand text-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                >
                  {item}
                </button>
              ) : (
                <button
                  key={item}
                  className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                >
                  {item}
                </button>
              )
            })}
            <button className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
