import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BadgeIcon from "@mui/icons-material/Badge";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Typography from "@mui/material/Typography";
import "../styles/ExperienceStyle.css";
import SchoolIcon from '@mui/icons-material/School';

export default function Experience() {
  return (
    <div className="timeline">
      <Timeline position="alternate">

        <TimelineItem>
          <TimelineOppositeContent className="educationtimeline">
            Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="badgeicon">
              <BadgeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timelinecontent">
            <Typography variant="h6" component="span">
              Fiix By Rockwell Automation, Pune
            </Typography>
            <Typography variant="subtitle1" component="div" className="project-experience"> 
                <li>Software Engineer Level-2</li>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="educationtimeline">
            May 2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="badgeicon">
              <BadgeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timelinecontent">
            <Typography variant="h6" component="span">
              Virtusa Consulting Services, Pune
            </Typography>
            <Typography variant="subtitle1" component="div" className="project-experience">
              <li>British Telecom   - Jan 2024 : May 2025</li>
              <li>Bank Of Montereal - Jan 2023 : Sep 2023</li>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="educationtimeline">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="badgeicon">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timelinecontent">
            <Typography variant="h6" component="span">
              D.I.E.M.S, Aurangabad, MH, IN
            </Typography>
            <Typography variant="subtitle1" component="div" className="project-experience"> 
                <li>B-Tech - Mechanical</li>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent className="educationtimeline">
            2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="badgeicon">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timelinecontent">
            <Typography variant="h6" component="span">
              S.B.E.S Collage of Science, Aurangabad, MH, IN
            </Typography>
            <Typography variant="subtitle1" component="div" className="project-experience"> 
                <li>H.S.C</li>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="educationtimeline">
            2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="badgeicon">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timelinecontent">
            <Typography variant="h6" component="span">
              S.B. High School, Aurangabad, MH, IN
            </Typography>
            <Typography variant="subtitle1" component="div" className="project-experience"> 
                <li>S.S.C</li>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot className="badgeicon">
              <KeyboardDoubleArrowUpIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timelinecontent">
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </div>
  );
}
