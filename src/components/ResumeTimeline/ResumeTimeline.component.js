import React from 'react';

import './ResumeTimeline.styles.css';

const ResumeTimeline = (props) => {

    const summary = Object.keys(props.data).map(key => {
        return (
            <li className="timeline-item">
                <span className="badge badge-primary">{props.data[key].date}</span>
                <h6 className="timeline-item-title">{props.data[key].title}</h6>
                <p className="timeline-item-subtitle">{props.data[key].subtitle}</p>
                <p className="timeline-item-content">{props.data[key].description}</p>
            </li>
        );
    });

    return(
        <div className="timeline-section">
            <h2 className="timeline-title">{props.title}</h2>
            <ul className="timeline">
                {summary}
            </ul>
        </div>
    )
};

export default ResumeTimeline;