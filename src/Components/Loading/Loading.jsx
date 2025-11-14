import React from 'react';

const Loading = () => {
    return (
        <section className='h-screen py-50 flex items-center justify-center'>
            <span className="loading loading-spinner text-amber"></span>
            <span className='text-2xl font-bold'>Loading</span>
        </section>
    );
};

export default Loading;