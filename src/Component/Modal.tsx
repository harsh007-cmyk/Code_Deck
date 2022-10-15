import styled from "styled-components";
import {RiCloseFill} from 'react-icons/ri';
import {useContext} from 'react';
import { ModalContext } from "../context/ModalContext";
import { isJsxOpeningElement } from "typescript";
import { PlaygroundContext } from "../context/PlaygroundContext";
const ModalContainer=styled.div`
  background:rgba(0,0,0,0.4);
  width:100%;
  height:100vh;
  position:fixed;
    top:0;
    left:0;
    z-index:2;
    display:flex;
    align-items:center;
    justify-content:center;
  `
  const ModalConent=styled.div`
  background:white;
  width:35%;
  padding:2rem;
  border-radius:10px;
  `
  const CloseButton=styled.button`
    background:transparent;
    outline:0;
    border:0;
    font-size:2rem;
    cursor:pointer;
  `
const Header=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const Input=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.5rem 0;
gap: 2rem;
padding-bottom: 0;
input {
  flex-grow: 1;
  height: 2rem;
}
button {
  background: #241f21;
  height: 2rem;
  color: white;
  padding: 0 2rem;
}
`

const EditCardModal=({setIsOpen,isOpen}:{setIsOpen:any,isOpen:any})=>{
const PlaygroundFeatures=useContext(PlaygroundContext)!;
const folders=PlaygroundFeatures.folders;
console.log(isOpen);
const currentFolder=folders[isOpen.identifier.folderId];
console.log("c",currentFolder.items);
const currentCard=currentFolder.items[isOpen.identifier.cardId]
console.log(currentCard);

return(
    <>
    <Header>
    <h2>
        Edit Card 
    </h2>
    <CloseButton
        onClick={()=>{
          setIsOpen({
            value:false,
            type:"",
            identifier:{
              folderId:"",
              cardId:"",
            }
          })
            
        }}
        >
        <RiCloseFill/>
    </CloseButton>
</Header>
<Input>
        <input type="text" value={currentCard.title}/>
</Input>
</>
  )
}
const AddModal=()=>{
  return <div>Add Modal</div>

}
const AnotherModal=()=>{
  return <div>Another Modal</div>
}

function Modal() {
    const ModalFeatures=useContext(ModalContext)!;
    const setIsOpen=ModalFeatures.setIsOpen;
    const isOpen=ModalFeatures.isOpen;
    return (
    <ModalContainer>
        <ModalConent>
            {ModalFeatures.isOpen.type==='1'&&<EditCardModal setIsOpen={setIsOpen} isOpen={isOpen}/>}
        </ModalConent>
    </ModalContainer>
  )
}

export default Modal