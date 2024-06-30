
import './collapse.scss'
import { useState } from 'react'

const Collapse = ({ title, description }) => {
   const [open, setOpen] = useState(false);
   const isImageUrl = typeof description === 'string' && description.startsWith('/');
   return (
      <div>
         <div className="collapse-item" >
            <h3>{title}</h3>
            <svg onClick={() => setOpen(!open)} className={'arrow' + (open ? ' active' : '')} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
               <path d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z" fill="white" />
            </svg>
         </div>

         {isImageUrl ? (
        <img className={"collapse-img" + (open ? ' active' : '')}  src={description} alt="Description" />
        
         ) : ( <div className={"collapse-text" + (open ? ' active' : '')}>{description}</div>  )}
        

         
   
      
   </div>)
}
export default Collapse