import React, { Component } from 'react';
import './About.css';
import SectionContent from '../../../components/SectionContent/SectionContent';
import Background from "../../../assets/images/test.jpg";

class About extends Component {
  state = {
    // ID: this.props.ID
  }

  constructor() {
    super()
  }

  render() {
    return (
      <div className="About" >
        <div className="col-background">
        </div>
        <div className="col-inner">
          <div className="col-sm-6">
            <div className="image" style={{backgroundImage: "url("+ Background +")"}}>
            </div>
          </div>
          <div className="col-sm-6">
            <SectionContent header="We can take your business to the next level"
              text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean"
              linkText="View Services"
              linkUrl="#" />
          </div>
        </div>

      </div>
    );
  }

}

export default About;
