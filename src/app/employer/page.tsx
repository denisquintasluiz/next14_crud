import Link from "next/link";
import {getEmployerList} from "@/lib/action"
import {formDate} from "@/lib/utils"

const Employer = async({query}:{query: string;})=>{
  const employers = await getEmployerList(query)
    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center bg-white text-black ">
            <div className="flex items-center justify-between gap-1 mb-5">
                <h1 className="text-4xl font-bold">
                    Next.js 14 Crud, Create, Read, Update and Delete
                    <br/> Prisma e PostgreSql | TailwindCSS e DaisyUI
                </h1>
            </div>
            <div className="overflow-x-auto">
                <div className="mb-2 w-full text-right">
                    <Link 
                      href="/employer/create"
                      className="btn btn-primary"
                    >
                        Create
                    </Link>
                </div>
                <table className="table table-zebra">
    <thead>
      <tr>
        <th className="py-3 px-6 text-black">#</th>
        <th className="py-3 px-6 text-black">Name</th>
        <th className="py-3 px-6 text-black">Job</th>
        <th className="py-3 px-6 text-black">Phone Number</th>
        <th className="py-3 px-6 text-black">Created At</th>
        <th className="py-3 px-6 text-black">Actions</th>
      </tr>
    </thead>
    <tbody>
      {employers.map((rs, index) => (
        <tr key={rs.id} className="bg-white border-b">
        <th className="py-3 px-6">{index + 1}</th>
        <td className="py-3 px-6">{rs.name}</td>
        <td className="py-3 px-6">{rs.email}</td>
        <td className="py-3 px-6">{rs.phone}</td>
        <td className="py-3 px-6">{formDate(rs.createdAt.toString())}</td>
        <td className="flex justify-center gap-1 py-3">Edit | Delete</td>
      </tr>
      ))}
    </tbody>
  </table>
            </div>
        </div>
    )
}

export default Employer