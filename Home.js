import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
  displayName = Home.name;

  render() {
    return (
    <header className="masthead text-center d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1>
              <strong>Hi. My name is Victor.</strong>
            </h1>
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">Master of Science student in Computer Science</p>
            {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
          </div>

        </div>
      </div>
    </header>
    );
  }
}
