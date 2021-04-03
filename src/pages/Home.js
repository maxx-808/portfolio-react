import React from "react";
const Home = () => {
  return (
    <div className="container about-container">
      <h1>About Me</h1>
      <br />
      <div className="card">
        <p>Hi, my name is Max Higa, born and raised on Oahu, Hawaii.</p>
        <p>
          For the past 5 or so years I have been fascinated by computers and the
          internet, wondering how people can actually make electronics and
          technology and how the wireless world works. I got my first gaming
          computer in 2017 from saving up money at the job I was working at and
          my love for technology never stopped. Due to covid, it felt like I had
          a chance to pause life for a bit and think of what I want to do. Being
          introduced to a class that is solely for the subject you want to learn
          and being able to show your worth through your own work appealed to me
          and made me realize that I could possibly work in creating things of
          the internet which always interested me. Starting to code has opened a
          whole new world for me.
        </p>
      </div>

      <h4>Work Experience</h4>
      <div className="card">
        <p>
          I have worked at Consolidated Theatres Mililani for just under 5
          years. My work there includes everything from cleaning and customer
          service, to leading the kitchen, managing stock and orders, as well as
          leading the team throughout the shift. I have left this job to focus
          fully on my coding class that I just finished through UC Berkeley
          Extension for full stack web development.
        </p>
        <p>
          So far, I have learned a myriad of skills for web development based on
          JavaScript. Mostly sticking to HTML, CSS, and JavaScript; we have
          expanded into their libraries and attached programs and styles. We
          have mainly focused on Reactjs, express, Node.js, mongoDB and MySQL to
          create full stack applications.
        </p>
      </div>
      <br />
      <h4>What I have learned:</h4>
      <div className="card">
        <ul>
          <li>Basics of HTML, CSS, JavaScript</li>
          <li>CSS libraries like bootstrap and materialize</li>
          <li>
            JavaScript necessities like jQuery, API calls, JSX, and localStorage
          </li>
          <li>Ways of coding like MVC, CRUD functionality, and MERN stack</li>
          <li>
            Databases like MySQL and MongoDB as well as integrating them to be
            used in apps
          </li>
          <li>
            Node.js: using inquirer, express, Sequelize, React and much more
          </li>
        </ul>
        <br />
        <p>
          Before this class, I was working at a movie theater since the middle
          of highschool. I went up from doing cashier and cleaning work to
          becoming an assistant manager doing tasks like inventory, logging info
          in excel sheets, and much more. I've had quite the diverse work
          history working there and it has helped me to have a good work ethic
          during the class I am currently in.
        </p>
      </div>
      <br />
      <h4>What am I doing now: </h4>
      <div className="card">
        <p>
          Now that I have completed this course, I am actively looking for a job
          in the industry. I am also constantly studying and learning more about
          web development and software engineering as well as working on
          personal projects.
        </p>
      </div>
    </div>
  );
};

export default Home;
