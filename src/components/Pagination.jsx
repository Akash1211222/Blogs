import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page,handlePageChange,totalPages} = useContext(AppContext)
  return (
    <div className=' w-full flex justify-center items-center border border-black bg-white fixed bottom-0 shadow-inner bg-blend-hard-light'>
      <div className=' flex justify-between w-11/12 max-w-[650px] py-2 '>
        <div className=' flex gap-x-2'>
        {
          page > 1 &&
          (<button className=' rounded-md border-2 px-4 py-1 shadow-lg'
            onClick={() => handlePageChange(page - 1)}>
            Previous
          </button>)
        }

        {
          page < totalPages &&
          (
            <button className=' rounded-md border-2 px-4 py-1 shadow-lg'
              onClick={() => handlePageChange(page + 1)}>
              Next
            </button>
          )
        }
      </div>
        <p className=' font-bold'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination