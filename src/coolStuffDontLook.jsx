import Ppl from './PersonWidget';
import { Container, Row, Col } from 'react-bootstrap';

export default function Team() {
  //@ts-ignore
  let url_for_shrek = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVDR58XvoG5HUAiw0zdPuPZXd3hsQIw8HZQ&usqp=CAU';
  let teamMember = [
    ['../public/team/amisha.jpeg', 'Amisha Sao', 'Executive Director, co-founder'], 
    ['../public/team/nithin.jpeg', 'Nithin Reddy', 'Executive Director, co-founder'], 
    ['../public/team/sopan.jpeg', 'Sopan Jalkote', 'Executive Director, co-founder'], 
    ['../public/team/dyuti.jpeg', 'Dyuti Phaneesh', 'Executive Director, co-founder'],
    ['../public/team/toby.jpeg', 'Toby Saunders', 'Developer']];

  return(
    <section className='team'>
        <h2 className="team-title">
          Team
        </h2>
        <Container>
          <Row>
            <Col>
              <Ppl src={teamMember[0][0]} name={teamMember[0][1]} description={teamMember[0][2]} />
            </Col>
            <Col>
              <Ppl src={teamMember[1][0]} name={teamMember[1][1]} description={teamMember[1][2]} />
            </Col>
            <Col>
              <Ppl src={teamMember[2][0]} name={teamMember[2][1]} description={teamMember[2][2]} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Ppl src={teamMember[3][0]} name={teamMember[3][1]} description={teamMember[3][2]} />
            </Col>
            <Col>
              <Ppl src={teamMember[4][0]} name={teamMember[4][1]} description={teamMember[4][2]} />
            </Col>
            <Col></Col>
          </Row>
        </Container>
    </section>
  )
}