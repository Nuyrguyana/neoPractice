import React, {useEffect, useMemo, useState} from 'react';
import claimsAPI from '../api/fake.api'
import {Table} from "./table";
import {StatusPill} from "../components/statusPill";
import {TypeDot} from "../components/typePill";
import {ActionsComponent} from "../components/actionsComponent";
import {ClaimCards} from "./claimCards";

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
        claimsAPI
            .fetchAll()
            .then(data => setClaims(data))
    }, []);

    return (
        <div>
            <Table columns={columns} data={claims}/>
            <ClaimCards claims={claims}/>
        </div>
    );
};

