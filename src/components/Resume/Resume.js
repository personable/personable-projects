import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../Page/Page'
import './Resume.css'

class Resume extends Component {
  static propTypes = {
    resumeData: PropTypes.array.isRequired
  }

  renderEmployment () {
    return this.props.resumeData.map((job, index) =>
      <li key={index} className="ResumeListItem">
        <img
          className={(job.logo.type === 'rect')
            ? 'ResumeListImage ResumeListImage--rect' : 'ResumeListImage ResumeListImage--square'}
          src={job.logo.src}
          alt={job.employer + ' logo'}
        />
        <h3 className="ResumeListHeading">
          {job.employer}
          {(job.employerDetail)
            ? <span className="ResumeListHeadingDetail">{job.employerDetail}</span> : null
          }
        </h3>
        <h4 className="ResumeListSubHeading">{job.title}</h4>
        <time className="ResumeListTime">{job.term}</time>
        <ul className="ResumeSubList">
          {
            job.duties.map(function (duty, index) {
              return (
                <li key={index} className="ResumeSubListItem">{duty}</li>
              )
            })
          }
        </ul>
      </li>
    )
  }

  render () {
    return (
      <Page
        heading="Christopher Hart"
        title="Personable Design & Development: Christopher Hart, UI developer in Portland, Maine"
        color="#444"
        id={546327}
        media={{
          img: '/img/me4.jpg',
          alt: 'A picture of me'
        }}
        action={{
          variant: 'Mail',
          src: 'mailto:\u0063\u0068\u0072\u0069\u0073\u0040\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u0062\u006c\u0065\u0064\u0065\u0073\u0069\u0067\u006e\u002e\u0063\u006f\u006d',
          prompt: '\u0063\u0068\u0072\u0069\u0073\u0040\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u0062\u006c\u0065\u0064\u0065\u0073\u0069\u0067\u006e\u002e\u0063\u006f\u006d'
        }}
        items={[
          'Expert __CSS developer__ with a design background',
          'Experience building user interfaces in __React__, __Angular__, __Backbone__, and __Rails__',
          'Skilled at __Illustrator__ and __Photoshop__',
          'Meyers-Briggs: __INFP__',
          'Hogwarts: __Hufflepuff__'
        ]}
      >
        <div className="Resume">
          <h2 className="ResumeHeading">Experience</h2>
          <ol className="ResumeList">
            {this.renderEmployment()}
          </ol>
          <h2 className="ResumeHeading">Education</h2>
          <ol className="ResumeList">
            <li className="ResumeListItem">
              <img className="ResumeListImage ResumeListImage--rect" src="/img/logo-uconn.png" alt="UConn logo" />
              <h3 className="ResumeListHeading">
                University of Connecticut
              </h3>
              <h4 className="ResumeListSubHeading">B.A. English (honors) & Philosophy</h4>
            </li>
            <li className="ResumeListItem">
              <img className="ResumeListImage ResumeListImage--rect" src="/img/logo-ai.jpg" alt="Art Institutes logo" />
              <h3 className="ResumeListHeading">
                Art Institute of New England
              </h3>
              <h4 className="ResumeListSubHeading">Certificate Program: Digital Graphic Design</h4>
            </li>
          </ol>
        </div>
      </Page>
    )
  }
}

export default Resume
