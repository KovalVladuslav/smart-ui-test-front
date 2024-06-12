import React, { useEffect, useState } from "react"
import DeleteIcon from "./DeleteIcon"
import { useDebounce, useDebouncedCallback } from "use-debounce"
import { useMutation } from "@apollo/client"
import { DELETE_TODO, EDIT_TODO } from "../api/mutation"
import { GET_TODOS } from "../api/query"

const Card = ({ name, status, description, id }) => {
  const [isDone, setIsDone] = useState(status)

  const [editTodo] = useMutation(EDIT_TODO, {
    refetchQueries: [
      GET_TODOS,
      'GetTodos'
    ],
  });
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [
      GET_TODOS,
      'GetTodos'
    ],
  });

  const handleDeleteTodo = () => {
    deleteTodo({ variables: { id } })
  }

  const debouncedInput = useDebouncedCallback(
    (event) => {
      const { name, value } = event.target

      editTodo({ variables: { id, [name]: value } })
    },
    1000
  );

  /*We controlled checked for correct disabled the input if done todo */
  const [value] = useDebounce(isDone, 1000);

  useEffect(() => {
    if (isDone !== status) {
      editTodo({ variables: { id, status: value } })
    }

  }, [value])

  return (
    <div className="card flex gap-2 bg-white shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg rounded p-2 md:p-5">
      <input checked={isDone} onChange={(e) => setIsDone(e.target.checked)} className="size-5 mt-[12px]" type="checkbox" />

      <div className="shrink">
        <input
          defaultValue={name}
          className={`${isDone? 'line-through text-slate-500': 'cursor-pointer'} text-lg font-semibold appearance-none w-full bg-white rounded py-1 px-2 md:py-2 md:px-3 focus:outline-none focus:cursor-auto focus:bg-blue-100`}
          type="text"
          placeholder="Title todo"
          name="name"
          onChange={debouncedInput}
          disabled={isDone}
        />

        <textarea
          className={`${isDone? 'line-through text-slate-500': 'cursor-pointer'} text-gray-950 resize-none appearance-none w-full bg-white rounded py-1 px-2 md:py-2 md:px-3 focus:outline-none focus:cursor-auto focus:bg-blue-100`}
          placeholder="Description"
          name="description"
          rows={1}
          defaultValue={description}
          onChange={debouncedInput}
          disabled={isDone}
        />
      </div>

      <button className="appearance-none flex ml-auto" onClick={handleDeleteTodo}>
        <DeleteIcon  />
      </button>
    </div>
  )
}

export default Card