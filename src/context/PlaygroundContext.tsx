import { createContext, useState } from "react";
interface PlaygroundContextType{
    folders:any;
    setFolders:any;
}


export const PlaygroundContext = createContext< PlaygroundContextType| null>(null);

export default function PlaygroundProvider({ children }: { children: any }) {
  const [folders,setFolders]=useState({
    ['1']:{
      title:"Folder Title 1",
      items:{
        ["item1"]:{
          title:"Stack Implemenation",
          language:"C++"
        },
        ["item2"]:{
          title:"Queue Implemenation",
          language:"C++"
        },
        ["item3"]:{
          title:"XYZ Implemenation",
          language:"C++"
        },
        
      }
    },
    ["2"]:{
      title:"Folder Title 2",
      items:{
        ["item4"]:{
            title:"1 implementation",
            language:'C++',
        },
        ["item5"]:{
            title:"2 implementation",
            language:'C++',
        },
        ["item6"]:{
            title:"3 implementation",
            language:'C++',
        },
      }
    }
  })
  const makeAvailableGlobally:PlaygroundContextType={
    folders:folders,
    setFolders:setFolders,
  }
  return (
    <PlaygroundContext.Provider value={makeAvailableGlobally}>
      {children}
    </PlaygroundContext.Provider>
  );
}