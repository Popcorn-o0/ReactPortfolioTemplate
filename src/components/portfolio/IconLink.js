import React from 'react';

function IconLink(props) {
   const {link, icon} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon} />
      </a>
   );
}

export default IconLink;