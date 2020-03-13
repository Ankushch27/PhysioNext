import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const FAQ = ({ faq, index }) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {faq.question}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>{faq.answer}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default FAQ;
