import React from 'react';

export const Footer = () => {

let footStyle = {
  position: "relative",
  top:"40vh",
  width:"100%"
}
  return <div>
       <footer className='bg-dark text-light py-3 ' style={footStyle} >
         <p className="text-center">
           Copyright &copy; TextUtils.com   |   
           Developed by: Umesh Bhatiya
         </p>
       </footer>
  </div>;
};
export default Footer;