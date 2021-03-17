import React from "react";

import './Skills.styles.css';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import WidgetCard from "../UIElements/Card/Card.component";

const Skills = (props) => {

    const SkillsSummary = Object.keys(props.data).map(key => {
        return (
            <MDBCol  size="6" className="skills-card">
                <div className="skill-icon">
                    <i className={props.data[key].icon}></i>
                </div>

                <div className="skill-body" style={{flex: '1'}}>
                    <h6 className="skill-title">{props.data[key].title}</h6>
                    <p className="skill-description">{props.data[key].description}</p>
                </div>
            </MDBCol>
        );
    });

    return(
        <div className="skills-section">
            <h2 className="skills-title">{props.title}</h2>

            <MDBContainer fluid>
                <MDBRow>
                    {SkillsSummary}
                </MDBRow>
            </MDBContainer>
        </div>
    )
};

export default Skills;