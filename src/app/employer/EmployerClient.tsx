// src/app/employer/EmployerClient.tsx

"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { DeleteButton } from "@/components/delete";
import { formDate } from "@/lib/utils";
import { getEmployerList } from "@/lib/action";
import Link from "next/link";

interface Employer {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

const EmployerClient = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [employers, setEmployers] = useState<Employer[]>([]);

  useEffect(() => {
    const fetchEmployers = async () => {
      const data = await getEmployerList(query);
      setEmployers(data);
    };

    fetchEmployers();
  }, [query]);

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center bg-white text-black ">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">
          Next.js 14 Crud, Create, Read, Update and Delete
          <br /> Prisma e PostgreSql | TailwindCSS e DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/employer/create" className="btn btn-primary">
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
                <td className="flex justify-center gap-1 py-3">
                  <Link href={`/employer/edit/${rs.id}`} className="btn btn-info">
                    Edit
                  </Link>
                  <DeleteButton id={rs.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployerClient;
