import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PortalHeader() {
  const emblem = PlaceHolderImages.find(img => img.id === 'cbse-emblem');

  return (
    <header className="w-full bg-white border-b-4 border-[#009999]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 overflow-hidden">
            <Image
              src={emblem?.imageUrl || ''}
              alt="CBSE Emblem"
              width={70}
              height={70}
              className="object-contain"
              data-ai-hint="emblem logo"
            />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-[#005555] text-xl md:text-3xl font-bold tracking-tight leading-tight">
              केन्द्रीय माध्यमिक शिक्षा बोर्ड
            </h1>
            <h2 className="text-[#005555] text-lg md:text-2xl font-bold">
              Central Board of Secondary Education
            </h2>
          </div>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold text-gray-700 uppercase">
            Examination Results 2024
          </p>
        </div>
      </div>
      <div className="bg-[#009999] py-3 px-4 shadow-md">
        <h3 className="text-white font-bold text-center text-sm md:text-lg uppercase tracking-wider">
          Senior School Certificate Examination (Class XII) Results 2024
        </h3>
      </div>
    </header>
  );
}