import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const Line=styled(Link)`
text-decoration: none;
color: white;
@media (max-width: 768px) { 
text-decoration: none;
color: black;
}
`;

export const NavigationBar= styled.nav`
display:flex;
justify-content: space-around;
padding: 15px;
background-color: lightskyblue;
color: white;
 @media (max-width: 768px) { 
   
    justify-content: flex-end;
 }

`;
export const Hamburger= styled.nav`
  display: none;
    @media (max-width: 768px) {
        display: block;
        display: flex;
        justify-content: flex-end;
}

`;



export const Navitems =styled.div`
display: flex;
&:hover{border-bottom:1px solid white;};

`;

export const Sidecontent =styled.div`
display: flex;
width: 7%;
justify-content: space-between;
/* gap:1rem; */
/* border:1px solid red; */
 @media (max-width: 768px) {
    display: none;}
`;

export const Logo =styled.img`
width: 15px;
height: 20px;
/* padding: 1rem; */
font-size: 12px;

`;
export const Para=styled.p`
margin: 0;
`;

export const NavWrapper =styled.div`
width: 50%;
font-size: 14px;
display: flex;
justify-content: space-between;
 @media (max-width: 768px) {
    display: none;}

`;

export const Ham=styled.div`
/* display: block; */
/* @media (max-width: 768px) {
    display: block;} */
display: flex;
justify-content: right;
border: none;
/* background-color: white; */
align-content: center;
background-color: #CACACA;
/* display: none; */
padding: 8px;
font-size: 14px;

`;


export const HamContent=styled.div`


`;

export const Icon=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* border: 1px solid black; */

width: 28%;
position: absolute;
z-index: 1;
top: 7%;
/* right: 0; */
left: 72%;

`;