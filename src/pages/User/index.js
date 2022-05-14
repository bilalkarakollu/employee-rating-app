import React from 'react'
import { GET_USER } from '../../apollo/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const User = () => {

  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id },
  });

  if (loading) return <Loading/>;
  if (error) return <Error/>;

  const user = data.user;

  return (
    <>
      <Navbar title={`${user.ad} ${user.soyad}`} />
      <div className="container">
        <div className='user-page'>
          <div className="user-header">
            <div className="user-img">
              <img src={user.resim} alt={user.ad} />
            </div>
            <h1>{user.ad} {user.soyad}</h1>
          </div>
          <div className="user-body">
            <ul className='user-desc-list'>
              <li><span>Mail:</span> {user.mail}</li>
              <li><span>Görev:</span> {user.gorev}</li>
              <li><span>Tel. No:</span> {user.telefon}</li>
              <li><span>Adres:</span> {user.city} / {user.address}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default User;
