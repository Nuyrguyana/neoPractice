import React from 'react';
import { classNames } from "../shared/utils";

export const StatusPill = ({value}) => {
    const type = value ? value : "unknown";
    return (
        <div
            className={classNames(
                "status-pill",
                type.startsWith("New") ? "status-pill-new" : null,
                type.startsWith("Done") ? "status-pill-done" : null,
                type.startsWith("Declined") ? "status-pill-declined" : null,
                type.startsWith("In process") ? "status-pill-in-process" : null
            )}
        >
            {type}
        </div>
    );
};

