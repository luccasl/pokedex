import { FC } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination: FC<{
    currentPage: number,
    onClickNext: () => void,
    onClickPrevious: () => void,
    recordCount: number,
    recordsPerPage: number,
    enabled?: boolean,
}> = ({
    currentPage,
    onClickNext,
    onClickPrevious,
    recordCount,
    recordsPerPage,
    enabled = true,
}) => {
    const nextPage: number = currentPage+1
    const previousPage: number = currentPage-1

    return (
      <div>
        { enabled &&
          <div className="flex flex-row w-full items-center md:justify-end px-6 py-4">
            <div className={`${currentPage > 1 ? '': 'invisible md:hidden'} flex flex-row items-center cursor-pointer mr-2`} onClick={ onClickPrevious }>
                <MdArrowBackIos/>
                <div className='font-Montserrat ml-1'>
                    Anterior
                </div>
            </div>
            <div className='flex-1 md:flex-none flex flex-row items-center justify-center'>
              <div className={`flex flex-row items-center justify-center`}>
                { currentPage > 1 &&
                    <div className='w-6 font-Montserrat text-center cursor-pointer' onClick={ onClickPrevious }>
                        { previousPage }
                    </div>}
                <div className='w-6 font-Montserrat text-center bg-red-500 text-white rounded-md'>
                  { currentPage }
                </div>
                { currentPage*recordsPerPage < recordCount &&
                  <div className='w-6 font-Montserrat text-center cursor-pointer' onClick={ onClickNext }>
                    { nextPage }
                  </div> }
              </div>
            </div>
            <div className={`${currentPage*recordsPerPage < recordCount ? '': 'invisible md:hidden'} flex flex-row items-center cursor-pointer ml-2`} onClick={ onClickNext }>
              <div className='font-Montserrat mr-1'>
                Seguinte
              </div>
              <MdArrowForwardIos/>
            </div>
          </div> }
      </div>
    )
}

export { Pagination }