import { createContext, useState } from "react";
interface PopupFields{
  value:boolean;
  type:string;
  identifier:{
    folderId:string;
    cardId:string;
  }
}
interface ModalContextType {
  isOpen: PopupFields;
  setIsOpen: (isOpen: PopupFields) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: { children: any }) {
  const initialPopupFields={
    value:false,
    type:'',
    identifier:{
      folderId:"",
      cardId:"",
    }
  }
  const [isOpen, setIsOpen] = useState<PopupFields>({ ...initialPopupFields});
  
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}