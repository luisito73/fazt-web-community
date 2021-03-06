/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import CardContributor from '../CardContributor/CardContributor';
import './ListContributor.scss';

const ListContributor = () => {
  return (
    <div className="listContainer">
      <CardContributor />
      <CardContributor />
      <CardContributor />
      <CardContributor />
    </div>
  );
};

export default ListContributor;
