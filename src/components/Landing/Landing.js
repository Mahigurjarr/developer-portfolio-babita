import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeOptions } from "../../data/themeData";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaBlogger,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen, setTheme } = useContext(ThemeContext);
  const updateTheme = () => {
    setTheme(themeOptions[Math.floor(Math.random() * themeOptions.length)]);
  };
  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {},
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.facebook && (
              <a href={socialsData.facebook} target="_blank" rel="noreferrer">
                <FaFacebookF
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Facebook"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Twitter"
                />
              </a>
            )}
            {socialsData.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                <FaYoutube
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="YouTube"
                />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                <FaInstagram
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Instagram"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={require("../../assets/svg/skills/img3.jpeg").default}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes.resumeBtn}>Download CV</Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink>
            </div>
            <div onClick={updateTheme}>
              <Button
                className={classes.contactBtn}
                style={{
                  margin: "1rem 6rem",
                  //   backgroundImage: `linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1))`,
                  //   backgroundImage: `url("${bg}")`,
                }}
              >
                Themes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
