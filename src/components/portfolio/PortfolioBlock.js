import React from 'react';
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image} = props;
   return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} margin={'30px 0'} bgcolor={'white'} width={'20em'} height={'15em'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
      </Box>
   );
}

export default PortfolioBlock;