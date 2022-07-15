import React, { useEffect, useMemo, useState } from 'react';
import claimsAPI from '../api/fake.api'
import { Table } from "./table";
import { StatusPill } from "../components/statusPill";
import { TypeDot } from "../components/typeDot";
import { ActionsComponent } from "../components/actionsComponent";
import { ClaimCards } from "./claimCards";
import axios from 'axios';
import { getToken } from '../api/jwtLocalStorage';

export const ClaimsContainer = () => {
    const [claims, setClaims] = useState([])
    const columns = useMemo(
        () => [
            {
                header: 'Title',
                accessor: 'title'
            },
            {
                header: 'Created',
                accessor: 'created'
            },
            {
                header: 'Type',
                accessor: 'type',
                Cell: TypeDot
            },
            {
                header: 'Status',
                accessor: 'status',
                Cell: StatusPill
            },
            {
                header: 'Actions',
                accessor: 'actions',
                Cell: ActionsComponent
            }
        ],
        []
    )

    useEffect(() => {
        axios.get('http://localhost:3001/claim', {
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }).then((resp) => {
            const {claims} = resp.data
            const mappedClaims = claims.map((claim) => {
                return {
                    title: claim.title,
                    created: claim.createdAt,
                    type: claim.type?.name,
                    status: claim.status?.name,
                    actions: claim._id
                }
            })
            setClaims(mappedClaims)

        })

    }, []);

    return (
        <div>
            <Table columns={columns} data={claims}/>
            <ClaimCards claims={claims}/>
        </div>
    );
};

