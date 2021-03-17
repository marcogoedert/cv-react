import React from "react";

import './PersonalInformation.styles.css';
import {MDBBtn, MDBIcon} from "mdbreact";

const PersonalInformation = (props) => {

    const personalSummary = Object.keys(props.info).map(key => {
        if (props.info[key]) {
            return (
                <p>
                    <span style={{textTransform: 'uppercase', fontWeight: '500'}}>{key}</span> : {props.info[key]}
                </p>
            );
        }
        return null;

    });

  return (
      <div className="widget">
          <h5 className="widget-title">PERSONAL INFORMATION</h5>
          <div className="widget-content">
              {personalSummary}
          </div>
          <MDBBtn color="primary" className="download-btn" >
              <MDBIcon icon="download" className="mr-1 download-btn-icon" /> Download CV
          </MDBBtn>
      </div>

  );
};

export default PersonalInformation;