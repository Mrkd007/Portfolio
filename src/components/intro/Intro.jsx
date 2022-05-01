import React from 'react';
import './intro.css';
import ProfilePic from '../../img/kd.png'

function intro() {
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Krishna Devashish</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">UI / UX Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I am a keen learner in front-end technologies and love to explore more, achieve more for myself as well as for the employer. I explore my field as much as possible and get myself engaged in real-life projects. I push myself to become a better developer tomorrow and contribute to society by skills achieved.
          </p>
        </div>
        <svg  id="Layer_1" x="0px" y="0px" viewBox="0 0 299.86 299.86" className='i-scroll' stroke='blue'>
          <g>
            <g>
              <path d="M175.45,31.9h-20.135c-2.642-8.143-10.051-13.149-15.759-17.003c-4.313-2.909-8.766-5.921-8.766-8.517    c0-3.528-2.852-6.38-6.38-6.38s-6.38,2.852-6.38,6.38c0,9.379,7.643,14.534,14.387,19.089c3.533,2.388,6.352,4.389,8.272,6.431    H124.41c-41.323,0-70.18,29.476-70.18,71.673V204.16c0,52.769,42.931,95.7,95.7,95.7s95.7-42.931,95.7-95.7V103.573    C245.63,61.376,216.773,31.9,175.45,31.9z M232.87,103.573v4.887h-63.8V89.32c0-3.528-2.852-6.38-6.38-6.38h-6.38V44.66    c8.972,0,19.14,0,19.14,0C209.794,44.66,232.87,68.336,232.87,103.573z M156.31,95.7v38.28h-12.76V95.7H156.31z M66.99,103.573    c0-35.237,23.076-58.913,57.42-58.913c0,0,10.168,0,19.14,0v38.28h-6.38c-3.528,0-6.38,2.852-6.38,6.38v19.14h-63.8V103.573z     M232.87,204.16c0,45.732-37.208,82.94-82.94,82.94s-82.94-37.208-82.94-82.94v-82.94h63.8v19.14c0,3.528,2.852,6.38,6.38,6.38    h25.52c3.528,0,6.38-2.852,6.38-6.38v-19.14h63.8V204.16z"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={ProfilePic} className='i-img' alt="KD" />
      </div>
    </div>
  )
}

export default intro