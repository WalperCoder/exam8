import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { id } = useParams();
  return <h1>Quotes in Category: {id}</h1>;
};

export default Category;