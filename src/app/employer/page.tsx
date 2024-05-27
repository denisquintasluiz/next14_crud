import Link from "next/link";

export default function Employer(){
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
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
            </div>
        </div>
    )
}