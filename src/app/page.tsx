"use client";

import { useState } from 'react';
import PortalHeader from '@/components/PortalHeader';
import LoginPortal, { FormData } from '@/components/LoginPortal';
import ResultDisplay from '@/components/ResultDisplay';

export default function Home() {
  const [view, setView] = useState<'login' | 'result'>('login');
  const [submissionData, setSubmissionData] = useState<FormData | null>(null);

  const handleSubmit = (data: FormData) => {
    setSubmissionData(data);
    setView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#ECF6F6] selection:bg-[#2EC1C1] selection:text-white">
      <PortalHeader />
      
      <div className="w-full">
        {view === 'login' ? (
          <LoginPortal onSubmit={handleSubmit} />
        ) : submissionData ? (
          <ResultDisplay data={submissionData} />
        ) : null}
      </div>

      <footer className="mt-auto py-8 text-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">
          Digital India — Power To Empower
        </p>
      </footer>
    </main>
  );
}