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
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <Card className="shadow-none border-t-4 border-t-[#2EC1C1] bg-white">
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-center">
              
              <Label htmlFor="rollNo" className="text-gray-700 text-sm md:text-right font-semibold">Enter your Roll Number :</Label>
              <Input
                id="rollNo"
                name="rollNo"
                required
                className="w-full h-8 border-gray-300"
                value={formData.rollNo}
                onChange={handleChange}
              />

              <Label htmlFor="schoolNo" className="text-gray-700 text-sm md:text-right font-semibold">Enter School No. :</Label>
              <Input
                id="schoolNo"
                name="schoolNo"
                required
                className="w-full h-8 border-gray-300"
                value={formData.schoolNo}
                onChange={handleChange}
              />

              <Label htmlFor="dob" className="text-gray-700 text-sm md:text-right font-semibold">Enter Date of Birth (dd/mm/yyyy) :</Label>
              <Input
                id="dob"
                name="dob"
                placeholder="dd/mm/yyyy"
                required
                className="w-full h-8 border-gray-300"
                value={formData.dob}
                onChange={handleChange}
              />

              <Label htmlFor="admitCardId" className="text-gray-700 text-sm md:text-right font-semibold">Enter Admit Card ID. :</Label>
              <Input
                id="admitCardId"
                name="admitCardId"
                required
                className="w-full h-8 border-gray-300"
                value={formData.admitCardId}
                onChange={handleChange}
              />

              <Label htmlFor="candidateName" className="text-gray-700 text-sm md:text-right font-semibold">Enter Candidate Name :</Label>
              <Input
                id="candidateName"
                name="candidateName"
                required
                className="w-full h-8 border-gray-300"
                value={formData.candidateName}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button 
                type="submit" 
                className="bg-[#2EC1C1] hover:bg-[#25A9A9] text-white font-bold px-8 rounded-none transition-all"
              >
                Submit
              </Button>
              <Button 
                type="button" 
                onClick={handleReset}
                variant="outline" 
                className="border-gray-300 text-gray-700 font-bold px-8 rounded-none hover:bg-gray-50 transition-all"
              >
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <p className="text-xs text-center text-gray-500 mt-8 leading-relaxed">
        Disclaimer: Neither NIC nor CBSE is responsible for any inadvertent error that may have crept in the results being published on NET. The results published on net are for immediate information to the examinees. These cannot be treated as original mark sheets. Original mark sheets have been issued by the Board separately.
      </p>
    </div>
  );
}