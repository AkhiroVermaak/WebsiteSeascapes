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
  hint?: string; // Optional
  showHint?: boolean; // Optional
  onFocus?: () => void; // Optional
  onBlur?: () => void; // Optional
  minDate?: Date; // Optional
  disabledDates?: (date: Date) => boolean; // Optional
}

const CusDatePicker: React.FC<CusDatePickerProps> = ({
  label,
  selectedDate,
  onSelect,
  hint = "", // Default empty string for hint
  showHint = false, // Default to false if not provided
  onFocus = () => {}, // Default no-op function
  onBlur = () => {}, // Default no-op function
  minDate = new Date(), // Default to current date
  disabledDates = () => false, // Default no-op function
}) => {
  return (
    <div>
      <label className="block text-sm py-2 uppercase font-medium text-gray-700">{label}</label>
      <Popover>
        <PopoverTrigger className="rounded-none bg-transparent" asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px]  text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            {selectedDate ? format(selectedDate, "PPP") : <span>Select {label}</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto rounded-none p-0" align="start">
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
