import JSConfetti from 'js-confetti';
import * as Style from './AppStyles';
import './App.css';
import c1 from './assets/card1.jpg';
import c2 from './assets/card2.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const jsConfetti = new JSConfetti();
  return (
    <div className='App'>
      <nav>
        <a className='homeIcon' href='/'>
          <img src='/vite.svg' alt='RockHacks logo' />
        </a>
        <Style.NavLink_GRADIENT_WARM1 href='#about'>Home</Style.NavLink_GRADIENT_WARM1>
        <Style.NavLink_GRADIENT_WARM1 href='#about'>About</Style.NavLink_GRADIENT_WARM1>
        <Style.NavLink_GRADIENT_COOL2 href='#faq'>FAQ</Style.NavLink_GRADIENT_COOL2>
        <Style.NavLink_GRADIENT_COOL1 href='#sponsors'>Sponsors</Style.NavLink_GRADIENT_COOL1>
      </nav>

      <section className='home'>
        <h1>rock hacks</h1>
        <h3>October 21 – 23</h3>
        <div className='card'>
          <button
            onClick={() => {
              jsConfetti.addConfetti({ confettiRadius: 10, confettiNumber: 1500 });
              // jsConfetti.addConfetti({ emojis: ['💾'] });
              window.open(
                'https://my.forms.app/dyutiphaneesh/rockhacksregistration',
                '_blank',
                'popup'
              );
              // setTimeout(() => {
              //   window.open(
              //     'https://my.forms.app/dyutiphaneesh/rockhacksregistration',
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

      <section className='about'>
        <h2>Welcome to Rock Hacks!</h2>
        <p>
          Running for 36 hours, Rock Hacks will be the first IRL hackathon in North Austin. Students
          will participate in various workshops, mini events, and create their own projects within
          our track areas!
        </p>
        <Container>
          <Row>
            <Col className='card' style={{ objectFit: 'cover' }}>
              <img src={c1} />
            </Col>
            <Col>some text</Col>
          </Row>
          <Row>
            <Col>some text</Col>
            <Col className='card'>
              <img src={c2} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='faq'>
        <h1>FAQ</h1>
        <Container>
          <Row>
            <Col>
              <h4>what is a hackathon?</h4>
            </Col>
          </Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
        </Container>
      </section>
      <section className='sponsors'></section>
      <section className='team'></section>
    </div>
  );
}

export default App;
