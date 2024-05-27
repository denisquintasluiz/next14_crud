"use client";

import { saveEmployer } from "@/lib/action";
import { useFormState } from "react-dom";

export default function CreateEmployerPage(){
    const [state, forAction] = useFormState(saveEmployer, null);
    return (
        <div className="max-w-md mx-auto mt-5 bg-white text-black">
           <h1 className="text-2xl text-center mb-2">Add New Employer</h1>
           <div>
            <form action={forAction}>
                <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Full Name
                </label>
                <input type="text" name="name" id="name"
                className="input input-bordered input-accent w-full max-w-xs text-white" 
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
                placeholder="Phone Number..."/>
                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                  </div>
                </div>

                <button className="btn btn-primary mb-10">Save</button>
            </form>
           </div>
        </div>
    )
}