import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Timeline from "@material-ui/icons/Timeline";
import List from "@material-ui/icons/List";
import Code from "@material-ui/icons/Code";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>A Little More About Me</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="info"
                tabs={[
                  {
                    tabButton: "Programming",
                    tabIcon: Code,
                    tabContent: (
                      <span>Java, Web, and a Whole Lot of Love
                      <p>I grew up coding. The early late 90's to early 2000's were very wild west for a kid 
                      learning to program, but I loved every second of it. Nowadays, I work at 1Password as a Full Stack dev.
                       Aside from work, I spent 9 months studying Object Oriented Programming 
                      in an intensive bootcamp. My cohort was part of a grant initiative called TechHire, and 
                      the skills and concepts I learned during that time were invaluable to my career as a programmer.</p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Soft Skills",
                    tabIcon: PersonAdd,
                    tabContent: (
                      <span>
                        <p>
                          While I'm actually very shy, I'm also secretly charismatic. 
                          I try my hardest to be the person my teammates can come to when they 
                          need something to get done. I'm grateful for their feedback, mentorship,
                          and seek to return the favor in any way I can.

                          It's so important to me to be on a team that fosters growth and encourages ambition. 
                          I'm motivated, diligent, resilient, and above all -- I like to make sure everyone's having a good time.
                          We all get a little bogged down from here and there, so I try to be that ray of sunshine on a rainy day.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>          
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
