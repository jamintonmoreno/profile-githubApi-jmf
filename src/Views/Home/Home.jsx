import React, { useState } from 'react'

//Components
import FormSearch from '../../Components/FormSearch'
import GithubUser from '../../Components/GithubUser'
import Loader from '../../Components/Loader'

const Home = () => {
  //States
  const [userName, setuserName] = useState('')
  const [dataProfiles, setDataProfiles] = useState('')
  const [loader, setLoader] = useState(false)

  // Funciones
  const handleUserName = ({ value }) => {
    setuserName(value)
  }

  const handledataApi = async e => {
    e.preventDefault()
    setDataProfiles(null)
    setLoader(true)
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
    console.log(data)
    setDataProfiles(data)
    setLoader(false)
  }

  return (
    <div className="text-center flex flex-wrap justify-center items-center m-5">
      <FormSearch
        handleUserName={handleUserName}
        handledataApi={handledataApi}
      />
      <br />
      <div className=''>
        {dataProfiles ? (
          <GithubUser
            avatar={dataProfiles?.avatar_url}
            bio={dataProfiles?.bio}
            github_name={dataProfiles?.login}
            name={dataProfiles?.name}
            public_repos={dataProfiles?.public_repos}
            followers={dataProfiles?.followers}
            following={dataProfiles?.following}
          />
        ) : null}
      </div>

      {loader && <Loader />}
      
    </div>
  )
}

export default Home
