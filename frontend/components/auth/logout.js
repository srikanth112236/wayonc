import React from 'react';
import axios from 'axios';

const LogOut = () => {
  const logout = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`)
      .then((res) => {
        console.log(res);
        if (res.data.Status === 'Success') {
          window.location.reload(true);
        } else {
          alert('failed to logout');
        }
      })
      .catch((e) => {
        console.log('logout axios error', e);
      });
  };

  return (
    <>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default LogOut;
