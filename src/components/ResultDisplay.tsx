"use client";

import { FormData } from './LoginPortal';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ResultDisplayProps {
  data: FormData;
}

export default function ResultDisplay({ data }: ResultDisplayProps) {
  const subjects = [
    { code: '301', name: 'ENGLISH CORE', theory: '079', prac: '020', marks: '099', grade: 'A1' },
    { code: '042', name: 'PHYSICS', theory: '068', prac: '030', marks: '098', grade: 'A1' },
    { code: '043', name: 'CHEMISTRY', theory: '067', prac: '030', marks: '097', grade: 'A1' },
    { code: '041', name: 'MATHEMATICS', theory: '080', prac: '020', marks: '100', grade: 'A1' },
    { code: '083', name: 'COMPUTER SCIENCE', theory: '070', prac: '030', marks: '100', grade: 'A1' },
  ];

  const workSubjects = [
    { code: '500', name: 'WORK EXPERIENCE', grade: 'A1' },
    { code: '502', name: 'PHY & HEALTH EDUCA', grade: 'A1' },
    { code: '503', name: 'GENERAL STUDIES', grade: 'A1' },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-6 space-y-1">
        <h4 className="text-[#000080] font-bold text-sm md:text-base uppercase">Examination Results</h4>
        <h3 className="text-[#000080] font-bold text-base md:text-lg">
          Senior School Certificate Examination (Class XII) Results 2024
        </h3>
      </div>

      <Card className="shadow-none border-none bg-transparent rounded-none">
        <CardContent className="p-0">
          <div className="space-y-6">
            {/* Candidate Info Block */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-1 text-sm md:text-base font-medium">
              <div className="flex">
                <span className="w-40 md:w-48 text-gray-800">Roll No:</span>
                <span className="text-black font-bold">{data.rollNo}</span>
              </div>
              <div className="flex">
                <span className="w-40 md:w-48 text-gray-800">Candidate Name:</span>
                <span className="text-black font-bold uppercase">{data.candidateName}</span>
              </div>
              <div className="flex">
                <span className="w-40 md:w-48 text-gray-800">Mother's Name:</span>
                <span className="text-black font-bold uppercase">SAVITA DEVI</span>
              </div>
              <div className="flex">
                <span className="w-40 md:w-48 text-gray-800">Father's Name:</span>
                <span className="text-black font-bold uppercase">RAJESH KUMAR</span>
              </div>
              <div className="flex">
                <span className="w-40 md:w-48 text-gray-800">School's Name:</span>
                <span className="text-black font-bold uppercase">GOVT SR SEC SCHOOL</span>
              </div>
            </div>

            {/* Marks Table */}
            <div className="overflow-x-auto">
              <Table className="border border-[#000080]/30 min-w-[600px]">
                <TableHeader className="bg-[#000080]">
                  <TableRow className="hover:bg-transparent border-b border-[#000080]">
                    <TableHead className="text-white font-bold border-r border-white/20 h-10 text-center text-xs">SUB CODE</TableHead>
                    <TableHead className="text-white font-bold border-r border-white/20 h-10 text-xs">SUB NAME</TableHead>
                    <TableHead className="text-white font-bold border-r border-white/20 h-10 text-center text-xs">THEORY</TableHead>
                    <TableHead className="text-white font-bold border-r border-white/20 h-10 text-center text-xs">PRAC./IA/PROJ.</TableHead>
                    <TableHead className="text-white font-bold border-r border-white/20 h-10 text-center text-xs">MARKS</TableHead>
                    <TableHead className="text-white font-bold h-10 text-center text-xs">POSITIONAL GRADE</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-white">
                  {subjects.map((sub, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 border-b border-gray-200">
                      <TableCell className="border-r border-gray-200 py-2 text-center text-xs font-medium">{sub.code}</TableCell>
                      <TableCell className="border-r border-gray-200 py-2 text-xs font-medium uppercase">{sub.name}</TableCell>
                      <TableCell className="border-r border-gray-200 py-2 text-center text-xs">{sub.theory}</TableCell>
                      <TableCell className="border-r border-gray-200 py-2 text-center text-xs">{sub.prac}</TableCell>
                      <TableCell className="border-r border-gray-200 py-2 text-center text-xs font-bold text-[#000080]">{sub.marks}</TableCell>
                      <TableCell className="py-2 text-center text-xs font-bold">{sub.grade}</TableCell>
                    </TableRow>
                  ))}
                  
                  {workSubjects.map((sub, idx) => (
                    <TableRow key={`work-${idx}`} className="hover:bg-gray-50 border-b border-gray-200">
                      <TableCell className="border-r border-gray-200 py-2 text-center text-xs font-medium">{sub.code}</TableCell>
                      <TableCell className="border-r border-gray-200 py-2 text-xs font-medium uppercase">{sub.name}</TableCell>
                      <TableCell className="border-r border-gray-200 py-2 text-center text-xs">—</TableCell>
                      <TableCell className="border-r border-gray-200 py-2 text-center text-xs">—</TableCell>
                      <TableCell className="border-r border-gray-200 py-2 text-center text-xs">—</TableCell>
                      <TableCell className="py-2 text-center text-xs font-bold">{sub.grade}</TableCell>
                    </TableRow>
                  ))}

                  {/* Additional Subject Row */}
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableCell colSpan={6} className="py-1 text-[10px] font-bold text-gray-600 px-4">Additional Subject</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                    <TableCell className="border-r border-gray-200 py-2 text-center text-xs font-medium">041</TableCell>
                    <TableCell className="border-r border-gray-200 py-2 text-xs font-medium uppercase">MATHEMATICS</TableCell>
                    <TableCell className="border-r border-gray-200 py-2 text-center text-xs">080</TableCell>
                    <TableCell className="border-r border-gray-200 py-2 text-center text-xs">020</TableCell>
                    <TableCell className="border-r border-gray-200 py-2 text-center text-xs font-bold text-[#000080]">100</TableCell>
                    <TableCell className="py-2 text-center text-xs font-bold">A1</TableCell>
                  </TableRow>

                  {/* Result Footer Row */}
                  <TableRow className="bg-[#000080] border-t-2 border-[#000080]">
                    <TableCell colSpan={6} className="py-2 text-center font-bold text-white text-sm">
                      Result : PASS
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="pt-4 mt-4">
              <p className="text-xs font-bold text-gray-700 mb-1">Abbreviation used:</p>
              <p className="text-[10px] text-gray-500 leading-tight">
                PR : Practical, IA : Internal Assessment, PROJ. : Project, AB : Absent, EX : Exempted, NA : Not Applicable, RT : Repeat in Theory, RP : Repeat in Practical
              </p>
            </div>

            {/* Print and Back Actions */}
            <div className="flex flex-col items-center gap-4 mt-12 no-print">
              <button 
                onClick={() => window.print()}
                className="text-xs text-blue-600 hover:underline font-semibold"
              >
                Print this page
              </button>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded w-full max-w-md text-center">
                <h4 className="text-sm font-bold text-yellow-800 uppercase tracking-widest mb-1">Prank Successful!</h4>
                <p className="text-xs text-yellow-700 mb-3">
                  This mock result page is for entertainment purposes. You just got pranked!
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-white border border-gray-300 text-gray-700 px-4 py-1 text-xs font-bold hover:bg-gray-50 shadow-sm"
                >
                  Back to Login
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center text-[10px] text-gray-400 uppercase tracking-wider">
        © 2024 National Informatics Centre. All rights reserved.
      </div>
    </div>
  );
}
