import React from 'react';
import Project from '../project/Project';
import './ProjectList.css';
import {projetcs} from '../../data';

function ProjectList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur, neque vero voluptates facere quidem ex nostrum laboriosam quod odit iusto error cupiditate suscipit officiis magnam beatae, quos nisi ullam.
          Voluptatibus laborum minus sit aut sunt quos, animi consectetur, quo sequi expedita optio nihil? Molestias esse architecto perferendis consequuntur voluptatum itaque quia eum! Veniam eum vitae quaerat maxime, dolor minima!
        </p>
      </div>
      <div className="pl-list">
        {projetcs.map((item) => {
          return <Project key={item.id} img={item.img} link={item.link} />
        })}
      </div>
    </div>
  )
}

export default ProjectList