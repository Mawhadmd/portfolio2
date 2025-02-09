import React from 'react';

const Button = ({children}: any) => {
    return (
        <button className="size-9 content-center border rounded-md border-gray-600">
            {children}
        </button>
    );
}

export default Button;
