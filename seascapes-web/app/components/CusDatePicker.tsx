import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from 'date-fns';

interface CusDatePickerProps {
  label: string;
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  hint: string;
  showHint: boolean;
  onFocus: () => void;
  onBlur: () => void;
  minDate?: Date;
  disabledDates?: (date: Date) => boolean;
}

const CusDatePicker: React.FC<CusDatePickerProps> = ({
  label,
  selectedDate,
  onSelect,
  hint,
  showHint,
  onFocus,
  onBlur,
  minDate = new Date(),
  disabledDates = (date) => false,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] pl-3 text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            {selectedDate ? format(selectedDate, "PPP") : <span>Select {label}</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelect}
            disabled={disabledDates}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {showHint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
    </div>
  );
};

export default CusDatePicker;
