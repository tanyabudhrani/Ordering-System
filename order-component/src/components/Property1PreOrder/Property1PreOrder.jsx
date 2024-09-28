import React from 'react';

import {
  styled
} from '@mui/material/styles';

const Property1PreOrder1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `170px`,
  height: `32px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const OrderPreOrder = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});


function Property1PreOrder() {
  return (
    <Property1PreOrder1>
      <OrderPreOrder>
        {`Order/Pre-Order`}
      </OrderPreOrder>
    </Property1PreOrder1>);

  }

export default Property1PreOrder;

  