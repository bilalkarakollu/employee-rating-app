import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
query getAllUsers {
    users {
      ad,
      soyad,
      resim,
      gorev,
      id,
      puan
    } 
}
`;

export const GET_USER = gql`
query getUser($id: ID!) {
    user(id:$id) {
      ad,
      soyad,
      resim,
      gorev,
      mail,
      telefon,
    } 
  }
`;




