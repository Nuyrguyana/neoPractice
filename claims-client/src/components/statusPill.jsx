import React from 'react';
import {classNames} from "../shared/utils";

export const StatusPill = ({ value }) => {
    const type = value ? value : "unknown";
    return (
        <div
        className={classNames(
            "status-pill",
            type.startsWith("new") ? "status-pill-new" : null,
            type.startsWith("done") ? "status-pill-done" : null,
            type.startsWith("declined") ? "status-pill-declined" : null,
            type.startsWith("in process") ? "status-pill-in-process" : null
        )}
    >
      {type}
    </div>
    );
};

