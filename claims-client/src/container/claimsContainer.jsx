import React, { useEffect, useMemo, useState } from 'react';
import { Table } from "../components/Table/table";
import { StatusPill } from "../shared/statusPill";
import { TypeDot } from "../shared/typeDot";
import { BrowseButton } from "../shared/browseButton";
import { ClaimCards } from "../components/Cards/claimCards";
import { formatDate } from '../utils/formatDate';
import { axiosGetClaims } from '../api/axiosRequest';

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
                Cell: BrowseButton
            }
        ],
        []
    )

    useEffect(() => {
        // to prevent unsubscribe error #1
        let isSubscribed = true;

        axiosGetClaims()
            .then((resp) => {
                const { claims } = resp.data
                const mappedClaims = claims.map((claim) => {
                    return {
                        title: claim.title,
                        created: formatDate(claim.createdAt),
                        type: claim.type?.name,
                        status: claim.status?.name,
                        actions: claim._id
                    }
                })
                if (isSubscribed) {
                    setClaims(mappedClaims)
                }
            })
        // to prevent unsubscribe error #2
        return () => (isSubscribed = false)
    }, []);

    return (
        <div>
            <Table columns={ columns } data={ claims }/>
            <ClaimCards claims={ claims }/>
        </div>
    );
};

