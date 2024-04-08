import React from 'react';
import Loading from './loading';

async function fetchData() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return true;
}

async function Links() {
  const isLoading = await fetchData();

  if (isLoading) {
    return (
      <div className='bg-black h-96 flex justify-center items-center'>
        <h1 className='text-8xl font-black text-white'>links</h1>
      </div>
    );
  }

  return <Loading />;
}

export default Links;