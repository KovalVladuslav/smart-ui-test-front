import Card from "./components/Card"
import AppContainer from "./components/AppContainer"
import { useQuery } from "@apollo/client"
import AddButton from "./components/AddButton"
import { GET_TODOS } from "./api/query"

function App() {
  const { loading, error, data } = useQuery(GET_TODOS)

  if (error) return <p>Error : {error.message}</p>

  return (
    <AppContainer>
      <h1 className="font-bold text-4xl text-slate-700 text-center mb-7">
        {loading? "Loading..." : "TODO LIST"}
      </h1>

      {data && (
        <div className="max-w-screen-lg mx-auto px-5 sm:px-2 md-px-0">
          <AddButton />

          <div className="flex flex-wrap gap-4">
            {data.getTodos?.map((todo) => (
              <Card key={todo.id} {...todo}/>
            ))}
          </div>
        </div>
      )}
    </AppContainer>
  );
}

export default App
