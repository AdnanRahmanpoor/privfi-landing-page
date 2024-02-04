import Image from 'next/image';

function Hero() {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex items-center justify-between h-screen'>
        {/* Left */}
        <div className='flex flex-col items-start w-full md:w-1/2'>
          <h1 className='text-3xl font-bold mb-4'>
            Demystifying Privacy and DeFi: Learn, Explore, and Take Control.
          </h1>
          <p className='mb-8'>Text Content</p>
        </div>
        {/* Right */}
        <div className='w-full md:w-1/2'>
          <Image
            src='/privacy-shield.png'
            alt=''
            width={384}
            height={384}
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
