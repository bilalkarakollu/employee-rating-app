import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
query getAllUsers {
    users {
      ad,
      soyad,
      resim,
      gorev,
      id
    } 
}
`;

export const GET_USER = gql`
query getUser {
    user(id:"1") {
      ad,
      soyad,
      resim,
      gorev,
      mail,
      telefon,
    } 
  }
`;




