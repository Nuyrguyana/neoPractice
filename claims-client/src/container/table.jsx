import React from 'react';
import {useGlobalFilter, usePagination, useSortBy, useTable} from "react-table";
import {SearchBar} from "../components/searchBar";
import Pagination from "../components/pagination";
import {SortDownIcon, SortIcon, SortUpIcon} from "../components/sortIcon";

export const Table = ({columns, data}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        state,
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable({
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )
    return (
        <div className='container-table'>
            <div className='container-title'>
                <h2 className='main-title'><b>Your claims</b></h2>
                <button className='create-claim'>+ Create claim</button>
            </div>
            <SearchBar
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table className='table-body' {...getTableProps()}>
                <thead className='table-head'>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('header')}
                                <span>
                    {column.isSorted
                            ? column.isSortedDesc
                                ? <SortDownIcon className="sort-icon"/>
                                : <SortUpIcon className="sort-icon"/>
                            : <SortIcon className="sort-icon-group"/>
                    }
                  </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td className='table-td'
                                           {...cell.getCellProps()}
                                >
                                    {cell.column.Cell.name === "defaultRenderer"
                                        ? <div className="text-sm text-gray-500">{cell.render('Cell')}</div>
                                        : cell.render('Cell')
                                    }
                                </td>;
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <Pagination
                previousPage={previousPage}
                canPreviousPage={canPreviousPage}
                state={state}
                pageOptions={pageOptions}
                nextPage={nextPage}
                canNextPage={canNextPage}
            />
        </div>
    );
};

