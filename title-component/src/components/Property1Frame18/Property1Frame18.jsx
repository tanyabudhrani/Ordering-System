import React from 'react';

import Star1Image from 'src/assets/images/Component1_Star_1.png';

import Polygon1Image from 'src/assets/images/Component1_Polygon_1.png';

import Ellipse2Image from 'src/assets/images/Component1_Ellipse_2.png';

import {
  styled
} from '@mui/material/styles';

const Property1Frame181 = styled("div")({
  height: `undefinedpx`,
  width: `438px`,
});

const Property1Frame182 = styled("div")({
  background: `linear-gradient(180deg, rgba(107, 145, 120, 0) -3.0616171314629196e-15%, rgba(32, 43, 36, 0) 99.99999999999999%)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `438px`,
  height: `233px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const CommunalStudentCante = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Josefin Sans`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `-0.4300000071525574px`,
  textDecoration: `none`,
  lineHeight: `50px`,
  textTransform: `none`,
  width: `427px`,
  height: `150px`,
  position: `absolute`,
  left: `6px`,
  top: `42px`,
});

const Star1 = styled("img")({
  height: `102px`,
  width: `127px`,
  position: `absolute`,
  left: `344px`,
  top: `179px`,
});

const Polygon1 = styled("img")({
  height: `160.5px`,
  width: `225.49px`,
  position: `absolute`,
  left: `-126px`,
  top: `112px`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(76, 112, 94, 1)`,
  filter: `blur(10px)`,
  width: `103px`,
  height: `177px`,
  position: `absolute`,
  left: `330px`,
  top: `-162px`,
});

const Ellipse2 = styled("img")({
  height: `161px`,
  width: `184px`,
  position: `absolute`,
  left: `-105px`,
  top: `-100px`,
});


function Property1Frame18() {
  return (
    <Property1Frame181>
      <Property1Frame182>
        <CommunalStudentCante>
          {`COMMUNAL STUDENT CANTEEN`}
        </CommunalStudentCante>
        <Star1 src={Star1Image} loading='lazy' alt={"Star 1"}/>
        <Polygon1 src={Polygon1Image} loading='lazy' alt={"Polygon 1"}/>
        <Rectangle1>
        </Rectangle1>
        <Ellipse2 src={Ellipse2Image} loading='lazy' alt={"Ellipse 2"}/>
      </Property1Frame182>
    </Property1Frame181>);

  }

export default Property1Frame18;

  