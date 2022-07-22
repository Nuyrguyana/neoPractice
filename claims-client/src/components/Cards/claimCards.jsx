import { Card } from "./card";
import { useHistory } from "react-router-dom";
import plus from "../../image/icon-plus.svg";
import React from "react";

export const ClaimCards = ({ claims }) => {
    const history = useHistory()

    const handleCreateNewClaim = () => {
        history.push('/create')
    }

    return (
        <div className='container-claim-card'>
            <div className='container-title'>
                <h2 className='main-title'>Your claims</h2>
                <button className='create-claim'
                        onClick={ () => {
                            handleCreateNewClaim()
                        } }>
                    <img src={ plus }/>
                    <span className='create-btn-title'>Create claim</span>
                </button>
            </div>

            <ul>
                { claims.map((claim) => {
                    return (<li
                        key={ claim.actions }>
                        <Card title={ claim.title }
                              created={ claim.created }
                              type={ claim.type }
                              status={ claim.status }
                              actions={ claim.actions }
                        />
                    </li>)
                }) }
            </ul>
        </div>
    )
}