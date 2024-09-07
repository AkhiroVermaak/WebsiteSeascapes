'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { addDays } from "date-fns";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import CusDatePicker from './CusDatePicker';
import CusSelector from './CusSelector';
import { toast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

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
    .min(1, "At least 1 adult is required.")
    .max(7, "You can select a maximum of 7 adults."), // Add validation for max 7 adults
  children: z
    .number({
      required_error: "Please select the number of children.",
    })
    .min(0, "Number of children cannot be negative.")
    .max(7, "The total number of guests (adults + children) cannot exceed 8."),
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

  // Track number of adults to dynamically limit children selection
  const [adults, setAdults] = useState<number>(1);

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

  // Create dynamic options for children based on selected adults
  const getChildrenOptions = (adults: number) => {
    const maxChildren = 8 - adults;
    const options = [];
    for (let i = 0; i <= maxChildren; i++) {
      options.push({ value: i, label: String(i) });
    }
    return options;
  };

  return (
    <div className="p-6 -mt-[50px]   bg-gray-100 border-gray-200 border-[1px]">
<Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-6 text-gray-600 bg-gray-100  items-end"
      >
        {/* Destination Select */}
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <div className="w-full">
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
            </div>
          )}
        />
        <Separator orientation="vertical" />

        {/* Check-In Date Picker */}
        <FormField
          control={form.control}
          name="arrival"
          render={({ field }) => (
            <div className="w-full">
              <CusDatePicker
                label="CheckIn"
                selectedDate={field.value}
                onSelect={field.onChange}
                hint="Select your check-in date."
              />
            </div>
          )}
        />
        <Separator orientation="vertical" color="#808080"  className="text-gray-700 border-black "/>

        {/* Check-Out Date Picker */}
        <FormField
          control={form.control}
          name="departure"
          render={({ field }) => (
            <div className="w-full">
              <CusDatePicker
                label="Departure"
                selectedDate={field.value}
                onSelect={field.onChange}
                hint="Select your check-out date."
                disabledDates={(date) => {
                  const minDepartureDate = addDays(form.getValues("arrival"), 2);
                  return date < minDepartureDate;
                }}
              />
            </div>
          )}
        />
        <Separator orientation="vertical" />

        {/* Adults Select */}
        <FormField
          control={form.control}
          name="adults"
          render={({ field }) => (
            <div className="w-full">
              <CusSelector
                label="Adults"
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  setAdults(value); // Update the number of adults
                }}
                options={[
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                  { value: 5, label: "5" },
                  { value: 6, label: "6" },
                  { value: 7, label: "7" },
                  { value: 8, label: "8" },
                ]}
                dataType="numberState"
              />
            </div>
          )}
        />
        <Separator orientation="vertical" />

        {/* Children Select */}
        <FormField
          control={form.control}
          name="children"
          render={({ field }) => (
            <div className="w-full">
              <CusSelector
                label="Children"
                value={field.value}
                onChange={field.onChange}
                options={getChildrenOptions(adults)} // Dynamically generate children options
                dataType="numberState"
              />
            </div>
          )}
        />

        <div className="w-full flex justify-center">
          <Button type="submit" className="px-8 py-4 btn-primary">
            Submit
          </Button>
        </div>
      </form>
    </Form>
    </div>
    
  );
}
