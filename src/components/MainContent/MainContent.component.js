import React from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

import Aux from '../../hoc/ReactAux';
import WidgetCard from "../UIElements/Card/Card.component";
import PersonalSummary from "../PersonalSummary/PersonalSummary.component";
import ResumeTimeline from "../ResumeTimeline/ResumeTimeline.component";
import Skills from "../Skills/Skills.component";


const MainContent = (props) => {

    return (
        <Aux>
            <WidgetCard>
                <PersonalSummary name={props.name} summary={props.summary} email={props.email}/>

                <MDBContainer fluid style={{marginBottom: '47px'}}>
                    <MDBRow>
                        <MDBCol size="6" className="col-bg1">
                            <ResumeTimeline title="Education" data={props.education}/>
                        </MDBCol>

                        <MDBCol size="6" className="col-bg1">
                            <ResumeTimeline title="Experience" data={props.experience}/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBContainer fluid style={{marginBottom: '47px'}}>
                    <MDBRow>
                        <MDBCol size="12">
                            <Skills title="Skill" data={props.skills} title="Skills"/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </WidgetCard>
        </Aux>
    )
};


export default MainContent;