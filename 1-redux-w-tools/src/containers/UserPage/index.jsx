import Axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import { makeSelectUser } from './selectors';
import { setUser } from './action';
import styled from 'styled-components';

const UserContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.div`
  width: 5em;
  img {
    width: 100%;
    height: 7em;
  }
`;

const UserName = styled.h3`
    font-size: 20px
   color: #000;
   margin: 0;
`;

const UserEmail = styled.h3`
    font-size: 20px
   color: #000;
   margin: 0;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({
  user,
}));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});
export const UserPage = (props) => {
  const { setUser } = actionDispatch(useDispatch());

  const { user } = useSelector(stateSelector);
  const { userid } = useParams();

  const fetchUser = async (id) => {
    const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch(
      (err) => console.log('Err:', err)
    );

    if (response) setUser(response.data.data);
  };

  useEffect(() => {
    if (userid && userid !== '') fetchUser(userid);
  }, [userid]);

  if (!user) return <div>Loading...</div>;

  return (
    <UserContainers>
      <UserWrapper>
        <UserImage>
          <img src={user.avatar} alt='' />
        </UserImage>
        <UserName> {user.name}</UserName>
        <UserEmail> {user.email}</UserEmail>
      </UserWrapper>
    </UserContainers>
  );
};
