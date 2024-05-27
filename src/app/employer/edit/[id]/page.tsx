import UpdateForm from "@/components/editform";
import { getEmployerById } from "@/lib/action";

import { notFound } from "next/navigation";

const UpdateEmployerPage = async ({params}: {params: {id: string}}) => {
    const id = params.id;
    const employer = await getEmployerById(id);

    if(!employer) {
        notFound()
    }

    return (
        <div className="max-w-md mx-auto mt-5 text-black flex flex-col items-center justify-center">
            <h1 className="text-2xl text-center mb-2">
                Update Employer
            </h1>
            <UpdateForm employer={employer}/>
        </div>
    )
}

export default UpdateEmployerPage