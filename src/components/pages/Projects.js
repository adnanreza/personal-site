import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SampleImage from '../layout/office.jpg';
import ResumeBlock from '../layout/ResumeBlock';
import RevealCard from '../layout/RevealCard';

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
  return (
    <Fragment>
      <div className='container'>
        <div class='row'>
          <h4>
            <i class='fas fa-project-diagram'></i>
            {` `}
            Projects
          </h4>
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
            body={ml}
          ></ResumeBlock>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
