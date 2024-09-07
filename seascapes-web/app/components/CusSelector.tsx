import React, { useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";

interface CusSelectorProps<T> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: Array<{ value: T; label: string }>;
  dataType: "textState" | "numberState";
}

const CusSelector: React.FC<CusSelectorProps<any>> = ({ label, value, onChange, options, dataType }) => {
  const handleChange = (selectedValue: string) => {
    const newValue = dataType === 'numberState' ? Number(selectedValue) : selectedValue;
    onChange(newValue);
  };

  return (
    <div>
      <label className="block text-sm font-mediump py-2 uppercase text-gray-700">{label}</label>
      <FormControl>
        <Select onValueChange={handleChange} defaultValue={String(value)}>
          <SelectTrigger className='rounded-none'>
            <SelectValue placeholder={`Select ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={String(option.value)} value={String(option.value)}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
    </div>
  );
};

export default CusSelector;
