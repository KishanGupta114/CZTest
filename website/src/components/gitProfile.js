import { Github } from 'react-social-github';
import React from 'react';

const GitProfile = (props) =>(
    <Github type="widget" fab={false} fabCorner="" iconColor="" iconWidth="" iconHeight="" linkText="" tooltipOnHover={true} repo="react" user={props.user} ></Github>
);

export default GitProfile;