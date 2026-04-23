"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface LoginPortalProps {
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  rollNo: string;
  schoolNo: string;
  dob: string;
  admitCardId: string;
  candidateName: string;
}

export default function LoginPortal({ onSubmit }: LoginPortalProps) {
  const [formData, setFormData] = useState<FormData>({
    rollNo: '',
    schoolNo: '',
    dob: '',
    admitCardId: '',
    candidateName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      rollNo: '',
      schoolNo: '',
      dob: '',
      admitCardId: '',
      candidateName: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 font-serif">
      <Card className="shadow-md border-t-8 border-t-[#009999] bg-white rounded-none">
        <CardContent className="pt-10 px-8 pb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 items-center">
              
              <Label htmlFor="rollNo" className="text-gray-800 text-[15px] md:text-right font-bold">Enter your Roll Number :</Label>
              <Input
                id="rollNo"
                name="rollNo"
                required
                type="text"
                inputMode="numeric"
                pattern="\d{8}"
                title="Roll Number must be exactly 8 digits"
                maxLength={8}
                className="w-full h-8 border-gray-400 rounded-none focus:ring-[#009999] font-bold"
                value={formData.rollNo}
                onChange={handleChange}
              />

              <Label htmlFor="schoolNo" className="text-gray-800 text-[15px] md:text-right font-bold">Enter School No. :</Label>
              <Input
                id="schoolNo"
                name="schoolNo"
                required
                className="w-full h-8 border-gray-400 rounded-none focus:ring-[#009999] font-bold"
                value={formData.schoolNo}
                onChange={handleChange}
              />

              <Label htmlFor="dob" className="text-gray-800 text-[15px] md:text-right font-bold">Enter Date of Birth :</Label>
              <Input
                id="dob"
                name="dob"
                placeholder="dd/mm/yyyy"
                required
                pattern="\d{2}/\d{2}/\d{4}"
                title="Date of Birth must be in dd/mm/yyyy format"
                className="w-full h-8 border-gray-400 rounded-none focus:ring-[#009999] font-bold"
                value={formData.dob}
                onChange={handleChange}
              />

              <Label htmlFor="admitCardId" className="text-gray-800 text-[15px] md:text-right font-bold">Enter Admit Card ID. :</Label>
              <Input
                id="admitCardId"
                name="admitCardId"
                required
                className="w-full h-8 border-gray-400 rounded-none focus:ring-[#009999] font-bold"
                value={formData.admitCardId}
                onChange={handleChange}
              />

              <Label htmlFor="candidateName" className="text-gray-800 text-[15px] md:text-right font-bold">Enter Candidate Name :</Label>
              <Input
                id="candidateName"
                name="candidateName"
                required
                className="w-full h-8 border-gray-400 rounded-none focus:ring-[#009999] font-bold"
                value={formData.candidateName}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center gap-6 pt-6">
              <Button 
                type="submit" 
                className="bg-[#009999] hover:bg-[#007777] text-white font-bold px-10 rounded-none transition-all shadow-sm h-9"
              >
                Submit
              </Button>
              <Button 
                type="button" 
                onClick={handleReset}
                variant="outline" 
                className="border-gray-400 text-gray-700 font-bold px-10 rounded-none hover:bg-gray-50 transition-all h-9"
              >
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="mt-10 bg-white p-4 border border-gray-300 shadow-sm">
        <p className="text-[12px] text-justify text-gray-600 leading-relaxed italic">
          Disclaimer: Neither NIC nor CBSE is responsible for any inadvertent error that may have crept in the results being published on NET. The results published on net are for immediate information to the examinees. These cannot be treated as original mark sheets. Original mark sheets have been issued by the Board separately.
        </p>
      </div>
    </div>
  );
}
