import React from 'react';
import {useGlobalFilter, usePagination, useSortBy, useTable} from "react-table";
import {Pagination} from "../components/pagination";
import plus from '../image/icon-plus.svg'
import {useHistory} from "react-router-dom";
import sortDown from '../image/sort1.svg'
import sortUp from '../image/sort2.svg'
import sortGroup from '../image/groupSortIcon.svg'


export const Table = ({columns, data}) => {
    const history = useHistory()
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

    const handleCreateNewClaim = () => {
        history.push('/create')
    }
    return (
        <div className='container-table'>
            <div className='container-title'>
                <h2 className='main-title'>Your claims</h2>
                <button className='create-claim'
                        onClick={() => {
                            handleCreateNewClaim()
                        }}>
                    <img src={plus}/>
                    <span className='create-btn-title'>Create claim</span>
                </button>
            </div>
            {/*<div className='container-table'>*/}
                {/*<SearchBar*/}
                {/*    preGlobalFilteredRows={preGlobalFilteredRows}*/}
                {/*    globalFilter={state.globalFilter}*/}
                {/*    setGlobalFilter={setGlobalFilter}*/}
                {/*/>*/}
                <div className='content-table-body'>
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
                            ? <img src={sortDown} className="sort-icon-group"/>
                            : <img src={sortUp} className="sort-icon-group"/>
                        : <img src={sortGroup} className="sort-icon-group"/>
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
            {/*</div>*/}
        </div>
    );
};

