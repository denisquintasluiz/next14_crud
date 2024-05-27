"use server"

import {prisma} from "./prisma";
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
        await prisma.employer.create({
            data: {
                name: validateFields.data.name,
                email: validateFields.data.email,
                phone: validateFields.data.phone
            }
        })
    } catch(error) {

        return {message: "Failed to create new employer"};
    }

    revalidatePath("/employer");
    redirect("/employer")
}

export const getEmployerList = async (query: string) => {
    try {
        const employers = await prisma.employer.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                phone: true, 
                createdAt: true
            },
            orderBy: {
                createdAt: "desc"
            },
        });
        return employers;
    } catch (error) {
        throw new Error("failed to fetch employers data")
    }
}