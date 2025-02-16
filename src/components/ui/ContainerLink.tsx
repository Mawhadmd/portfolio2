import React from 'react';

const ContainerLink = ({children, variant, link}: {children: React.ReactNode, variant:'Source' | "Web", link: string} ) => {
    return (
     
            <a href={link}
            className='p-2 rounded-lg w-1/2 items-center flex justify-center'
            target="_blank" style={{ 
            backgroundColor: variant !== 'Source' ? 'white' : '#12293F70', 
            color: variant !== 'Source' ? 'black' : 'white' 
            }}>
            {children}
            </a>
      
    );
}

export default ContainerLink;
