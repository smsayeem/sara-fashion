import React, { useState } from "react";
import {connect} from 'react-redux';

import MenuItem from "../menu-item";
import "./style.scss";

function Directory({sections}) {
  return (
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionsProps}) => (
        <MenuItem
          key={id}
          {...otherSectionsProps}
        />
      ))}
    </div>
  );
}
const mapStateToProps=({directory}) =>{
  return{
    sections: directory.sections
  }
}
export default connect(mapStateToProps)(Directory);
