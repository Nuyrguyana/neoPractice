import React from 'react';
import pag1 from '../../image/pag1.svg'
import pag2 from '../../image/pag2.svg'
import ellipsis from '../../image/ellipsis.svg'
import './index.css'

export const Pagination = ({ previousPage, canPreviousPage, state, pageOptions, nextPage, canNextPage }) => {
    return (
        <div className='container-btn-pagination'>
            <button
                className='btn-pagination'
                onClick={ () => previousPage() }
                disabled={ !canPreviousPage }>
                <img src={ pag1 } width='6' height='10'/>
            </button>

            { ' ' }

            <button className='btn-pagination'>
                { state.pageIndex + 1 }
            </button>

            <img src={ ellipsis }/>

            <button className='btn-pagination'>
                { pageOptions.length }
            </button>

            { ' ' }

            <button
                className='btn-pagination'
                onClick={ () => nextPage() }
                disabled={ !canNextPage }>
                <img src={ pag2 } width='6' height='10'/>
            </button>
        </div>
    );
};

