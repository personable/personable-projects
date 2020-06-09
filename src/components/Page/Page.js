import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import marked from "marked";
import Background from "../Background/Background";
import Checklist from "../Checklist/Checklist";
import Image from "../Image/Image";
import ProjectsActionLink from "../ProjectsActionLink/ProjectsActionLink";
import ProjectsHeading from "../ProjectsHeading/ProjectsHeading";
import Spinner from "../Spinner/Spinner";

import "./Page.css";

class Page extends Component {
  static propTypes = {
    heading: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    media: PropTypes.shape({
      src: PropTypes.string,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    action: PropTypes.shape({
      src: PropTypes.string.isRequired,
      prompt: PropTypes.string.isRequired,
      variant: PropTypes.string,
    }),
    items: PropTypes.arrayOf(PropTypes.string),
    isCodePen: PropTypes.bool,
    isProject: PropTypes.bool,
    details: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.node,
    ]),
    year: PropTypes.string,
    id: PropTypes.number,
    screens: PropTypes.object,
  };

  static defaultProps = {
    mediaType: "image",
    isCodePen: false,
    isProject: false,
  };

  _timeouts = [];
  _intervals = [];

  constructor(props) {
    super(props);

    if (this.props.media.src) {
      this.state = {
        videoLoaded: false,
        videoAttempts: 0,
        videoFailed: false,
      };
    }
  }

  componentDidMount() {
    // Update the active color CSS var based on the page content
    document.documentElement.style.setProperty(
      "--color-active",
      this.props.color
    );
    // There are 3 animations using the --timing var fired BEFORE we want the video to play.
    // --timing var is 300 - update this calculation if it gets updated. Seemed easier than
    // asking for the CSS var value every time we mount this component.
    const videoWaitTime = 300 * 3;

    document.title = this.props.title;

    if (this.props.media.src) {
      const timeout = setTimeout(() => {
        const timer = setInterval(() => {
          this.handleVideo(timer);
        }, 1000);
        this._intervals.push(timer);
      }, videoWaitTime);
      this._timeouts.push(timeout);
    }
  }

  componentWillUnmount() {
    if (this.props.media.src) {
      this._timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
      this._intervals.forEach((interval) => {
        clearInterval(interval);
      });
    }
  }

  get headingID() {
    return `ProjectsHeading${this.props.id}`;
  }

  renderDetails() {
    const details = this.props.details;
    return details.map(function (detail, index) {
      return (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: marked(detail) }}
          className="PageDetail"
        />
      );
    });
  }

  renderList() {
    return <Checklist items={this.props.items} />;
  }

  renderMedia() {
    if (this.props.media.src) {
      // If video won't load, just serve Image instead
      const giveUpOnVideo = !this.state.videoLoaded && this.state.videoFailed;
      return (
        <div className="PageVideoContainer">
          {!giveUpOnVideo ? (
            <video
              id={`video${this.props.id}`}
              autoPlay
              muted
              loop
              playsInline
              poster={this.props.media.img}
              className={
                this.state.videoLoaded
                  ? "PageVideo PageVideo--loaded"
                  : "PageVideo"
              }
            >
              <source src={this.props.media.src} type="video/mp4" />
            </video>
          ) : null}
          {this.renderVideoOverlay()}
        </div>
      );
    } else {
      return (
        <a
          href={this.props.action.src}
          title={this.props.action.prompt}
          className="PageImageLink"
        >
          <Image src={this.props.media.img} alt={this.props.media.alt} />
        </a>
      );
    }
  }

  handleVideo(timer) {
    const video = document.getElementById(`video${this.props.id}`);

    // If the video is in the DOM, and ready to play...
    if (video && video.readyState > 3) {
      this.setState({
        videoLoaded: true,
      });
      clearInterval(timer);
      // If the video is in the DOM but not loaded yet...
    } else if (video && this.state.videoAttempts < 15) {
      this.setState({
        videoAttempts: this.state.videoAttempts + 1,
      });
      // If the video is either not there or taking over 15 seconds...
    } else {
      clearInterval(timer);
      this.setState({
        videoFailed: true,
      });
    }
  }

  renderVideoOverlay() {
    if (!this.state.videoLoaded && !this.state.videoFailed) {
      return (
        <span className="PageVideoOverlay" aria-live="polite">
          <Spinner message={this.renderOverlayMessage()} color="light" />
        </span>
      );
    } else if (!this.state.videoLoaded && this.state.videoFailed) {
      return <Image src={this.props.media.img} alt={this.props.media.alt} />;
    } else {
      return null;
    }
  }

  renderOverlayMessage() {
    if (this.state.videoAttempts < 14) {
      return <span>Loading video&hellip;</span>;
    } else {
      return <span>Sorry! The video's not loading.</span>;
    }
  }

  render() {
    const headline = (
      <div className="PageHeadline">
        <ProjectsHeading
          id={this.headingID}
          text={this.props.heading}
          color={this.props.backgroundColor || this.props.color}
          screens={this.props.screens}
        />
      </div>
    );

    const primaryContent = (
      <div className="PagePrimary">
        {this.props.screens.desktop && headline}
        <div className="PageBody">
          {this.props.details ? this.renderDetails() : null}
          {this.props.children}
        </div>
      </div>
    );

    const secondaryContent = (
      <div className="PageSecondary">
        <div className="PageSecondaryContent">
          <div className="PageSecondaryMedia">{this.renderMedia()}</div>
          <div className="PageSecondaryInfo">
            <div className="PageSecondaryInfoLayout">
              {this.props.year ? (
                <div className="PageSecondaryInfoYear">{this.props.year}</div>
              ) : null}
              <div className="PageSecondaryInfoMain">
                <div className="PageSecondaryInfoList">
                  {this.props.items ? this.renderList() : null}
                </div>
                {this.props.action ? (
                  <ProjectsActionLink
                    prompt={this.props.action.prompt}
                    src={this.props.action.src}
                    variant={this.props.action.variant}
                    screens={this.props.screens}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <article
        className={classnames({
          Page: true,
          "Page--isProject": this.props.isProject,
          "Page--tabletUI": this.props.screens.tablet,
          "Page--desktopUI": this.props.screens.desktop,
        })}
      >
        <Background
          color={this.props.backgroundColor || this.props.color}
          desktopUI={this.props.screens.desktop}
          isProject={this.props.isProject}
        />
        {!this.props.screens.desktop ? (
          <>
            {headline}
            {secondaryContent}
            {primaryContent}
          </>
        ) : (
          <>
            {primaryContent}
            {secondaryContent}
          </>
        )}
      </article>
    );
  }
}

export default Page;
