import React from 'react';
import { StyledCell } from '../styled/StyledSell';
import { TETROMINOS } from './tetrominus';


const Cell = ({ type }) => {



  return (
    <StyledCell type={type} color={TETROMINOS[type].color} >
      {console.log('render')}
    </StyledCell>
  );
};

Cell.propTypes = {};

export default React.memo(Cell);
