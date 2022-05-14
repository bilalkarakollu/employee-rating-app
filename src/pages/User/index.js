import React from 'react'
import { GET_USER } from '../../apollo/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const User = () => {

  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_USER,{
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.user)
  
  return (
    <div>
      user
    </div>
  )
}

export default User
