import { ChangeEventHandler, FC } from "react";
import { MdClear, MdSearch } from "react-icons/md";

const SearchBox: FC<{
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    onClear: () => void,
}> = ({
    value,
    onChange,
    onClear,
}) => {
    const valueIsEmpty = value === ''

    return (
        <div className='relative flex flex-row items-center bg-white rounded-full shadow border border-gray-200 px-4 w-full font-Montserrat'>
            <input
                onChange={ onChange }
                className='peer w-full h-full absolute left-0 border-none bg-transparent rounded-full pl-10 pr-4 focus:outline-yellow-500'
                type='text'
                value={ value }
                maxLength={256} />
            { valueIsEmpty ?
                <MdSearch className='text-gray-500 h-full w-auto py-1 peer-focus:text-yellow-500' /> :
                <MdClear
                    className='text-gray-500 h-full w-auto py-1 cursor-pointer z-10'
                    onClick={ onClear } /> }
        </div>
    )
}

export { SearchBox }