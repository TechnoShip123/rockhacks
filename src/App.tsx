import JSConfetti from 'js-confetti';
import * as Style from './AppStyles';
import './App.css';
import c1 from './assets/card1.png';
import c2 from './assets/card2.png';
import { Container, Row, Col } from 'react-bootstrap';

//@ts-ignore
import Ppl from './PersonWidget.jsx';

function App() {
  const qAndA_Right = {
    'Does this cost money?':
      "Nope! Rock Hacks is a 100% free event to attend, and we'll provide you with cool swag, food, a venue, and other help throughout the event!",
    'What if this is my first time at a hackathon?':
      "Don't worry and take it easy! There will be many workshops and events to help guide you through the hackathon. There will also be plenty of mentors around to assist you and help with any questions. Come for the experience!",
    "What if I'm new to coding?":
      'At Rock Hacks, complete beginners are welcome! Learn as you go in our various workshops and with our mentors! Come in, meet new people, get into a workshop, and build on a project!'
  };

  const qAndA_Left = {
    'Who can participate?':
      "Any current student from grades 8 to 12! If you're under/over that grade level, email us & we'll see what we can do. And if you're interested in mentoring, send us an email!",
    'What can I make?':
      'Anything! A website, app, game, etc. Judges will rate projects on creativity, technical skill, polishing, and impact in the real world.',
    'Do I need a team?':
      'Nope! Hackers can participate individually as well as in teams of upto 4 people.',
    'Who runs this? Is it supervised?':
      "Rock Hacks is organized completely by high schoolers and sponsored via a nonprofit: Hack Club. We'll have many adult mentors supervising and walking around to answer any questions you may have during the event. Once you register there will also be an info session on Zoom for how sleep accomodations are going to work."
  };

  const jsConfetti = new JSConfetti();
  return (
    <div className='App'>
      <nav>
        <a className='homeIcon' href='/'>
          <img src='/logo.svg' alt='RockHacks logo' />
        </a>
        <Style.NavLink_GRADIENT_WARM1 href='#about'>Home</Style.NavLink_GRADIENT_WARM1>
        <Style.NavLink_GRADIENT_WARM1 href='#about'>About</Style.NavLink_GRADIENT_WARM1>
        <Style.NavLink_GRADIENT_COOL2 href='#faq'>FAQ</Style.NavLink_GRADIENT_COOL2>
        <Style.NavLink_GRADIENT_COOL1 href='#sponsors'>Sponsors</Style.NavLink_GRADIENT_COOL1>
      </nav>

      <section className='home'>
        <h1 className='code-font'>rock hacks</h1>
        <h2 className='code-font'>October 21 – 23</h2>
        <div className='register code-font'>
          <button
            className='register-button'
            onClick={() => {
              jsConfetti.addConfetti({ confettiRadius: 10, confettiNumber: 1500 });
              // jsConfetti.addConfetti({ emojis: ['💾'] });
              window.location.href = 'https://my.forms.app/form/6331005dc4ed8f4625a2b99e';
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
            }}
          >
            Register now!
          </button>
        </div>
      </section>

      <div className='intro-container'>
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
              <img src={c1} />
            </Col>
            <Col>some text</Col>
          </Row>
          <Row>
            <Col>some text</Col>
            <Col>
              <img src={c2} />
            </Col>
          </Row>
        </Container>
      </section>

      {/*
        "Who can participate?": "Any current student from grades 8 to 12! If you're under/over that grade level, email us & we'll see what we can do. And if you're interested in mentoring, send us an email!"
       */}
      <section className='faq'>
        <h3 className='faq-title'>FAQ</h3>
        <Container fluid='md'>
          <Row>
            <Col>
              {Object.entries(qAndA_Left).map(([key, value]) => (
                <div className='col1'>
                  <p className='faq-question faq-text'>{key}</p>
                  <p className='faq-answer faq-text'>{value}</p>
                </div>
              ))}
            </Col>
            <Col>
              {Object.entries(qAndA_Right).map(([key, value]) => (
                <div className='col1'>
                  <p className='faq-question faq-text'>{key}</p>
                  <p className='faq-answer faq-text'>{value}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* sponsors */}
      <section className='sponsor'>
        <h3>SPONSORS</h3>
        <img src='../assets/wolfram-logo.jpg'></img>
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

// function Info(props) {
//   return(
//       <div className="info-container">
//           <h2>{props.title}</h2>
//           <div className='info-box'>
//               <p className='info-text'>
//                   {props.info1}
//                   <br></br>
//                   {props.info2}
//                   <br></br>
//                   {props.info3}
//                   <br></br>
//                   {props.info4}
//                   <br></br>
//                   {props.info5}
//               </p>
//           </div>
//       </div>
//   )
// }

// function PictureWithCaption(props) {
//   return(
//       <div className="container">
//           <img className='image-with-caption' src={props.pictureUrl}></img>
//           <div className="caption caption-text">
//               {props.caption}
//           </div>
//       </div>
//   )

export default App;
