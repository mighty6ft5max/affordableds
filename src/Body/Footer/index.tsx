import React from "react";
import { Grid, Hidden, Typography, withStyles } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import Logo from "./logo_c.png";
const styles = (theme: Theme) =>
  createStyles({
    app_bar: {
      background: "none",
      boxShadow: "none",
      height: 80,
    },
    bbb: {
      background: "rgba(221, 207, 185, 0.6)",
      borderRadius: 4,
      padding: 4,
    },
    button: {
      color: "white",
      minWidth: "unset",
      padding: 0,
    },
    logo: {
      height: 80,
      marginRight: 8,
    },
    tool_bar: {
      height: "100%",
      width: "100%",
    },
  });
interface Props {
  classes: any;
  isMobile: boolean;
}
const Footer: React.FC<Props> = (props) => {
  const { classes, isMobile } = props;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-end"
      classes={{ root: classes.tool_bar }}
    >
      <Grid item xs>
        <Typography variant="body1" className={classes.contact} style={{}}>
          7635 Ashley Park Court Suite 503
          <br />
          Orlando, Florida 32835
          <br />
          Phone: (407) 535-2455
          <br />
          <span>twoodson@affordableds.com</span>
        </Typography>
      </Grid>
      <Hidden xsDown>
        <Grid item xs style={{ textAlign: "center" }}>
          <img src={Logo} alt="ADS Logo" style={{ height: 50 }} />
          <Typography
            style={{ fontSize: ".6rem", lineHeight: 1.21, marginTop: 6 }}
          >
            Copyright © 2020
            <br />
            All Rights Reserved
          </Typography>
        </Grid>
      </Hidden>
      <Grid item xs style={{ padding: 0 }}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item>
            <Typography
              variant="h3"
              style={{
                height: isMobile ? 38 : 24,
                marginRight: 16,
                opacity: 0.7,
              }}
            >
              A+
            </Typography>
          </Grid>
          <Grid item classes={{ root: classes.bbb }}>
            <a
              target="_blank"
              title="Click for the Business Review of Affordable Document Services, Inc., a Legal Document Assistance in Orlando FL"
              href="https://www.bbb.org/central-florida/business-reviews/legal-document-assistance/affordable-document-services-in-orlando-fl-90257296#sealclick"
              rel="noopener noreferrer"
            >
              <img
                alt="Click for the BBB Business Review of this Legal Document Assistance in Orlando FL"
                src="https://seal-centralflorida.bbb.org/seals/blue-seal-153-100-affordabledocumentservicesinc-90257296.png"
                style={{ height: 52 }}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smUp>
        <Grid
          item
          xs={12}
          style={{ marginTop: 48, marginBottom: 48, textAlign: "center" }}
        >
          <img src={Logo} alt="ADS Logo" style={{ height: 50 }} />
          <Typography
            style={{ fontSize: ".6rem", lineHeight: 1.21, marginTop: 6 }}
          >
            Copyright © 2020
            <br />
            All Rights Reserved
          </Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
