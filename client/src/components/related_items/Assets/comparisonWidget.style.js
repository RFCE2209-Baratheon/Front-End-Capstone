import styled from 'styled-components';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { ImCancelCircle } from "react-icons/im";
import { AiFillStar } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';


export const RelatedBlockContainer = styled.div`
background-color: lightgrey;
position: relative;
display: flex;
align-items: center;
width: 90%;
height: 500px;
`;


export const RelatedCardGraphic = styled.div`
display: inline-block;
height: 450px;
width: 300px;
margin-left: 1em;
margin-right: 1em;
justify-content: space-between;
border-radius: 18px;
background: white;
box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
position: relative;
`;

export const ImageOnCard = styled.div`
height: 70%;
width: 100%;
background: url("${(props) => (props.image)}");
background-size: cover;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
`;

export const TextOnCard = styled.div`
grid-area: text;
margin: 0px 0px 0px 10px;
`;

export const LeftArrow = styled(BsFillArrowLeftCircleFill)`
color: black;
font-size: 2em;
left: 0;
position: absolute;
z-index: 10;
&:hover,
&:focus {
  color: moccasin;
}
`;

export const RightArrow = styled(BsFillArrowRightCircleFill)`
color: black;
font-size: 2em;
right: 0;
position: absolute;
&:hover,
&:focus {
  color: moccasin;
}
`;

export const SalePrice = styled.span`
background-color: red;
color: white;
`;

export const PriceStruckthrough = styled.span`
text-decoration: line-through;
`;

export const RelatedActnBttn = styled(AiFillStar)`
color: gold;
font-size: 1.5em;
position: absolute;
right: 10px;
top: 5px;
filter:drop-shadow(0px 0px 5px black);
cursor: pointer;
`;

export const ModalWrapper = styled.div`
width: 35vw;
height: 20vh;
box-shadow: 3px 10px 16px black;
background: white;
display: grid;
grid-template-columns: 1fr;
position: absolute;
z-index: 10;
border-radius: 10px;
bottom: 35em;
`;

export const ModalCloseBtn = styled(ImCancelCircle)`
cursor: pointer;
position: absolute;
z-index: 10;
right: -1em;
top: -1em;
width: 2em;
height: 2em;
`;

export const TableModal = styled.table`
text-align: center;
width: 100%;
table-layout: fixed;
`;

export const TableValues = styled.tr`
color: salmon;
word-wrap: break-word;
`;

export const AddCardBtn = styled(BsPlusLg)`
font-size: 3em;
color: salmon;
`;

export const BtnContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const OuterBtnDiv = styled.div`
position: relative;
height: 450px;
width: 300px;
`;

export const OutfitCardGraphic = styled.span`
display: inline-block;
height: 450px;
width: 300px;
margin-left: 1em;
margin-right: 1em;
justify-content: space-between;
border-radius: 18px;
background: white;
box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
position: relative;
`;

export const OutfitBlockContainer = styled.div`
background-color: lightgrey;
position: relative;
display: flex;
flex-direction: row;
width: 90%;
height: 500px;
`;

export const LeftAOutfit = styled(BsFillArrowLeftCircleFill)`
color: salmon;
font-size: 2em;
position: absolute;
top: 50%;
z-index: 10;
&:hover,
&:focus {
  color: moccasin;
}
`;

export const RightAOutfit = styled(BsFillArrowRightCircleFill)`
color: salmon;
font-size: 2em;
right: 0;
position: absolute;
top: 50%;
z-index: 10;
&:hover,
&:focus {
  color: moccasin;
}
`;