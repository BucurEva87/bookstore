import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
// import style from './Categories.module.scss';

const Categories = () => {
  const dispatch = useDispatch();

  const handleClickEvent = () => {
    dispatch(checkStatus());
  };

  return (
    <button type="button" onClick={handleClickEvent}>Check status</button>
  );
};

export default Categories;
