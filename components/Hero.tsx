import Image from 'next/image';
import { Button } from 'flowbite-react';

function Hero() {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col md:flex-row items-center md:justify-evenly h-screen px-10 md:px-2'>
        {/* Left */}
        <div className='flex flex-col items-start w-full mt-4 md:mt-0 md:w-1/2'>
          <h1 className='text-3xl font-bold mb-4'>
            Demystifying Privacy and DeFi: Learn, Explore, and Take Control.
          </h1>
          <p className='mb-4'>
            Navigate the exciting world of decentralized finance (DeFi) with
            confidence. Understand the key privacy considerations and empower
            yourself to make informed decisions. Explore innovative DeFi
            applications and unlock new financial possibilities.
          </p>
          <Button gradientDuoTone='purpleToBlue'>
            Explore Now!
          </Button>
        </div>
        {/* Right */}
        <div className='mt-4'>
          <Image src='/privacy-shield.png' alt='' width={384} height={384} />
        </div>
      </div>
    </div>
  );
}
export default Hero;
