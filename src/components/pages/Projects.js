import React, { Fragment } from 'react';
import ResumeBlock from '../layout/ResumeBlock';

const Projects = () => {
  const alphaGo = [
    'While Go programs have been around since the 1970s, their performance has not come close to achieving professional level playing let alone defeating Go champions. AlphaGo’s journey towards achieving superhuman-level performance in Go came into the spotlight in 2016 when it defeated Go world champion Lee Sedol. While it is easy to be carried away by the enormous hype surrounding AlphaGo’s achievement, it is a worthwhile exercise to delve deeper into how AlphaGo works and in the process demystify some of the hype surrounding this truly extraordinary achievement. This is the primary motivation of this essay. By looking deeper into AlphaGo’s architecture, we can see that it is indeed a combination of techniques, some of which have been developed by researchers in the early days of computer Go, aided with state of the art hardware.'
  ];
  const gt2 = [
    'Network Bandwidth is an important shared resource like the CPU and Memory in datacenters. However, unlike other system resources, cloud providers currently do not provide hard guarantees on minimum bandwidth, and the allocations are often unfair. Nash bargaining has been extensively used in economics to achieve a middle-ground between fairness and efficiency in resource allocation problems. We describe GT2, a game-theoretic framework that models the data center bandwidth allocation problem as a bargaining game, and leverages the underlying theory to derive a Nash Bargaining Solution which achieves our objectives of minimum bandwidth guarantee and fairness.'
  ];
  const ml = [
    'This perspective paper presents the architecture of Convolutional Neural Networks (CNN). We discuss popular techniques used in neural nets in order to understand why these techniques help CNNs perform well at classification. Additionally, we discuss applications of CNNs and conclude by highlighting its strengths and weaknesses.'
  ];
  const bgt = [
    'In multi-agent settings, we often assume that agents will adopt Nash equilibrium strategies. However, studies in experimental economics demonstrate that Nash equilibrium is a poor indicator of human players’ initial behavior in normal-form games.[1] We study ways of improving the best performing behavioral models.'
  ];
  const calTracker = [
    'Designed Single Page App using JavaScript ES6 to track calories consumed',
    'Used the module pattern to design the app',
    'Implemented user interface using HTML5, Materialize CSS and CSS3'
  ];
  const calTracterTechStack = 'fab fa-js';
  const contactOrg = [
    'Designed, developed and deployed a contacts organizer web app using the MERN stack',
    "Developed front-end using React and managed application state using React's ContextAPI",
    'Designed UI using Bootstrap 4, CSS3 and HTML5',
    'Developed REST API using Node.js/Express.js and MongoDB/Mongoose',
    'Deployed web application to Heroku'
  ];
  const contactOrgTechStack = 'fab fa-react';

  const devBook = [
    'Designed, developed and deployed a social network for developers using the MERN stack',
    'Developed front-end using React and managed application state using Redux',
    'Designed UI using Bootstrap 4, CSS3 and HTML5',
    'Developed REST API using Node.js/Express.js and MongoDB/Mongoose',
    'Deployed web application to Heroku'
  ];
  const devBookTechStack = 'fab fa-react';
  const chickenRun = [
    'Designed and developed a web crawler using the LAMP stack',
    'Developed front-end using HTML5, CSS3, jQuery, JavaScript ES6',
    'Developed back-end using PHP and MySQL'
  ];
  const chickenRunTechStack = 'fab fa-php';

  const GitHubProfileLocator = [
    'Designed Single Page App using JavaScript ES6 to dynamically display Github User details based on search terms',
    'Consumed Github API to display user repositories and public details',
    'Implemented user interface using Bootstrap 4'
  ];

  const GitHubProfileLocatorTechStack = 'fab fa-js';

  const headingStyle = {
    padding: '0.5rem 1rem 1rem 0'
  };

  return (
    <Fragment>
      <div className='container'>
        <div class='row'>
          <h4 style={headingStyle}>
            <i class='fas fa-project-diagram'></i>
            {` `}
            Projects
          </h4>
          {/**Featured Projects */}

          <div className='row'>
            <div className='col s12 m12 l12'>
              <ResumeBlock
                heading='devBook - Professional Social Network'
                subheading='React, Redux, Node.js, MongoDB'
                body={devBook}
                list={true}
                links={true}
                gitLink='https://github.com/adnanreza/devBook'
                demoLink='https://rocky-caverns-21921.herokuapp.com/'
                techStack={devBookTechStack}
              ></ResumeBlock>
            </div>

            <div className='col s12 m12 l12'>
              <ResumeBlock
                heading='Contacts Organizer'
                subheading='React, Redux, Node.js, MongoDB'
                body={contactOrg}
                list={true}
                links={true}
                gitLink='https://github.com/adnanreza/contactsOrganizer'
                demoLink='https://immense-beach-76151.herokuapp.com/'
                techStack={contactOrgTechStack}
              ></ResumeBlock>
            </div>

            <div className='col s12 m12 l12'>
              <ResumeBlock
                heading='GitHub Profile Locator'
                subheading='JavaScript ES6, HTML5, CSS3, Bootstrap'
                body={GitHubProfileLocator}
                list={true}
                links={true}
                gitLink='https://github.com/adnanreza/GitHubProfileLocator'
                demoLink='https://adnanreza.github.io/GitHubProfileLocator/'
                techStack={GitHubProfileLocatorTechStack}
              ></ResumeBlock>
            </div>

            <div className='col s12 m12 l12'>
              <ResumeBlock
                heading='Calorie Tracker App'
                subheading='JavaScript ES6, HTML5, CSS3, Materialize CSS'
                body={calTracker}
                list={true}
                links={true}
                gitLink='https://github.com/adnanreza/calTracker'
                demoLink='https://adnanreza.github.io/calTracker/'
                techStack={calTracterTechStack}
              ></ResumeBlock>
            </div>
            <div className='col s12 m12 l12'>
              <ResumeBlock
                heading='chickenRun - Search Engine'
                subheading='Php, MySQL, JavaScript, jQuery, HTML5, CSS3'
                links={true}
                gitLink='https://github.com/adnanreza/ChickenRun'
                body={chickenRun}
                list={true}
                techStack={chickenRunTechStack}
              ></ResumeBlock>
            </div>
          </div>

          {/**Featured Projects End*/}
          {/** 
          <ResumeBlock
            heading='Demystifying AlphaGo'
            subheading='MSc Essay (Spring ‘18)'
            body={alphaGo}
          ></ResumeBlock>
          <ResumeBlock
            heading='GT2: A game-theoretic framework for fair and efficient bandwidth allocation in datacenters'
            subheading='CPSC 527: Computer Communication Protocols (Fall ‘17)'
            body={gt2}
          ></ResumeBlock>
          <ResumeBlock
            heading='Understanding Convolutional Neural Networks'
            subheading='CPSC 540: Machine Learning (Spring ‘17)'
            body={ml}
          ></ResumeBlock>
          <ResumeBlock
            heading='Improving Human Behavior Prediction in Simultaneous-Move Games'
            subheading='CPSC 522: Artificial Intelligence II (Spring ‘16)'
            body={bgt}
          ></ResumeBlock>*/}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
