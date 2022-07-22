import React from 'react';
import ellipseT from '../image/EllipseT.svg'
import ellipseH from '../image/EllipseH.svg'
import ellipseS from '../image/EllipseS.svg'
import ellipseN from '../image/EllipseN.svg'

export const TypeDot = ({ value }) => {
    const type = value ? value : "unknown";

    return (
        <div>
            <span>
                { type.startsWith("Troubleshooting") ? <img className='type-dot' src={ ellipseT }/> : null }
                { type.startsWith("Hardware") ? <img className='type-dot' src={ ellipseH }/> : null }
                { type.startsWith("Software") ? <img className='type-dot' src={ ellipseS }/> : null }
                { type.startsWith("Networking") ? <img className='type-dot' src={ ellipseN }/> : null }
        </span>
            <span className='type-text'>{ type }</span>

        </div>
    );
};