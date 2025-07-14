import React from 'react';

const Techbadge = ({children}: {children: React.ReactNode}) => {
    return (
        <span className="border border-border font-medium text-[10px] px-2.5 py-0.5 rounded-md">
            {children}
        </span>
    );
}

export default Techbadge;
