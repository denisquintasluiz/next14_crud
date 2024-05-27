"use client"
import { Employer } from "@prisma/client"

import { useFormState } from "react-dom";

import { updateEmployer } from "@/lib/action";

const UpdateForm = ({employer}: {employer: Employer}) => {
    const UpdateEmployerWithid = updateEmployer.bind(null, employer.id) 
    const [state, forAction] = useFormState(UpdateEmployerWithid, null);
    return (
        <div className="">
           <form action={forAction}>
                <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Full Name
                </label>
                <input type="text" name="name" id="name"
                className="input input- bordered input-accent w-full max-w-xs text-white"
                defaultValue={employer.name} 
                placeholder="full Name..."/>
                  <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                  </div>
                </div>
                <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                </label>
                <input type="email" name="email" id="email"
                className="input input-bordered input-accent w-full max-w-xs text-white" 
                defaultValue={employer.email}
                placeholder="Email..."/>
                <div id="email-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
                  </div>
                </div>
                <div className="mb-5">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone"
                className="input input-bordered input-accent w-full max-w-xs text-white" 
                defaultValue={employer.phone}
                placeholder="Phone Number..."/>
                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                  </div>
                </div>
                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                  </div>
                <button className="btn btn-primary mb-10">Update</button>
            </form>
        </div>
    )
}

export default UpdateForm