import React from "react";
import ReactHTMLParser from "react-html-parser";
import { FaBalanceScale, FaGavel, FaShieldAlt } from "react-icons/fa";
import { Box, Grid, Typography, withStyles } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import TopContent from "./Top";

const styles = (theme: Theme) =>
  createStyles({
    box_header: { lineHeight: 1 },
    icon: {
      color: "rgba(45, 73, 81,.4)",
      fontSize: "2rem",
      marginBottom: -18,
    },
    icon_box: {
      marginRight: -24,
      marginTop: -24,
      textAlign: "right",
      width: "100%",
    },
    info_box: {
      background: "rgba(221, 207, 185, 0.5)",
      border: "3px solid white",
      boxShadow: "inset 6px 6px 14px rgba(45, 73, 81,1)",
      //  margin: 24,
      height: "100%",
    },
    info_content: {
      color: "white",
    },
    testimonial: {
      maxWidth: 450,
    },
  });
interface Props {
  classes: any;
  isMobile: boolean;
}
interface Info {
  title: string;
  icon: any;
  content?: any;
  small?: boolean;
  width: any;
}

const Contact: React.FC<Props> = (props) => {
  const { classes, isMobile } = props;

  const ServicesList = () => {
    const services = [
      "Divorce",
      "Paternity",
      "Child Support",
      "Custody/Visitation",
      "Name Change",
      "Step Parent Adoption",
      "Small Claims Cases",
      "Evictions",
      "Deeds",
      "Power of Attorney",
      "Bankruptcy",
    ];
    return (
      <Grid container style={{ fontSize: ".8rem", marginTop: 10 }}>
        {services.map((service, idx) => {
          return (
            <Grid key={idx} item xs={6} md={4}>
              {service}
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const infoBoxes = [
    {
      title: "Services",
      icon: <FaGavel className={classes.icon} />,
      content: <ServicesList />,
      width: [6, 12],
      small: isMobile,
    },
    {
      title: "Pro Se",
      icon: <FaBalanceScale className={classes.icon} />,
      content: ReactHTMLParser(
        "<p>If you wish to represent yourself (pro se) in legal matters, we can assist you with the preparation/typing of legal documents to court standards as well as walk you through the process.</p>"
      ),
      width: [3, 6],
      small: true,
    },
    {
      title: "Your Rights",
      icon: <FaShieldAlt className={classes.icon} />,
      content: ReactHTMLParser(
        "<p>To know your rights <u><b>consult with an attorney</b></u>. We do not provide legal advice. Our objective is to offer the finest, most efficient and accurate document preparation services at reasonable prices.</p>"
      ),
      small: true,
      width: [3, 6],
    },
  ];

  return (
    <Grid container>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default withStyles(styles)(Contact);
