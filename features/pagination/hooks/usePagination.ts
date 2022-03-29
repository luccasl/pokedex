import { useEffect, useState } from "react"

const usePagination = (records: any[], recordsPerPage: number): [
    paginatedRecords: any[],
    currentPage: number,
    setCurrentPage: (page: number) => void,
    nextPage: () => void,
    previousPage: () => void
] => {
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ paginatedRecords, setPaginatedRecords ] = useState<any[]>([])

    const nextPage = () => {
        setCurrentPage(currentPage+1)
    }

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage-1)
        }
    }

    useEffect(() => {
        const offset = (currentPage-1) * recordsPerPage
        
        const recordsClone = [ ...records ];
        setPaginatedRecords(recordsClone.splice(offset, recordsPerPage))
    }, [ records, currentPage, ])

    return [ paginatedRecords, currentPage, setCurrentPage, nextPage, previousPage ]
}

export { usePagination }