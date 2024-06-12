import React from "react"
import { useMutation } from "@apollo/client"
import { ADD_TODO } from "../api/mutation"
import { GET_TODOS } from "../api/query"

const AddButton = () => {
  const [addTodo, { loading: loadingAddTodo, error: errorAddTodo }] = useMutation(ADD_TODO, {
    refetchQueries: [
      GET_TODOS,
      'GetTodos'
    ],
  });

  const onClickAddTodo = () => {
    /*Prevent double click*/
    if (!loadingAddTodo) {
      addTodo({ variables: { name: "Todo", description: "", status: false } })
    }
  }

  return (
    <div className="flex gap-2 mb-4 items-end">
      <button onClick={onClickAddTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add task
      </button>

      {errorAddTodo && <p className="text-red-600">Ops...Something went wrong</p>}
    </div>
  )
}

export default AddButton