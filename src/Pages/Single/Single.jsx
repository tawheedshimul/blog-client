import React from 'react'
import { TbPhotoEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

function Single() {
  return (
    <div className='single container'>
      <div className="content">
        <img src="https://img.freepik.com/premium-vector/colorful-bird-illustration-gradient-abstract_343694-1740.jpg" alt="" />
        <div className="user">
          <img src="https://img.freepik.com/premium-vector/colorful-bird-illustration-gradient-abstract_343694-1740.jpg" alt="" />
          <div className="info">
            <div className='font-bold'>Jhon</div>
            <div>Post 2 days ago</div>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}><TbPhotoEdit className='h-8 w-8 text-green-500' /></Link>
          </div>
          <div className="delete"><RiDeleteBin6Line className='h-8 w-8 text-red-700' /></div>

        </div>
        <div className='text-2xl mt-10  font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vero?</div>
        <div className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quisquam dignissimos repellendus fugiat amet laudantium modi aspernatur! Modi deserunt accusantium, est repellat natus dolorem quibusdam qui assumenda earum quas, alias voluptatibus voluptate magni officiis sunt perferendis repellendus enim, tempora fugiat vel? Dolorem iure, ratione nostrum, sapiente cupiditate unde quos error nihil harum quo nobis, saepe aut. Impedit nisi ullam quo inventore temporibus, obcaecati, totam unde alias consectetur odit, soluta eos? Eum officiis ad dolorum reiciendis ab voluptatem doloremque minima! Dicta, libero debitis fugit in, facilis laudantium quis officia laborum culpa praesentium incidunt labore dolore? Sequi, incidunt! Iste, exercitationem aliquid. Cupiditate?</div>
      </div>
      <Menu/>
    </div>
  )
}

export default Single;