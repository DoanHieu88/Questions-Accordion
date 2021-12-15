import React,{useState} from 'react';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function SingleQuestion({title,info}) {
    const [show, setShow] = useState(false)

    return (
       <article className='question'>
           <header>
               <h4>{title}</h4>
                <button onClick={()=>setShow(!show)}>
                    {show ? '-' : '+' }
                </button>
           </header>
           {show && <p>{info}</p>}
       </article>
    )
}
