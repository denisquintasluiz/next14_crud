import { deleteEmployer } from "@/lib/action"

export const DeleteButton = ({id}: {id: string}) => {
    const DeleteEmployerWithId = deleteEmployer.bind(null, id)
    return (
        <form action={DeleteEmployerWithId}>
            <button  className="btn btn-error">
                Delete
            </button>
        </form>
    )
}