import React, { useEffect, useState } from "react";
import { animated, useTransition, config } from "react-spring";
import classNames from "classnames";
import { Grid, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  message: {
    fontSize: ".9rem",
    fontStyle: "italic",
  },
  top: {},
  testimonial: { maxWidth: 450, position: "absolute" },
});

const TopContent = (props) => {
  const { classes, isMobile } = props;

  const messages = [
    "I was successful in my family court case even though the other party had hired a lawyer. Thanks to Affordable Document Services, I was able to represent myself professionally and correctly filing court documents correctly and give my story the way only I can do it.",
    "It was the first time I had ever done something like this and with Affordable Document Services I handled it with professionalism and confidence.",
    "My ex-husband was over $16,000 behind in child support. I used Affordable Document Services to assist me with filing. The Judge ordered the Father to pay a lump sum payment or be arrested. Shortly after, I received a $2,000 payment from my children's father.",
  ];

  const [message, setMessage] = useState(0);

  const msgTransitions = useTransition(messages[message], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newCount = message + 1;
      const nextMessage = newCount === messages.length ? 0 : newCount;
      setMessage(nextMessage);
    }, 11000);
    return () => clearInterval(interval);
  });
  const ATypography = animated(Typography);
  return (
    <Grid classes={{ root: classes.top }} item xs={12} md={4}>
      <Grid
        container
        style={{
          margin: isMobile ? "48px 0" : "unset",
          padding: isMobile ? 24 : 48,
          minHeight: isMobile ? 200 : 350,
          height: isMobile ? 200 : "unset",
        }}
      >
        {msgTransitions(({ opacity }, item) => {
          return (
            <Grid
              item
              classes={{ root: classes.testimonial }}
              style={{ marginRight: isMobile ? 72 : 96 }}
            >
              <ATypography
                variant="body1"
                classes={{
                  root: classNames(classes.header_text, classes.message),
                }}
                style={{ opacity }}
              >
                {item}
              </ATypography>{" "}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(TopContent);
