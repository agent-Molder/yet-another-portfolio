import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Assessment from "@material-ui/icons/Assessment";
import Android from "@material-ui/icons/Android";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import team1 from "assets/img/avatar.jpg";
import { RoundedCorner } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={8}>
          <h2 className={classes.title}>About</h2>
          <img src={team1} alt="..." className={RoundedCorner} />
          <h5 className={classes.description}>
          Hey, since you{"'"}re here, you probably want to know a little bit about me. 
          I{"'"}m a Full Stack Engineer currently working at 1Password. 
          I{"'"}m all about making sure I help my team out however I can, but in my time away from work, I{"'"}m your quintessential nerd.
          </h5>
          <h5 className={classes.description}>
          I love Video games, creating video games, programming, anime, plain old tv
          (With a surname like mine, you{"'"}d better believe I grew up on X-Files).
          I{"'"}m majorly into all of it.
          I{"'"}m even a bit of a music geek.
          Aside from that, I{"'"}m big on crafts and like to sew and draw when I{"'"}m not in front of a screen.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Java"
              description="I've been programming in Java since mid-2018. I've tinkered with JDBC, JSTL, JSPs, made vending machines, made Superhero trackers (ask me about it anytime -- or don't, I'll totally tell you about it anyway!)"
              icon={Android}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web"
              description="This site is an ongoing testament to my love of development. There's so much connection in what we do as web developers and engineers, and while I adore the science in working on the Web, I also dig the human aspect in it. What's the customer thinking when they see this? What can we do to make this easier to navigate? The web is so important to our everyday lives, and I'm glad to be involved in it."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Data"
              description="I love data! Lately, I've been diving into JSON and YAML at work. When talking Java, I integrate connectivity between my DAOs, DTOs, and actual databases for a super cool and fluid experience."
              icon={Assessment}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
