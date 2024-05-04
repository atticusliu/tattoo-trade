import Image from "next/image";
import Link from 'next/link';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-wrap h-1/2 mb-8">
        <div className="w-full md:w-1/2 relative">
          <div className="h-full relative">
            <Image
              src='/tattoo-gun-cover.jpg'
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover transition-transform transform-gpu md:scale-110"
              alt="Shop tattoo machines"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
              <h1 className="text-white">Tattoo Machines</h1>
              <Button
                text="Shop Now"
                styles=""
                type="button"
                redirectTo=""
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="h-full relative">
            <Image
              src='/ink-cover.jpg'
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover transition-transform transform-gpu md:scale-110"
              alt="Shop tattoo inks"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            <h1 className="text-white">Ink</h1>
              <Button
                text="Shop Now"
                styles=""
                type="button"
                redirectTo=""
              />
            </div>
        </div>
      </div>
      <div className="justify-center text-center">
        <h1>Sell tattoo equipment, reference material, and more</h1>
        <Button
          text="Sell Now"
          styles=""
          type="button"
          redirectTo="/listings/create"
        />
      </div>
    </div>
  );
}