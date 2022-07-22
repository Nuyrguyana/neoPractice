import React from 'react';
import { classNames } from "../utils/joinClassNames";
import './index.css'

export const StatusPill = ({ value }) => {
    const type = value ? value : "unknown";

    return (
        <div
            className={ classNames(
                "status-pill",
                type.startsWith("New") ? "status-pill-new" : null,
                type.startsWith("Done") ? "status-pill-done" : null,
                type.startsWith("Declined") ? "status-pill-declined" : null,
                type.startsWith("In progress") ? "status-pill-in-progress" : null
            ) }
        >
            { type }
        </div>
    );
};

