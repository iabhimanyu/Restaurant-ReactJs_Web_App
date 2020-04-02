import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import {FadeTransform, Fade, Stagger } from "react-animation-components";

function About(props) {
    function RenderLeader({ leader }) {
      return (
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>


        <Stagger in>
        <Media className="mt-5">
        <Fade in>
          <Media left className="mr-5">
            <Media object src={baseUrl + leader.image} alt={leader.name} />
          </Media>
         
          <Media body>
            <Media heading>{leader.name}</Media>
            <p>{leader.designation}</p>
            {leader.description}
          </Media>
          </Fade>
        </Media>
        </Stagger>
        </FadeTransform>
      );
    }
  
    function RenderContent({ leaders, isLoading, errMess }) {
      if (isLoading) {
        return <Loading />;
      } else if (errMess) {
        return <h4>{errMess}</h4>;
      } else
        return (
          <Stagger in>
            {props.leaders.map(leader => (
              <Fade in key={leader.id}>
                <RenderLeader key={leader.id} leader={leader} />
              </Fade>
            ))}
          </Stagger>
        );
    }
  
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>About Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-6">
            <h2>Our History</h2>
            <p>
              Started in 2020, Ristorante con Fusion quickly established itself as
              a culinary icon par excellence in India. With its unique brand
              of world fusion cuisine that can be found nowhere else, it enjoys
              patronage from the A-list clientele in Hong Kong. Featuring four of
              the best three-star Michelin chefs in the world, you never know what
              will arrive on your plate the next time you visit us.
            </p>
            <p>
              The restaurant traces its humble beginnings to{" "}
              <em>The Frying Pan</em>, a successful chain started by our CEO, Mr.
              Peter Pan, that featured for the first time the world's best
              cuisines in a pan.
            </p>
          </div>
          <div className="col-12 col-md-5">
            <Card>
              <CardHeader className="bg-primary text-white">
                Facts At a Glance
              </CardHeader>
              <CardBody>
                <dl className="row p-1">
                  <dt className="col-6">Started</dt>
                  <dd className="col-6">14 Feb. 2020</dd>
                  <dt className="col-6">Major Stake Holder</dt>
                  <dd className="col-6">Spicy Raj  Foods Inc.</dd>
                  <dt className="col-6"> Turnover</dt>
                  <dd className="col-6">$1,250,375</dd>
                  <dt className="col-6">Employees</dt>
                  <dd className="col-6">40</dd>
                </dl>
              </CardBody>
            </Card>
          </div>
          <div className="col-12">
            <Card>
              <CardBody className="bg-faded">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    You better cut the pizza in four pieces because I'm not hungry
                    enough to eat six.
                  </p>
                  <footer className="blockquote-footer">
                    Yogi Berra,
                    <cite title="Source Title">
                      The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                      2014
                    </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row row-content">
          <Stagger in>
          <div className="col-12">
            <Fade in>
            <h2>Corporate Leadership</h2>
            </Fade>
          </div>
          </Stagger>
          <div className="col-12">
            <Stagger in>
            <Media list>
              <Fade in>
              <RenderContent
                leaders={props.leader}
                isLoading={props.leaderLoading}
                errMess={props.leaderErrMess}
              />
              </Fade>
            </Media>
            </Stagger>
          </div>
        
        </div>
        
      </div>
    );
  }
  
  export default About;
  