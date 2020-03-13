import React, { Component } from 'react';
import { faqs } from '../../data/FAQdata';
import FAQ from './FAQ';
import { Accordion } from 'react-bootstrap';

class FAQs extends Component {
  state = {
    faqs
  };

  render() {
    return (
      <div className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Accordion>
                {this.state.faqs.map((faq, i) => (
                  <FAQ faq={faq} index={i} key={i} />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQs;
