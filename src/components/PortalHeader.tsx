import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PortalHeader() {
  const emblem = PlaceHolderImages.find(img => img.id === 'cbse-emblem');

  return (
    <header className="w-full bg-white border-b border-[#2EC1C1]">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src={emblem?.imageUrl || ''}
              alt="CBSE Emblem"
              width={80}
              height={80}
              className="object-contain"
              data-ai-hint="emblem logo"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#005555] text-lg md:text-2xl font-bold font-headline leading-tight">
              केन्द्रीय माध्यमिक शिक्षा बोर्ड
            </h1>
            <h2 className="text-[#005555] text-base md:text-xl font-semibold font-headline">
              Central Board of Secondary Education
            </h2>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm md:text-base font-medium text-gray-600">
            Examination Results — Brought to you by
          </p>
          <p className="text-[#146CCF] font-bold text-lg">
            National Informatics Centre
          </p>
        </div>
      </div>
      <div className="bg-[#2EC1C1] py-2 px-4 text-center">
        <h3 className="text-white font-bold tracking-wide text-sm md:text-base">
          Senior School Certificate Examination (Class XII) Results 2024
        </h3>
      </div>
    </header>
  );
}