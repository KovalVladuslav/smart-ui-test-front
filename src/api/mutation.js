import { gql } from "@apollo/client"

export const ADD_TODO = gql`
  mutation AddTodo($name: String!, $status: Boolean!, $description: String) {
    createTodo(name: $name, status: $status, description: $description) {
      id
      name,
      status,
      description
    }
  }
`;
export const EDIT_TODO = gql`
  mutation EditTodo($id: ID!,$name: String, $status: Boolean, $description: String) {
    editTodo(id: $id, name: $name, status: $status, description: $description) {
      id
      name,
      status,
      description
    }
  }
`;
export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;