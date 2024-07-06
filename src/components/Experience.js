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
          <TimelineOppositeContent className="timelineopposite">
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
              Virtusa Consulting Services, Pune, MH, IN
            </Typography>
            <Typography variant="subtitle1" component="div" className="project-experience">
              <ul className="project-list">
                <li>British Telecom   - Jan/2024 : : Present</li>
                <li>Bank Of Montereal - Jan/2023 : : Sep/2023</li>
              </ul>
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
        
        





        {/* <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem> */}
      </Timeline>
    </div>
  );
}
