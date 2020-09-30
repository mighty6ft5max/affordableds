import React from "react";
//import { FaBars } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  Grid,
  //  Hidden,
  Typography,
  withStyles,
} from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import Logo from "./logo_seal.png";
const styles = (theme: Theme) =>
  createStyles({
    app_bar: {
      background: "none",
      boxShadow: "none",
      height: 80,
    },
    button: {
      color: "white",
      minWidth: "unset",
      padding: 0,
    },
    logo: {
      [theme.breakpoints.down("sm")]: {
        height: 60,
      },
      [theme.breakpoints.up("sm")]: {
        height: 80,
      },
      marginRight: 8,
    },
    title: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.up("sm")]: {},
    },
    tool_bar: {
      width: "100%",
    },
  });
interface Props {
  classes: any;
  isMobile: boolean;
}
const Header: React.FC<Props> = (props) => {
  const { classes, isMobile } = props;
  let history = useHistory();
  return (
    <AppBar classes={{ root: classes.app_bar }} position="static">
      <div className={classes.tool_bar}>
        <Grid container style={{ height: 80 }}>
          <Grid item xs>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <img
                  className={classes.logo}
                  src={Logo}
                  alt="Affordable Document Services Logo"
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  className={classes.title}
                  style={{ color: "rgba(221, 207, 185, 0.9)" }}
                >
                  Affordable
                  <br />
                  Document
                  <br />
                  Services
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ padding: 0 }} sm={6}>
            <Grid
              container
              direction={isMobile ? "column" : "row"}
              justify="flex-end"
              alignItems="center"
              style={{ height: "100%" }}
              spacing={2}
            >
              <Grid
                item
                style={
                  {
                    // borderBottom: "2px solid rgba(221, 207, 185, 0.9)",
                    // transform: "translateY(1px)",
                  }
                }
              >
                <Button
                  onClick={() => history.push("/home")}
                  classes={{ root: classes.button }}
                  style={{
                    color: "rgba(221, 207, 185, 0.9)",
                  }}
                >
                  Home
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => history.push("/schedule")}
                  classes={{ root: classes.button }}
                >
                  Schedule
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => history.push("/contact")}
                  classes={{ root: classes.button }}
                >
                  Contact
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
