import React from "react";

import Aux from '../../hoc/ReactAux';
import WidgetCard from "../UIElements/WidgetCard/WidgetCard.component";

import './SideContent.styles.css';
import {MDBBadge} from "mdbreact";

import SocialButtons from "../UIElements/SocialButtons/SocialButtons.component";
import PersonalInformation from "../PersonalInformation/PersonalInformation.component";

const Aside = (props) => {

    const languageSummary = Object.keys(props.languages).map(key => {
        return (<div>
            <span style={{textTransform: 'capitalize'}}>{key}</span> : {props.languages[key]}
        </div>);
    });

    const interestsSummary = Object.keys(props.interests).map(key => {
        return (<div>
            <span style={{textTransform: 'capitalize'}}>{props.interests[key]}</span>
        </div>);
    });

    return (
        <div className="aside">
            <div>
                {/* Image */}
                <div className="profile-img-wrapper">
                    <img src="https://avatars.githubusercontent.com/u/38140171" alt="profile" />
                </div>

                {/* Name */}
                <h1 className="profile-name">
                    {props.name}
                </h1>

                {/* Designation */}
                <div className="text-center">
                    <MDBBadge pill color="white" className="designation-badge">
                        <span className="profile-designation" style={{fontWeight:'500'}}>
                            {props.designation}
                        </span>
                    </MDBBadge>
                </div>


                <div>
                    <SocialButtons links={props.links} linkIcons={props.link_icons}/>
                </div>

                <div>
                    <PersonalInformation info={props.personalInformation}/>
                </div>

            </div>

            <div>
                <WidgetCard title="Languages">
                    {languageSummary}
                </WidgetCard>
            </div>

            <div>
                <WidgetCard title="Interests">
                    {interestsSummary}
                </WidgetCard>
            </div>

        </div>
    )
};


export default Aside;