import React, {useEffect} from 'react';
import {useGlobalFilter, usePagination, useSortBy, useTable} from "react-table";
import plus from '../image/icon-plus.svg'
import {useHistory} from "react-router-dom";
import sortDown from '../image/sort1.svg'
import sortUp from '../image/sort2.svg'
import sortGroup from '../image/groupSortIcon.svg'
import {useDispatch} from "react-redux";
import {Pagination} from "../components/pagination";


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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'SEARCH_INPUT', payload: {
                globalFilter: state.globalFilter,
                setGlobalFilter: setGlobalFilter,
                preGlobalFilteredRows: preGlobalFilteredRows
            }
        })
    })
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
                                            ? <div className="claim-title">{cell.render('Cell')}</div>
                                            : cell.render('Cell')
                                        }
                                    </td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                {page.length < 10 ?
                    <span/>
                    :
                    <Pagination
                        previousPage={previousPage}
                        canPreviousPage={canPreviousPage}
                        state={state}
                        pageOptions={pageOptions}
                        nextPage={nextPage}
                        canNextPage={canNextPage}
                    />
                }
            </div>
        </div>
    );
};

