import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "../Button/Button";
import "./PageBackButton.css";

class PageBackButton extends Component {
  static propTypes = {
    text: PropTypes.node.isRequired,
    colors: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    screenreaderText: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    screens: PropTypes.object,
  };

  handleClick = (e) => {
    const { disabled, onClick } = this.props;

    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    } else if (typeof onClick === "function") {
      onClick(e);
    }
  };

  checkColor(val) {
    const white = window
      .getComputedStyle(document.body)
      .getPropertyValue("--color-shadow");

    if (val == null) {
      return white;
    } else {
      return val;
    }
  }

  render() {
    const {
      text,
      screenreaderText,
      id,
      colors,
      activeIndex,
      screens,
    } = this.props;

    return (
      <span
        className={classnames({
          PageBackButton: true,
          "PageBackButton--desktopUI": screens.desktop,
        })}
      >
        <Button onClick={this.handleClick} id={id}>
          <span
            className="PageBackButtonBurger"
            aria-hidden="true"
            role="presentation"
          >
            <span
              className="PageBackButtonPatty"
              style={{
                backgroundColor: this.checkColor(colors[activeIndex - 1]),
              }}
            />
            <span
              className="PageBackButtonPatty PageBackButtonPatty--active"
              style={{ backgroundColor: colors[activeIndex] }}
            />
            <span
              className="PageBackButtonPatty"
              style={{
                backgroundColor: this.checkColor(colors[activeIndex + 1]),
              }}
            />
          </span>
          <span
            className="PageBackButtonText"
            aria-hidden={screenreaderText ? "true" : "false"}
            role={screenreaderText ? "presentation" : ""}
          >
            {text}
          </span>
          <span className="sr">{screenreaderText}</span>
        </Button>
      </span>
    );
  }
}

export default PageBackButton;
