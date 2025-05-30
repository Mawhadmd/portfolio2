import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-Primary text-3xl space-y-1 text-Muted font-medium  mx-auto   flex-col flex items-center justify-center' style={{ height: "calc(100vh)" }}>
           <p> This page is under construction. Please check back later. </p>
           <Link href={'/'} className='bg-Secondary rounded-2xl p-2 hover:text-Secondary hover:bg-Muted transition cursor-pointer'>Go back</Link>
        </div>
    );
}

export default Page;
