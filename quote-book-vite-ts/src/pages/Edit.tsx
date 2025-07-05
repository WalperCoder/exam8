import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  return <h1>Edit Quote ID: {id}</h1>;
};

export default Edit;