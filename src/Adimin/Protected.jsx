import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SelectUserId } from '../Redux/ItemSlice';

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  const isSignIn = useSelector(SelectUserId);

  useEffect(() => {
    if (!isSignIn) {
      navigate("/userlogin");
    }
  }, [isSignIn, navigate]);

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
