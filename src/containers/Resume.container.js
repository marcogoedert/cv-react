import React, {Component} from 'react';

import Aux from '../hoc/ReactAux';
import Navbar from '../components/Navbar/Navbar.component';
import SideContent from '../components/SideContent/SideContent.component';
import MainContent from "../components/MainContent/MainContent.component";

import './Resume.styles.css';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

const SOCIAL_LINK_ICONS = {
    linkedin: "fab fa-linkedin-in",
    twitter: "fab fa-twitter",
    youtube: "fab fa-youtube",
    github: "fab fa-github",
    facebook: "fab fa-facebook-f",
};

class ResumeContainer extends Component {
    state = {
        name: "Marco Goedert",
        designation: "Software Developer",
        summary: "I'm a 23 years old Software Engineering student from Porto Alegre, Brazil, who loves being part of an international team (in the moment: Brazil, United States and India) at Dell Technologies DevOps team and hopes to be able to work with people all over the world.",
        links: {
            linkedin: "https://www.linkedin.com/in/marco-goedert/",
            github: "https://github.com/maarcoagg",
            twitter: "https://twitter.com/marcogoedert",
            youtube: "https://www.youtube.com/channel/UCf51JkjnCf74sEETS_OCIEA/",
            facebook: "https://www.facebook.com/maarcoagg/",
        },
        personal_information: {
            birthday: "11 February 1998",
            phone: "+5551995979796",
            email: "contato@marcogoedert.com",
            location: "Porto Alegre - RS, Brazil"
        },
        languages: {
            portuguese: "native",
            english: "fluent",
            spanish: "basic"
        },
        interests: ["Business", "DIY", "Guitars"],
        education: [
            {
                date: "Mar 2009 - Jun 2012",
                title: "English Language Study",
                subtitle: "Yázigi Language School",
                description: "Intermediate level."
            },
            {
                date: "Mar 2014 - Sep 2015",
                title: "Computer Technician Course",
                subtitle: "Escola Técnica Mesquita",
                description: "Applications in modular programming, event-oriented and object-oriented, as well as understanding the software engineering process. Conditions to design relational database systems using SQL language, manage and develop applications in operating systems, identifying architectures, protocols and management of computer networks."
            },
            {
                date: "Mar 2017 - Jun 2018",
                title: "Bachelor of Control and Automation Engineering",
                subtitle: "UERGS | Universidade Estadual do Rio Grande do Sul",
                description: "Conception, design, manufacture and maintenance of automatic machines and systems."
            },
            {
                date: "Mar 2018 - Jun 2018",
                title: "Bachelor of Computer Engineering",
                subtitle: "PUCRS | Pontifícia Universidade Católica do Rio Grande do Sul",
                description: "Embedded systems and computer architecture; digital and analog electronics; software development, including algorithms and programming; communication networks and systems; electrical circuits, microelectronics, integrated circuits and systems."
            },
            {
                date: "Jun 2018 - Current",
                title: "Bachelor of Software Engineering",
                subtitle: "PUCRS | Pontifícia Universidade Católica do Rio Grande do Sul",
                description: "An overview of the fundamentals of computing and an in-depth analysis of the following topics: software programming, modeling and design, project management, software verification and validation, software development/maintenance processes and quality management."
            },
        ],
        experience: [
            {
                date: "Mar 2016 - Aug 2016",
                title: "Technical Translator",
                subtitle: "Integra Consultoria",
                description: "Responsible for the technical translation of purchase orders from companies such as Gerdau, Vale S/A and Eletrobras."
            },
            {
                date: "Apr 2018 - Oct 2018",
                title: "Scientific Initiation",
                subtitle: "PET-Informática PUCRS",
                description: "Project leader of PET-Electronics (Tutorial Education Program), branch specialized in robotics development with Arduino."
            },
            {
                date: "Oct 2019 - May 2020",
                title: "Software Developer Intern",
                subtitle: "Portosys Sistemas de Informação",
                description: "ERP software development using C# and PL/SQL; implementation of business rules; systems integration with web services; code versioning management with CA Harvest application."
            },
            {
                date: "May 2020 - Current",
                title: "Software Developer Intern",
                subtitle: "Dell Technologies",
                description: "Currently working using C#/.NET, Docker, Kubernetes, Prometheus and Grafana."
            },
        ],
        skills: [
            {
                title: "C#",
                description: "To-do.",
                icon: "fas fa-code"
            },
            {
                title: "Java",
                description: "To-do.",
                icon: "fas fa-code"
            },
            {
                title: "SQL",
                description: "To-do.",
                icon: "fas fa-code" //"fas fa-table"
            },
            {
                title: "Python",
                description: "To-do.",
                icon: "fas fa-code" //"fab fa-python"
            },
            {
                title: "C",
                description: "To-do.",
                icon: "fas fa-code"
            },
            {
                title: "Prometheus",
                description: "To-do.",
                icon: "fas fa-code"
            },
            {
                title: "Grafana",
                description: "To-do.",
                icon: "fas fa-code"
            },
            {
                title: "Agile methods",
                description: "To-do.",
                icon: "fas fa-code"
            },
            {
                title: "Docker",
                description: "To-do.",
                icon: "fas fa-code"
            },
            {
                title: "Kubernetes",
                description: "To-do.",
                icon: "fas fa-code"
            },
        ]

    };

    render() {
        return (
            <div className="wrapper">
                {/*<Navbar/>*/}

                <MDBContainer fluid>
                    <MDBRow>

                        <MDBCol xl="2" className="col-bg1">
                            <SideContent
                                name={this.state.name}
                                designation={this.state.designation}
                                personalInformation={this.state.personal_information}
                                languages={this.state.languages}
                                interests={this.state.interests}
                                links={this.state.links}
                                link_icons={SOCIAL_LINK_ICONS}
                            />
                        </MDBCol>

                        <MDBCol xl="10" className="col-bg1">
                            <MainContent
                                name={this.state.name}
                                summary={this.state.summary}
                                email={this.state.personal_information.email}
                                education={this.state.education}
                                experience={this.state.experience}
                                skills={this.state.skills}
                            />
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>

                {/*<Router/>*/}
            </div>

        );
    }
}

export default ResumeContainer;