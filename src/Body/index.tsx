import React from "react";
import { Grid, useMediaQuery, withStyles } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import Header from "./Header/index";
import Footer from "./Footer/index";
import Content from "./Content/index";
const styles = (theme: Theme) =>
  createStyles({
    holder: { height: "100%" },
    page_elements: {
      height: "100%",
      width: "100%",
    },
    view: {
      [theme.breakpoints.down("sm")]: {
        padding: 24,
      },
      [theme.breakpoints.up("sm")]: {
        padding: 48,
      },

      height: "100%",
      width: "100%",
      maxWidth: 1160,
    },
  });
interface Props {
  classes: any;
}
const Body: React.FC<Props> = (props) => {
  //const theme = useTheme();
  const { classes } = props;
  const isMobile = useMediaQuery("(max-width:420px)");
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      classes={{ root: classes.holder }}
    >
      <Grid item classes={{ root: classes.view }}>
        <Grid container classes={{ root: classes.page_elements }}>
          <Grid item xs={12} style={{ marginBottom: isMobile ? 24 : 48 }}>
            <Header isMobile={isMobile} />
          </Grid>
          <Grid item xs={12} style={{ minHeight: window.innerHeight - 307 }}>
            <Content isMobile={isMobile} />
          </Grid>
          <Grid item xs={12} style={{ marginTop: 48 }}>
            <Footer isMobile={isMobile} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Body);
