import Ppl from './PersonWidget';
import { Container, Row, Col } from 'react-bootstrap';
import amishaImage from './assets/team/amisha.jpeg'
import dyutiImage from './assets/team/dyuti.jpeg'
import nithinImage from './assets/team/nithin.jpeg'
import sopanImage from './assets/team/sopan.jpeg'
import tobyImage from './assets/team/toby.jpeg'

export default function Team() {
  return(
    <section className='team'>
        <h2 className="team-title">
          Team
        </h2>
        <Container>
          <Row>
            <Col>
              <div className='ppl-container'>
              <img className='ppl-img' src={amishaImage}></img>
              <span className='ppl-text'>
              <div className='ppl-name'>{'Amisha Sao'}</div>
              <div className='ppl-description'>{'Executive Director, co-founder'}</div>
              </span>
              </div>
            </Col>
            <Col>
              <div className='ppl-container'>
              <img className='ppl-img' src={nithinImage}></img>
              <span className='ppl-text'>
              <div className='ppl-name'>{'Nithin Reddy'}</div>
              <div className='ppl-description'>{'Executive Director, co-founder'}</div>
              </span>
              </div>
            </Col>
            <Col>
              <div className='ppl-container'>
              <img className='ppl-img' src={sopanImage}></img>
              <span className='ppl-text'>
              <div className='ppl-name'>{'Sopan Jalkote'}</div>
              <div className='ppl-description'>{'Executive Director, co-founder'}</div>
              </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='ppl-container'>
              <img className='ppl-img' src={dyutiImage}></img>
              <span className='ppl-text'>
              <div className='ppl-name'>{'Dyuti Phaneesh'}</div>
              <div className='ppl-description'>{'Executive Director, co-founder'}</div>
              </span>
              </div>
            </Col>
            <Col>
              <div className='ppl-container'>
              <img className='ppl-img' src={tobyImage}></img>
              <span className='ppl-text'>
              <div className='ppl-name'>{'Toby Saunders'}</div>
              <div className='ppl-description'>{'Developer'}</div>
              </span>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
    </section>
  )
}
