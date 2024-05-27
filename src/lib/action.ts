"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const EmployerSchema = z.object({
   name: z.string().min(6),
   email: z.string().min(6),
   phone: z.string().min(11)
})

export const saveEmployer = async (prevSate: any, formData: FormData) =>{
    const validateFields = EmployerSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if(!validateFields.success){
        return {
            Error: validateFields.error.flatten().fieldErrors,
        };
    }

    try {
        console.log("Sucess!")
    } catch(error) {

        return {message: "Failed to create new employer"};
    }

    revalidatePath("/employer");
    redirect("/employer")
}