import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page,handlePageChange,totalPages} = useContext(AppContext)
  return (
    <div>
      <div className=' gap-4'>
        {
          page > 1 &&
          (<button className=' border-l bg-slate-500 rounded gap-3'
            onClick={() => handlePageChange(page - 1)}>
            Previous
          </button>)
        }

        {
          page < totalPages &&
          (
            <button className=' border-l bg-slate-500 rounded gap-3'
              onClick={() => handlePageChange(page + 1)}>
              Next
            </button>
          )
        }

        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination