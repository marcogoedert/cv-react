import React from "react";

import Aux from '../../hoc/ReactAux';
import WidgetCard from "../UIElements/WidgetCard/WidgetCard.component";

import './PersonalSummary.styles.css';
import {MDBBtn} from "mdbreact";

const PersonalSummary = (props) => {

    return (
        <Aux>
            <div style={{marginBottom: '29px'}}>
                <h2 className="section-title">Hello, I'm {props.name}!</h2>
                <p className="section-p">{props.summary}</p>
                <a href={"mailto:"+props.email}>
                    <MDBBtn color="primary email-btn">Hire Me</MDBBtn>
                </a>
            </div>
        </Aux>
    )
};


export default PersonalSummary;