import React from 'react';

export const Pagination = ({previousPage, canPreviousPage, state, pageOptions, nextPage, canNextPage}) => {
    return (
        <div className="pagination">
            <div className='container-btn-pagination'>
            <button
                className='btn-pagination'
                onClick={() => previousPage()}
                disabled={!canPreviousPage}>

            </button>
            {' '}
            <strong className='page-number'>
                {state.pageIndex + 1}
            </strong>
            of
            <strong className='page-number'>
                {pageOptions.length}
            </strong>{' '}
            <button
                className='btn-pagination'
                onClick={() => nextPage()}
                disabled={!canNextPage}>
                {<i className="bi bi-caret-right"></i>}
            </button>
            </div>
        </div>
    );
};

