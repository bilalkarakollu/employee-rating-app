import { qql } from '@apollo/client';

export const GET_ALL_USERS = qql`
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

export const GET_USER = qql`
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




