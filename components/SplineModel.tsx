'use client';

import Spline from '@splinetool/react-spline/next';

interface SplineModelProps {
  scene: string;
  className?: string;
}

const SplineModel = ({ scene, className = '' }: SplineModelProps) => {
  return (
    <main className='flex justify-center items-center'>
      <div className={`w-auto h-[374px] ${className} mt-[-40px]`}>
        <Spline scene={scene} />
      </div>
    </main>
  );
};

export default SplineModel;
