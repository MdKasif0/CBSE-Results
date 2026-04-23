"use client";

import { useState, useEffect } from 'react';
import { FormData } from './LoginPortal';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface ResultDisplayProps {
  data: FormData;
}

interface Subject {
  code: string;
  name: string;
  theory: string;
  prac: string;
  marks: string;
  grade: string;
  isRed?: boolean;
}

export default function ResultDisplay({ data }: ResultDisplayProps) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    const getGrade = (total: number) => {
      if (total >= 91) return 'A1';
      if (total >= 81) return 'A2';
      if (total >= 71) return 'B1';
      if (total >= 61) return 'B2';
      if (total >= 51) return 'C1';
      if (total >= 41) return 'C2';
      if (total >= 33) return 'D';
      return 'E';
    };

    const generateResult = (): Subject[] => {
      const engTheory = getRandom(50, 60);
      const engTotal = engTheory + 20;

      const phyTheory = getRandom(5, 10);
      const phyPrac = getRandom(20, 25);
      const phyTotal = phyTheory + phyPrac;

      const chemTheory = getRandom(30, 50);
      const chemTotal = chemTheory + 30;

      const mathTheory = getRandom(30, 40);
      const mathPrac = getRandom(20, 25);
      const mathTotal = mathTheory + mathPrac;

      const musicTheory = getRandom(10, 20);
      const musicPrac = getRandom(60, 70);
      const musicTotal = musicTheory + musicPrac;

      return [
        { code: '301', name: 'ENGLISH CORE', theory: String(engTheory).padStart(3, '0'), prac: '020', marks: String(engTotal).padStart(3, '0'), grade: getGrade(engTotal) },
        { code: '042', name: 'PHYSICS', theory: String(phyTheory).padStart(3, '0'), prac: String(phyPrac).padStart(3, '0'), marks: String(phyTotal).padStart(3, '0'), grade: getGrade(phyTotal), isRed: true },
        { code: '043', name: 'CHEMISTRY', theory: String(chemTheory).padStart(3, '0'), prac: '030', marks: String(chemTotal).padStart(3, '0'), grade: getGrade(chemTotal) },
        { code: '041', name: 'MATHEMATICS', theory: String(mathTheory).padStart(3, '0'), prac: String(mathPrac).padStart(3, '0'), marks: String(mathTotal).padStart(3, '0'), grade: getGrade(mathTotal) },
        { code: '031', name: 'MUSIC', theory: String(musicTheory).padStart(3, '0'), prac: String(musicPrac).padStart(3, '0'), marks: String(musicTotal).padStart(3, '0'), grade: getGrade(musicTotal) },
      ];
    };

    setSubjects(generateResult());
  }, []);

  if (!isMounted) return null;

  return (
    <div className="max-w-5xl mx-auto mt-4 px-4 pb-12 font-serif text-black">
      <div className="flex justify-between items-center mb-4 no-print">
        <button 
          onClick={() => window.print()}
          className="text-[13px] text-blue-800 hover:underline font-bold bg-white border border-gray-300 px-3 py-1 shadow-sm transition-colors hover:bg-gray-50"
        >
          Print this page
        </button>
        <span className="text-xs text-gray-500 font-bold italic">http://cbseresults.nic.in</span>
      </div>

      <div className="bg-white p-6 md:p-10 border border-gray-300 shadow-sm mb-6 container-print">
        <div className="text-center mb-8">
          <h4 className="text-[#000080] font-bold text-lg uppercase mb-1">Senior School Certificate Examination (Class XII) Results 2026</h4>
        </div>

        <div className="grid grid-cols-1 gap-1 mb-8 text-[15px]">
          <div className="flex border-b border-gray-100 py-1.5">
            <span className="w-48 font-bold text-gray-700">Roll No:</span>
            <span className="font-bold">{data.rollNo}</span>
          </div>
          <div className="flex border-b border-gray-100 py-1.5">
            <span className="w-48 font-bold text-gray-700">Candidate Name:</span>
            <span className="font-bold uppercase">{data.candidateName}</span>
          </div>
          <div className="flex border-b border-gray-100 py-1.5">
            <span className="w-48 font-bold text-gray-700">Date of Birth:</span>
            <span className="font-bold">{data.dob}</span>
          </div>
          <div className="flex border-b border-gray-100 py-1.5">
            <span className="w-48 font-bold text-gray-700">School's Name:</span>
            <span className="font-bold uppercase">{data.schoolName}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table className="border-collapse border border-gray-400 w-full text-[14px]">
            <TableHeader>
              <TableRow className="bg-[#00CCCC] hover:bg-[#00CCCC] border-b border-gray-400">
                <TableHead className="text-white font-bold border-r border-gray-400 text-center uppercase h-10">Sub Code</TableHead>
                <TableHead className="text-white font-bold border-r border-gray-400 uppercase h-10">Sub Name</TableHead>
                <TableHead className="text-white font-bold border-r border-gray-400 text-center uppercase h-10">Theory</TableHead>
                <TableHead className="text-white font-bold border-r border-gray-400 text-center uppercase h-10">Prac/IA</TableHead>
                <TableHead className="text-white font-bold border-r border-gray-400 text-center uppercase h-10">Marks</TableHead>
                <TableHead className="text-white font-bold text-center uppercase h-10">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((sub, idx) => (
                <TableRow key={idx} className={cn("hover:bg-transparent border-b border-gray-400", idx % 2 === 1 ? "bg-[#F9F9F9]" : "bg-white")}>
                  <TableCell className="border-r border-gray-400 py-2.5 text-center font-bold">{sub.code}</TableCell>
                  <TableCell className="border-r border-gray-400 py-2.5 font-bold uppercase">{sub.name}</TableCell>
                  <TableCell className={cn("border-r border-gray-400 py-2.5 text-center font-bold", sub.isRed && "text-red-600")}>{sub.theory}</TableCell>
                  <TableCell className="border-r border-gray-400 py-2.5 text-center font-bold">{sub.prac}</TableCell>
                  <TableCell className={cn("border-r border-gray-400 py-2.5 text-center font-bold", sub.isRed ? "text-red-600" : "text-black")}>{sub.marks}</TableCell>
                  <TableCell className={cn("py-2.5 text-center font-bold", sub.isRed && "text-red-600")}>{sub.grade}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-[#003366] hover:bg-[#003366]">
                <TableCell colSpan={6} className="py-3 text-center font-bold text-white text-base">
                  Result : FAIL
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-[12px] text-gray-600 leading-tight">
          <p className="font-bold mb-1">Abbreviation used:</p>
          <p>PR : Practical, IA : Internal Assessment, PROJ. : Project, AB : Absent, EX : Exempted, NA : Not Applicable, RT : Repeat in Theory, RP : Repeat in Practical</p>
        </div>
      </div>

      <div className="text-center space-y-2 mt-8 no-print">
        <p className="text-sm font-bold text-gray-700">
          Brought to you by National Informatics Centre
        </p>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          Digital India — Power To Empower
        </p>
      </div>
    </div>
  );
}
