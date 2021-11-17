import React from 'react'
import {Link} from 'react-router-dom'

const CardFollowers = (props) => {
    const {avatar, github_name, followers} = props
    return (
        <div className=' border-2 border-gray-100 card-header w-60 m-5 shadow-xl overflow-hidden'>
      <div className='items-center object-center p-4 text-center'>
        <img
          src={avatar}
          alt='github_name'
          className='m-auto w-24 h-24 rounded-full'
        />
        <h2 className='m-auto items-center pt-1.5'>
          <a href={`https://github.com/${github_name}`}>
            <b>{github_name}</b>
          </a>
        </h2>
        
      </div>
      <div className='flex-row px-3.5'>
        
        <div className='flex  text-center py-3 justify-center'>
            <p>
              <Link to={`/followers/${github_name}`}>
                <span><b>Followers{followers} </b></span>
              </Link>
            </p>
         </div>
      </div>
      <div className='text-center py-3 '>
        <button className='text-center bg-purple-700 w-4/5 align-middle rounded text-white'>
          <a href={`https://github.com/${github_name}?tab=repositories`}>
            Repositorios
          </a>
        </button>
      </div>
    </div>
    )
}

export default CardFollowers
