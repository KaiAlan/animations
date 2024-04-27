import HacckyTextAnimation from '@/components/HacckyTextAnimation'

const page = () => {
  
  return (
    <div className="flex flex-col w-full h-screen">
        <div className="h-[calc(100%/4)]">
            <h1>Hackky Text Animation</h1>
        </div>
      <HacckyTextAnimation />
    </div>
  );
};

export default page;
