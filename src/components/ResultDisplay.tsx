"use client";

import { FormData } from './LoginPortal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ResultDisplayProps {
  data: FormData;
}

export default function ResultDisplay({ data }: ResultDisplayProps) {
  const subjects = [
    { code: '301', name: 'ENGLISH CORE', marks: '99', total: '100', grade: 'A1' },
    { code: '042', name: 'PHYSICS', marks: '98', total: '100', grade: 'A1' },
    { code: '043', name: 'CHEMISTRY', marks: '97', total: '100', grade: 'A1' },
    { code: '041', name: 'MATHEMATICS', marks: '100', total: '100', grade: 'A1' },
    { code: '083', name: 'COMPUTER SCIENCE', marks: '100', total: '100', grade: 'A1' },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="shadow-none border border-gray-200 bg-white rounded-none">
        <CardHeader className="bg-gray-50 border-b p-4">
          <CardTitle className="text-center text-lg text-[#005555] font-bold">
            Senior School Certificate Examination (Class XII) Results 2024
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex gap-2">
                <span className="font-bold w-36">Roll Number:</span>
                <span className="text-[#146CCF] font-semibold">{data.rollNo}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold w-36">School No:</span>
                <span className="text-[#146CCF] font-semibold">{data.schoolNo}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold w-36">Candidate Name:</span>
                <span className="text-[#146CCF] font-semibold uppercase">{data.candidateName}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold w-36">Date of Birth:</span>
                <span className="text-[#146CCF] font-semibold">{data.dob}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold w-36">Admit Card ID:</span>
                <span className="text-[#146CCF] font-semibold uppercase">{data.admitCardId}</span>
              </div>
            </div>

            <div className="mt-8">
              <Table className="border border-gray-200">
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="font-bold text-black border-r">SUB CODE</TableHead>
                    <TableHead className="font-bold text-black border-r">SUBJECT NAME</TableHead>
                    <TableHead className="font-bold text-black border-r">MARKS OBTAINED</TableHead>
                    <TableHead className="font-bold text-black border-r">TOTAL MARKS</TableHead>
                    <TableHead className="font-bold text-black">GRADE</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjects.map((sub, idx) => (
                    <TableRow key={idx} className="hover:bg-transparent">
                      <TableCell className="border-r border-b">{sub.code}</TableCell>
                      <TableCell className="border-r border-b uppercase">{sub.name}</TableCell>
                      <TableCell className="border-r border-b text-center font-bold text-[#146CCF]">{sub.marks}</TableCell>
                      <TableCell className="border-r border-b text-center">{sub.total}</TableCell>
                      <TableCell className="border-b text-center font-bold text-green-600">{sub.grade}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-blue-50/50">
                    <TableCell colSpan={2} className="font-bold text-right border-r">TOTAL PERCENTAGE:</TableCell>
                    <TableCell className="text-center font-bold text-[#146CCF]">98.8%</TableCell>
                    <TableCell colSpan={2} className="font-bold text-center text-green-700">RESULT: PASS (DISTINCTION)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="pt-8 border-t border-dashed mt-8">
              <p className="text-sm font-semibold text-gray-700 mb-2">Abbreviation used:</p>
              <p className="text-xs text-gray-500 italic">
                PR : Practical, IA : Internal Assessment, AB : Absent, EX : Exempted, NA : Not Applicable
              </p>
            </div>

            <div className="mt-12 text-center p-4 bg-yellow-50 border border-yellow-200 rounded">
              <h4 className="text-sm font-bold text-yellow-800 uppercase tracking-widest mb-1">Prank Alert!</h4>
              <p className="text-xs text-yellow-700">
                This result is for entertainment purposes only. You just got pranked by <span className="font-bold italic">Result Ruse</span>!
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-3 text-xs text-accent hover:underline font-semibold"
              >
                Go Back to Login
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; 2024 National Informatics Centre. All rights reserved.
      </div>
    </div>
  );
}