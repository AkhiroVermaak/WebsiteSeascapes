'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { format, addDays } from "date-fns"; // Import addDays from date-fns
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified destination" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="pringle">Pringle Bay</SelectItem>
                  <SelectItem value="betty">Betty's Bay</SelectItem>
                  <SelectItem value="rooi">Rooi-Els</SelectItem>
                  <SelectItem value="overburg">Overberg</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can explore the different areas in which we operate here:{" "}
                <Link href="/about">About</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Adults Select */}
        <FormField
          control={form.control}
          name="adults"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adults</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(Number(value))} // Convert string to number
                defaultValue={String(field.value)} // Convert number to string for SelectItem
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Number of Adults" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the total number of adults attending the trip.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Check-In Date Picker */}
        <FormField
          control={form.control}
          name="arrival"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Check-In</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Select check-in date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select your check-in date.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Check-Out Date Picker */}
        <FormField
          control={form.control}
          name="departure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Check-Out</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Select check-out date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date <= form.getValues("arrival")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select your check-out date.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}