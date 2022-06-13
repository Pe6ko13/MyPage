import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import JobIcon from '@material-ui/icons/Work';
import '../styles/Experience.css';

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#434443'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2002-2007'
                    iconStyle={{ background: '#434443', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        High school of Natural Sciences and Mathematics
                    </h3>
                    <p>Matematics and geography</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2007-2012'
                    iconStyle={{ background: '#434443', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Technical University of Varna
                    </h3>
                    <p>Telecommunication engineering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2013-2020'
                    iconStyle={{ background: '#55ee90', color: '#fff' }}
                    icon={<JobIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        DHL Aiation ltd
                    </h3>
                    <h4>East Midlands Airport</h4>
                    <p>Ramp Agent</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2020 - present'
                    iconStyle={{ background: '#434443', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Software University Sofia
                    </h3>
                    <p>Full-stack Web developer</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
