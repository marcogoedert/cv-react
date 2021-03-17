import React from 'react';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import './WidgetCard.styles.css';

const WidgetCard = (props) => {
    return (
        <MDBCard className="widget-card">
            <MDBCardBody className="widget-body">
                <h5 className="widget-title">{props.title}</h5>
                <p className="widget-content">{props.children}</p>
            </MDBCardBody>
        </MDBCard>
    )
};

export default WidgetCard;