import React from 'react';

import {
  styled
} from '@mui/material/styles';

import Property1Frame441Image from 'src/assets/images/Component2_Property_1_Frame_44.png';

const Property1Frame441 = styled("div")({
  backgroundImage: `url(${Property1Frame441Image})`,
  backgroundPosition: `center`,
  backgroundSize: `100%`,
  backgroundRepeat: `no-repeat`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  borderRadius: `20px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `189px`,
  height: `145px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  overflow: `hidden`,
});


function Property1Frame44() {
  return (
    <Property1Frame441>
    </Property1Frame441>);

  }

export default Property1Frame44;

  