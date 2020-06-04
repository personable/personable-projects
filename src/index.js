import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
  /* eslint-disable max-len */
  <App
    projectData={[
      {
        name: "ClubWorx Gym Management",
        color: "#f17310",
        backgroundColor: "#f48f40",
        year: "2014",
        items: ["Design", "Front-end development"],
        isCodePen: false,
        media: {
          alt:
            "Selected examples from the Clubworx design comp and front-end implementation",
          src: "/video/screencast-clubworx-low.mp4",
          img: "/img/poster-clubworx.png",
        },
        action: {
          src: "http://clubworx.com",
          prompt: "clubworx.com",
        },
        details: [
          `Clubworx is a lightweight gym management app aimed at small fitness, crossfit,
          and martial arts studios that I worked on during my time at 12 Spokes.`,
          `I was given a logo and tasked with designing the app's online brand, as well as
          building out a CSS style guide that would serve as the foundation of the user interface.
          The client was a pleasure to work with, and we quickly settled on an uncluttered,
          modern look, with plenty of white space and bold accent colors. To save billable hours
          for this MVP, I settled on using the Sass build of Bootstrap as the basis for the
          style guide, and added custom checkboxes, toggles, and radio buttons to make the many
          form-heavy views more attractive.`,
          `Shortly after I'd finished the style guide and &#151; working in tandem
          with an Angular developer &#151; a couple of initial features, 12 Spokes was acquired,
          and I was off the project and on to new things at Instructure. I'm still proud of the
          design and style guide development work, and wish I could have seen the whole thing through.`,
        ],
      },
      {
        name: "Minimal METRO",
        color: "#3886f4",
        backgroundColor: "#68a3f7",
        year: "2018",
        items: ["Design", "Front-end development"],
        isCodePen: false,
        media: {
          alt: "Minimal METRO home page screenshot",
          src: "/video/screencast-metro-low.mp4",
          img: "/img/poster-metro.png",
        },
        action: {
          src: "https://metro.personabledesign.com",
          prompt: "Minimal METRO",
        },
        details: [
          `A couple of years ago, Portland, Maine's METRO transit system implemented bus tracking and made the API public.`,
          `At the time METRO launched their API, the only options for tracking my bus I could find were sending a text or tapping around on an interactive map that didn't work on phones. Texting in 10 degrees is no fun, so I decided to see if I could build an app that would tell me when my bus is coming in the morning with a single tap from my phone's home screen.`,
          `The BusTime API didn't accept client-side requests, so I had to learn a bit of PHP to get the data on the page. Once I got the PHP done, I set about the more exciting work of branding the app. I landed on a look I was pleased with: minimal and clean, but also approachable and playful through the use of vibrant color backgrounds.`,
        ],
      },
      {
        name: "PAYSA EZ-Sub",
        color: "#333",
        backgroundColor: "#9efcca",
        year: "2019",
        items: ["Design", "Front-end development"],
        isCodePen: false,
        media: {
          alt: "EZ Sub screenshot",
          src: "/video/screencast-ezsub-low.mp4",
          img: "/img/poster-ez-sub.png",
        },
        action: {
          src: "https://paysa-ez-sub.netlify.com",
          prompt: "EZ Sub",
        },
        details: [
          `Know what's surprisingly hard? Managing substitutions on a rec soccer team.`,
          `You've got to make sure that every kid gets to play a roughly equal number of minutes
          and in a variety of different positions. And you do this surrounded by a
          horde of clamoring nine-year-olds, all asking when they're going back into the game
          and reminding you it’s _definitely not_ their turn to play defense.`,
          `**Technology to the rescue!** After a pretty disastrous first couple of games,
          I created this little React app to help me keep track of who was lined up to replace who,
          and how many minutes each player has played. One interesting finding from the
          (literal) field testing was that it's really hard to see fine details on an
          iPad in the blazing late September sun. **A high-contrast, black-and-white UI
          was much easier to see**; but yeah, I couldn't resist adding a little minty green
          for the field :)`,
        ],
      },
      {
        name: "Twitcha: The Twitta Switcha",
        color: "#51b0c0",
        backgroundColor: "#83c7d2",
        year: "2011",
        items: ["Design", "Front-end development"],
        isCodePen: false,
        media: {
          alt: "Screenshot of Twitcha",
          src: "/video/screencast-twitcha-low.mp4",
          img: "/img/poster-twitcha.jpg",
        },
        action: {
          src: "http://twitcha.personabledesign.com",
          prompt: "Try a Twitch for yourself!",
        },
        details: [
          "Twitcha is an app that searches for words or phrases on Twitter and replaces them with whatever snark you can dream up.",
          `It's pointless. It's immature. Sometimes I lie awake at night and fear it might be the best thing I'll ever make.`,
          `Well, ok, not really. But after the better part of a decade, Twitcha still holds up pretty well and makes me laugh whenever
          I remember it still exists. It was also my first responsive design project and foray into javascript (ok, let’s be honest, jQuery),
          which in turn helped me land my first real web development job &mdash; so it’ll always have a special place in my heart.`,
        ],
      },
      {
        name: "Hart DataWorks",
        color: "#834496",
        backgroundColor: "#ac71be",
        year: "2018",
        items: ["Design"],
        isCodePen: false,
        media: {
          alt: "Hart DataWorks logo treatments",
          src: "/video/screencast-hart-low.mp4",
          img: "/img/poster-hart.png",
        },
        action: {
          src: "https://www.hartdataworks.com",
          prompt: "hartdataworks.com",
        },
        details: [
          `My sister, Vicki, is really smart. She quit her mechanical engineering job to get a doctorate
          in epidemiology and biostatistics. After she finished her PhD, she started Hart DataWorks, and asked
          me if I'd create the logo.`,
          `Hart DataWorks helps its clients by distilling their mountains of data into something
          approachable, actionable, and even enjoyable. I tried to convey Vicki's
          fresh, personal approach to statistical interpretation with bright, friendly colors not
          usually associated with data analytics companies.`,
          `I balanced the fun colors and playful recessed pie chart mark with a
          buttoned-up type treatment (using the timeless Proxima Nova) appropriate for a consultancy
          whose reputation hinges on rigorous analysis and accurate results.`,
        ],
      },
      {
        name: "Weather range slider",
        color: "#423e4f",
        backgroundColor: "#9e99af",
        year: "2019",
        items: ["Design", "Front-end development"],
        isCodePen: false,
        media: {
          alt: "Weather range slider",
          src: "/video/screencast-weather-low_2.mp4",
          img: "/img/poster-weather.png",
        },
        action: {
          src: "https://codesandbox.io/s/ly1z1737rq",
          prompt: "See it on CodeSandbox",
        },
        details: [
          `Just a fun experiment with React, inline SVG and HSL colors. I built a controlled range input
          in CodeSandbox to help me understand how controlled inputs work. Then, of course, I started styling it,
          and one thing led to another.`,
          `Holy h$%&, though: If I'd remembered how hard it is to style a range input cross-browser, I'd have
          chosen another input type. This
          [wonderfully titled article](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
          pretty much sums the experience up.`,
        ],
      },
      {
        name: "Accessible checkbox toggle",
        color: "#00ac19",
        backgroundColor: "#00ce1e",
        year: "2013",
        items: ["Design", "Front-end development"],
        isCodePen: true,
        media: {
          alt: "Screenshot of Accessible Checkbox Toggle CodePen",
          img: "/img/poster-toggles.png",
        },
        action: {
          src: "https://codepen.io/personable/pen/ZGKjwe",
          prompt: "Check out the CodePen!",
        },
        details: [
          `There are a ton of checkbox-as-toggle-switch examples on Codepen. However, most of them
          don't have :focus states or accommodate keyboard-only navigation. Many are also unusable for users of screenreaders.`,
          `I only know this because when I [added a checkbox toggle](https://codepen.io/personable/pen/stpwD)
          built with accessibility in mind, it went small-time CSS-nerd-viral and got hundreds of likes.`,
          `However, as time went by, I felt less than impressed with the overall design, and the
          screenreader experience wasn't as great as it could have been. So I went back to the
          drawing board and [emerged with a toggle](https://codepen.io/personable/pen/ZGKjwe) that's
          nicer-looking _and_ more accessible.
          At the time of this writing, it has a grand total of **11 likes**. Sigh. I guess the zeitgeist has
          passed checkbox toggles by!`,
        ],
      },
      {
        name: "SVG Spin Cycle",
        color: "#5f5ffe",
        backgroundColor: "#8181fe",
        year: "2016",
        items: ["Design", "Front-end development"],
        isCodePen: true,
        media: {
          alt: "Screenshot of Spin Cycle CodePen",
          img: "/img/poster-spin-cycle.png",
        },
        action: {
          src: "https://codepen.io/personable/pen/jPMXPv",
          prompt: "Check out the CodePen",
        },
        details: [
          `CodePen is great for trying out random/long-shot ideas. Most of the time,
          I quietly delete these vision quests before anyone can stumble upon the
          embarrassing wreckage of what, in my head, was going to be amazing.
          Once in a while, though, things work out, and the Pen gets saved.`,
          `This Pen came about because I wanted to see if I could create a
          classic spinner by animating SVG paths with CSS. Not the most original
          idea, but it was fun to figure out. Once that was done, it occurred to me
          that it would be cool to be able to turn _any_ simple SVG into a spinner
          by applying a CSS class to it &#151; so you could do things like serve up a
          unique spinner for each section of an app by just updating the icon.`,
          `Then my occasional need to abstract everything to the point where only
          I can understand it kicked in, and a couple of pretty impenetrable Sass
          mixins later, I had a finished product. The end result looks pretty good &#151;
          although looking back at it now, all that Sass would have been a lot more
          digestible inside a component, with the animation parameters passed in
          as properties.`,
        ],
      },
      {
        name: "Instructure UI",
        color: "#008EE2",
        backgroundColor: "#38b5ff",
        year: "2016",
        items: ["Front-end development"],
        media: {
          alt: "Instructure UI",
          src: "/video/screencast-instui-low.mp4",
          img: "/img/poster-instui.jpg",
        },
        action: {
          src: "https://instructure.design",
          prompt: "Instructure-UI",
        },
        details: [
          `Instructure UI is Instructure's open source React.js- and Figma-based design system.
          It's primarily used to build user interfaces in <a href="https://canvaslms.com" target="_blank" rel="noopener noreferrer">Canvas LMS</a> and its ecosystem of products.`,
          `Canvas has millions of users around the world, which means Instructure UI
          components need to accommodate internationalized text and right-to-left
          language support. By law, the educational institutions Instructure serves have
          stringent accessibility requirements: All components need to work in the three most
          popular screen readers, meet WCAG 2.1 requirements for color contrast and responsive behavior, and be usable by
          keyboard-only users.`,
          `I can't overstate how much I've learned about web development by being part
          of the talented team that puts Instructure UI together. As a core contributor, I've focused on design- and CSS-heavy components like
          <a href="https://instructure.design/#ProgressCircle" target="_blank" rel="noopener noreferrer">ProgressCircle</a> /
          <a href="https://instructure.design/#ProgressBar" target="_blank" rel="noopener noreferrer">ProgressBar</a>,
          <a href="https://instructure.design/#Badge" target="_blank" rel="noopener noreferrer">Badge</a>,
          <a href="https://instructure.design/#Spinner" target="_blank" rel="noopener noreferrer">Spinner</a>,
          <a href="https://instructure.design/#TreeBrowser" target="_blank" rel="noopener noreferrer">TreeBrowser</a>,
          <a href="https://instructure.design/#Flex" target="_blank" rel="noopener noreferrer">Flex</a>,
          <a href="https://instructure.design/#AppNav" target="_blank" rel="noopener noreferrer">AppNav</a>,
          <a href="https://instructure.design/#CheckboxGroup" target="_blank" rel="noopener noreferrer">CheckboxGroup</a>,
          and <a href="https://instructure.design/#RadioInputGroup" target="_blank" rel="noopener noreferrer">RadioInputGroup</a>.`,
        ],
      },
      {
        name: "instructure.design Homepage",
        color: "#287A9F",
        backgroundColor: "#ddd",
        year: "2020",
        items: ["Design", "Copywriting", "Front-end development"],
        media: {
          alt: "Instructure UI homepage",
          src: "/video/screencast-instui-homepage-low.mp4",
          img: "/img/poster-instui-homepage.jpg",
        },
        action: {
          src: "https://instructure.design",
          prompt: "instructure.design",
        },
        details: [
          `As we approached releasing version 7.0 of Instructure UI, we had a lot of reasons to feel proud of our design system. Unfortunately, the way our online docs looked was not one of them.`,
          `We'd been kinda busy, you see, tackling hard problems that many design systems shirk &#151; stuff like screenreader support, right-to-left languages, and theming.`,
          `Hard problems take time to solve, but they're worth the effort: By version 7.0, Instructure UI had blossomed into a mature library of components that were great to look at AND accessible. Possibly more accessible than any React-based design system out there! __Unfortunately, our documentation's homepage mentioned none of this and looked like it was designed in Microsoft Word.__`,
          `I was given the task of refreshing our design system’s "first impression" before the release. Putting myself into the shoes of a developer looking around for a design system to use, I wrote copy, being sure to highlight Instructure UI's unique value proposition of aesthetics and accessibility. I then moved to Figma to design the page itself, based on Instructure's brand guidelines. Finally, I implemented the design in our React-based docs app, using, of course, our library's own components themed to use Instructure's corporate look and feel.`,
        ],
      },
    ]}
  />,
  document.getElementById("root")
  /* eslint-enable max-len */
);
