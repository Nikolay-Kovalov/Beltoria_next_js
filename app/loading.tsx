import React from 'react';
import Image from 'next/image';
import loader from '@/app/assets/loader.gif';

const LoadingPage = () => {
  return (
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    }}
    >
      <Image src={loader} alt='Loading...' height={150} width={150}/>
    </div>
  )
}

export default LoadingPage;
