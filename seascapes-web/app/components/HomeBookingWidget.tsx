'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { addDays } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import CusDatePicker from './CusDatePicker';
import CusSelector from './CusSelector';
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

// Define schema using zod
const formSchema = z.object({
  destination: z
    .string({
      required_error: "Please select a destination.",
    })
    .min(1, "Please select a destination."),
  arrival: z.date({
    required_error: "An arrival date must be selected.",
  }),
  departure: z.date({
    required_error: "A departure date must be selected.",
  }),
  adults: z
    .number({
      required_error: "Please select the number of adults.",
    })
    .min(1, "At least 1 adult is required."),
  children: z
    .number({
      required_error: "Please select the number of children.",
    })
    .min(0, "Number of children cannot be negative."),
});

export function HomeBookingWidget() {
  // Get today's date and two days from today
  const today = new Date();
  const twoDaysFromToday = addDays(today, 2);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: 'overburg', // Set the default destination to "Overburg"
      arrival: today, // Set default arrival to today
      departure: twoDaysFromToday, // Set default departure to two days from today
      adults: 1,
      children: 0,
    },
  });

  // States to manage focus hints
  const [showCheckInHint, setShowCheckInHint] = useState(false);
  const [showCheckOutHint, setShowCheckOutHint] = useState(false);

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 bg-gray-50 p-4 justify-between items-center">
        
        {/* Destination Select */}
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <CusSelector
              label="Destination"
              value={field.value}
              onChange={field.onChange}
              options={[
                { value: "pringle", label: "Pringle Bay" },
                { value: "betty", label: "Betty's Bay" },
                { value: "rooi", label: "Rooi-Els" },
                { value: "overburg", label: "Overberg" },
              ]}
              dataType="textState"
            />
          )}
        />

        {/* Adults Select */}
        <FormField
          control={form.control}
          name="adults"
          render={({ field }) => (
            <CusSelector
              label="Adults"
              value={field.value}
              onChange={field.onChange}
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ]}
              dataType="numberState"
            />
          )}
        />

        {/* Check-In Date Picker */}
        <FormField
          control={form.control}
          name="arrival"
          render={({ field }) => (
            <CusDatePicker
              label="Check-In"
              selectedDate={field.value}
              onSelect={field.onChange}
              hint="Select your check-in date."
              showHint={showCheckInHint}
              onFocus={() => setShowCheckInHint(true)}
              onBlur={() => setShowCheckInHint(false)}
            />
          )}
        />

        {/* Check-Out Date Picker */}
        <FormField
          control={form.control}
          name="departure"
          render={({ field }) => (
            <CusDatePicker
              label="Check-Out"
              selectedDate={field.value}
              onSelect={field.onChange}
              hint="Select your check-out date."
              showHint={showCheckOutHint}
              onFocus={() => setShowCheckOutHint(true)}
              onBlur={() => setShowCheckOutHint(false)}
              disabledDates={(date) => date <= form.getValues("arrival")}
            />
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
