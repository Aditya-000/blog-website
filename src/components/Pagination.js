import React, { useContext} from 'react'
import { AppContext } from '../context/context'

const Pagination = () => {
  const {page,totalPages,handleChange} = useContext(AppContext);

  return (
    <div className='p-2 h-12 font-bold w-full bg-slate-400 top-[95%] fixed flex justify-between items-center align-middle lg:flex lg:justify-around'>
      <div className='flex gap-2 lg:ml-32'>

        {
          page<totalPages && <button onClick={()=> handleChange(page+1)}>Next</button>
        }

        {
          page>1 && <button  onClick={()=> handleChange(page-1)}>Prev</button>
        }
        
      </div>
      <div>{`Page ${page} of ${totalPages}`}</div>
    </div>
  )
}

export default Pagination;