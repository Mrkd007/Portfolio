import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Contentfull design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wide variety of color combination</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Include powerfull UI/UX</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Match latest industry trends</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design on Figma / Adobe XD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Playable Demo from the supported tool</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Contentfull design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wide variety of color combination</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Include powerfull UI/UX</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Match latest industry trends</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design on React / jQuery / Angular / View</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>With chargable documentation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>With chargable support servicess</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Video Editing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Contentfull design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wide variety of color combination</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Include powerfull visual effects</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Match latest industry trends</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design onDavinci resolve</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services