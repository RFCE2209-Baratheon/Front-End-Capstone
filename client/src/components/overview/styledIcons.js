import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineExpand } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const StyledLeftArrow = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 50%;
  left: 85px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`
const StyledRightArrow = styled(AiOutlineArrowRight)`
  position: absolute;
  top: 50%;
  left: 450px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledExpand = styled(AiOutlineExpand)`
  position: absolute;
  top: 15%;
  left: 450px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledUpArrow = styled(IoIosArrowUp)`
  position: absolute;
  top: -5%;
  left: 30px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledDownArrow = styled(IoIosArrowDown)`
  position: absolute;
  top: 100%;
  left: 30px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

export {StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand};