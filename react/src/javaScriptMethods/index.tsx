//callBack Function

// call back function call it later;


// TypeScript 

// Quick Reference Table
// Purpose	                       Type
// Function component	         (props: Props) => JSX.Element
// Props with children	         { children: React.ReactNode }
// Click event	                 React.MouseEvent<HTMLButtonElement>
// Change event	                 React.ChangeEvent<HTMLInputElement>
// Form submit	                 React.FormEvent<HTMLFormElement>
// Key down	                     React.KeyboardEvent<HTMLInputElement>
// Setter from useState	         Dispatch<SetStateAction<T>>


 export  const CallBack =(func:(name:string)=>void,name:string)=>{
      func("title"+" "+name);
}



// High order function:- 
export const HighOrderFunc  = (func:()=>void,)=>{
       
      return func;
}


