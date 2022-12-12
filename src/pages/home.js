import React, { useState } from 'react';
import { Loginform } from '../components/Loginform';

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
  };

  return (
    <Loginform/>
  );
};

export {Login};