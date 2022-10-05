import * as Style from './AppStyles';
import JSConfetti from 'js-confetti';
import './App.css';
import c1 from './assets/card1.png';
import c2 from './assets/card2.png';
import { Container, Row, Col } from 'react-bootstrap';

//@ts-ignore
import Team from './coolStuffDontLook';

function App() {
  var qAndA_Right = {
    "Does this cost money?":"Nope! Rock Hacks is a 100% free event to attend, and we'll provide you with cool swag, food, a venue, and other help throughout the event!",
    "What if this is my first time at a hackathon?":"Don't worry and take it easy! There will be many workshops and events to help guide you through the hackathon. There will also be plenty of mentors around to assist you and help with any questions. Come for the experience!",
    "What if I'm new to coding?":"At Rock Hacks, complete beginners are welcome! Learn as you go in our various workshops and with our mentors! Come in, meet new people, get into a workshop, and build on a project!"}

  var qAndA_Left = {"Who can participate?": "Any current student from grades 8 to 12! If you're under/over that grade level, email us & we'll see what we can do. And if you're interested in mentoring, send us an email!",
    "What can I make?":"Anything! A website, app, game, etc. Judges will rate projects on creativity, technical skill, polishing, and impact in the real world.",
    "Do I need a team?":"Nope! Hackers can participate individually as well as in teams of upto 4 people.",
    "Who runs this? Is it supervised?":"Rock Hacks is organized completely by high schoolers and sponsored via a nonprofit: Hack Club. We'll have many adult mentors supervising and walking around to answer any questions you may have during the event. Once you register there will also be an info session on Zoom for how sleep accomodations are going to work.",
  }
  const jsConfetti = new JSConfetti()
  return (
    <div className='App'>
      <nav className='nav-container'>
        <a className='homeIcon' href='/'>
          <img className="logo" src='../public/logo.jpeg' alt='RockHacks logo' />
        </a>
        <span className='nav-span'>
          <Style.NavLink_GRADIENT_WARM1 href='#about'>About</Style.NavLink_GRADIENT_WARM1>
          <Style.NavLink_GRADIENT_COOL2 href='#faq'>FAQ</Style.NavLink_GRADIENT_COOL2>
          <Style.NavLink_GRADIENT_COOL1 href='#team&sponsors'>Team & Sponsors</Style.NavLink_GRADIENT_COOL1>
        </span>
      </nav>

      <section className='home'>
        <h1 className='code-font'>rock hacks</h1>
        <h2 className='code-font'>October 21 – 23</h2>
        <div className='register code-font'>
          <button className='register-button'
            onClick={() => {
              jsConfetti.addConfetti({
                confettiColors: [
                  "#90AFFF", "#D6E1FF"
                ],
              })
              .then(() =>
              window.location.href='https://my.forms.app/form/6331005dc4ed8f4625a2b99e');
              // window.open(
              //   'https://my.forms.app/form/6331005dc4ed8f4625a2b99e',
              //   '_blank',
              //   'popup'
              // );
              // setTimeout(() => {
              //   window.open(
              //     'https://my.forms.app/form/6331005dc4ed8f4625a2b99e',
              //     '_blank',
              //     'popup'
              //   );
              // }, 250);
            }}>Register now!</button>

        </div>
      </section>

            
      <div className='intro-container' id="about">
            <h1 className='code-font not-bold'>Welcome to Rock Hacks!</h1>
            <p>
            Running for 36 hours, Rock Hacks will be the first IRL hackathon in North Austin. Students
          will participate in various workshops, mini events, and create their own projects within
          our track areas!
            </p>
      </div> 

      <section className='about'>          
        <Container fluid='md' className='code-font'>
          <Row>
            <Col style={{ objectFit: 'cover' }}>
              <img className="image" src={c1} />
            </Col>
            <Col>Workshop Schedule</Col>
          </Row>
          <Row>
            <Col>Hackathon Schedule</Col>
            <Col>
              <img className="image" src={c2} />
            </Col>
          </Row>
        </Container>
      </section>

      {/*
        "Who can participate?": "Any current student from grades 8 to 12! If you're under/over that grade level, email us & we'll see what we can do. And if you're interested in mentoring, send us an email!"
       */}
      <section className='faq' id="faq">
        <h3 className='faq-title'>FAQ</h3>
        <Container fluid='md'>
        <Container className="faq-container">
          <Row>
            <Col className='faq-left'>
              {Object.entries(qAndA_Left).map(([key, value]) => (
                                <div className="col1">
                                    <p className="faq-question faq-text">
                                        {key}
                                    </p>
                                    <p className='faq-answer faq-text'>
                                      {value}
                                    </p>
                                </div>
                            ))}
            </Col>
            <Col>
              {Object.entries(qAndA_Right).map(([key, value]) => (
                                <div className="col1">
                                    <p className="faq-question faq-text">
                                        {key}
                                    </p>
                                    <p className='faq-answer faq-text'>
                                      {value}
                                    </p>
                                </div>
                            ))}
            </Col>
            
          </Row>
        </Container>
        </Container>
      </section>
      {/* sponsors */}
      <section className='sponsor' id="team&sponsors">
        <h3 className='sponsor-title'>Sponsors</h3>
        <Container className='sponsor-container'>
          <Row>
            <Col className='sponsor-column'>
              <img className='sponsor-image' src='../public/sponsors/taskade.png'></img>
            </Col>
            <Col className='sponsor-column-right'>
              <img className='sponsor-image' src='../public/sponsors/wolfram.png'></img>
            </Col>
          </Row>
          <Row>
            <Col className='sponsor-column'>
              <img className='sponsor-image' src='../public/sponsors/hack_club.png'></img>
            </Col>
          </Row>
        </Container>
      </section>
      {/* team */}
      <section className='team'>
        <Team />  
      </section>
      
      <section className='footer'>
         <p className='code-font'>Rock Hacks, Run by the awesome Rock Hacks team!</p>
         <p className='code-font smaller-font'>
             Fiscally sponsored by Hack Club
             <br></br>
             Nonprofit EIN: 81-2908499
             </p>
      </section>
      {/* <Ppl src={url_for_shrek} name='Sir Shrek' description='Literally god...of ogres'/> */}
    </div>

  );
}

export default App;
