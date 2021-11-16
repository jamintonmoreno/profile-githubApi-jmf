import React from 'react'
import { Link } from 'react-router-dom'

const GithubUser = props => {
  const {
    avatar,
    bio,
    name,
    github_name,
    public_repos,
    followers,
    following
  } = props
  return (
    <div className=' card-header w-1/4 m-auto shadow-xl overflow-hidden'>
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
        <h3>{name}</h3>
      </div>
      <div className='flex-row px-3.5'>
        <div className='text-justify'>
          <h3>{bio}</h3>
        </div>
        <div className='flex  text-center py-3 '>
          <div className="flex-row">
            <p>Repos: <b>{public_repos}</b></p>
          </div>
          <div>
            <p>
              <Link to={`/followers/${github_name}`}>
                <span>Followers: <b>{followers} </b></span>
              </Link>
            </p>
          </div>
          <div>
            <p>Following: <b>{following}</b></p>
          </div>
        </div>
      </div>
      <div className='text-center py-3 '>
        <button className='text-center bg-purple-500 w-4/5 align-middle rounded text-white'>
          <a href={`https://github.com/${github_name}?tab=repositories`}>
            Repositorios
          </a>
        </button>
      </div>
    </div>
  )
}

export default GithubUser
