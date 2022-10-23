import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineExpand } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const StyledLeftArrow = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 325px;
  left: 90px;
  font-size: 2rem;
  color: red;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`
const StyledRightArrow = styled(AiOutlineArrowRight)`
  position: absolute;
  top: 325px;
  left: 550px;
  font-size: 2rem;
  color: red;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledExpand = styled(AiOutlineExpand)`
  position: absolute;
  top: 25%;
  left: 450px;
  font-size: 2rem;
  color: red;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledUpArrow = styled(IoIosArrowUp)`
  position: absolute;
  top: 10px;
  left: 30px;
  font-size: 2rem;
  color: red;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledDownArrow = styled(IoIosArrowDown)`
  position: absolute;
  top: 580px;
  left: 30px;
  font-size: 2rem;
  color: red;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledLeftArrowExpand = styled(StyledLeftArrow)`
  // left: 515px;
`

const StyledRightArrowExpand = styled(StyledRightArrow)`
  left: 615px;
`

const StyledUpArrowExpand = styled(StyledUpArrow)`
  left: 430px;
`

const StyledDownArrowExpand = styled(StyledDownArrow)`
  left: 430px;
`

export {StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand, StyledLeftArrowExpand, StyledRightArrowExpand, StyledUpArrowExpand, StyledDownArrowExpand};