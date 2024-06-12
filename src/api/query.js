import { gql } from "@apollo/client"

export const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      name
      status
      description
    }
  }
`;