import React from 'react';

const ContainerButton = ({children, variant, link}: {children: React.ReactNode, variant:'Source' | "Web", link: string} ) => {
    return (
     
            <a href={link}
            className='p-2 rounded-lg w-1/2 shadow-[0px_1px_5px_rgba(0,0,0,0.5)]  border-border items-center flex justify-center'
            target="_blank" style={{ 
            backgroundColor: variant !== 'Source' ? 'white' : '#12293F70', 
            color: variant !== 'Source' ? 'black' : 'white' 
            }}>
            {children}
            </a>
      
    );
}

export default ContainerButton;
