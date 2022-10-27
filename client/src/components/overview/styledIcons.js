import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineExpand } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { TiArrowBack } from 'react-icons/ti';


const StyledLeftArrow = styled(AiOutlineArrowLeft)`
  position: absolute;
  left: 90px;
  font-size: 3rem;
  color: #62929E;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`
const StyledRightArrow = styled(AiOutlineArrowRight)`
  position: absolute;
  left: 550px;
  font-size: 3rem;
  color: #62929E;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledExpand = styled(AiOutlineExpand)`
  position: relative;
  top: 25%;
  left: 600px;
  font-size: 2rem;
  color: #62929E;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledUpArrow = styled(IoIosArrowUp)`
  position: absolute;
  top: -28px;
  font-size: 2rem;
  color: #62929E;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledDownArrow = styled(IoIosArrowDown)`
  position: absolute;
  top: 500px;
  font-size: 2rem;
  color: #62929E;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

const StyledLeftArrowExpand = styled(StyledLeftArrow)`
  // left: 450px;
  left: 200px;
`

const StyledRightArrowExpand = styled(StyledRightArrow)`
  // left: 925px;
  // left: 615px;
  left: 700px;
`

const StyledUpArrowExpand = styled(StyledUpArrow)`
  top: -25px;
`

const StyledDownArrowExpand = styled(StyledDownArrow)`
  top: 490px;
  color: #62929E;
`

const StyledBackButton = styled(TiArrowBack)`
  top: -50px;
  position: absolute;
  font-size: 2rem;
  color: #393D3F;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

export {StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand, StyledLeftArrowExpand, StyledRightArrowExpand, StyledUpArrowExpand, StyledDownArrowExpand, StyledBackButton};