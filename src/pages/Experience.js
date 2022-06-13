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
                    date=''
                    iconStyle={{ background: '#434443', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        University of Varna
                    </h3>
                    <p>Tele engineer</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date=''
                    iconStyle={{ background: '#434443', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        University of Varna
                    </h3>
                    <p>Tele engineer</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date=''
                    iconStyle={{ background: '#55ee90', color: '#fff' }}
                    icon={<JobIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        University of Varna
                    </h3>
                    <p>Tele engineer</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date=''
                    iconStyle={{ background: '#434443', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        University of Varna
                    </h3>
                    <p>Tele engineer</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
