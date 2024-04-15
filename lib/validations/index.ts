import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Your full name is required!",
  }),
  email: z.string().email({ message: "Email address is required!" }),
  message: z.string().min(2, { message: "You can not send an empty message!" }),
});
