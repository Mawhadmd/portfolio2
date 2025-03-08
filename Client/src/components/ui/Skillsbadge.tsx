import React from 'react';

const Techbadge = ({children}: {children: React.ReactNode}) => {
    return (
        <span className="border border-gray-800 font-medium text-[10px] px-2.5 py-0.5 rounded-md">
            {children}
        </span>
    );
}

export default Techbadge;
