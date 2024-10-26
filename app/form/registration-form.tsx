"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registrationFormSchema = z.object({
  fullName: z
    .string({ required_error: "Name is required." })
    .min(3, { message: "Name must be atleast 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z
    .string({ required_error: "Phone number is required." })
    .length(10, { message: "Phone number must be 10 digits." }),
  title: z
    .string({ required_error: "Title is required." })
    .min(2, { message: "Name must be atleast 2 characters." }),
  organization: z
    .string({ required_error: "Organization is required." })
    .min(2, { message: "Organization must be atleast 2 characters." }),
  areaOfInterest: z.enum([
    "Technology",
    "Entrepreneurship",
    "Innovation",
    "Higher Studies",
    "Content Creation",
    "Management",
  ]),
  expectations: z.string().max(160).min(4),
  paymentId: z
    .string()
    .length(12, "Invalid UTR No. / UPI Ref")
    .regex(/^\d+$/, "Invalid UTR No. / UPI Ref"),
});

const RegistrationForm = () => {
  const form = useForm({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {},
    mode: "onChange",
  });
  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Please enter your full name. This will go on your certificates.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Please enter your email address. This will be used to send you
                updates.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Please enter your phone number in 10 digits
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Please enter your title (founder/employee/student/faculty etc.)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default RegistrationForm;
