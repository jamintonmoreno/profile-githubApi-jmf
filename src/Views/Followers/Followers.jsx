/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import GithubUser from '../../Components/GithubUser'
import Loader from '../../Components/Loader'

const Followers = () => {
  // Hooks
  const { user } = useParams()

  // State
  const [followers, setfollowers] = useState([])
  const [loader, setloader] = useState(false)

  useEffect(() => {
    setfollowers([])
    setloader(true)
    const handleUserFollowers = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/followers`
      )
      const result = await response.json()
      console.log(result)
      setfollowers(result)
    }
    handleUserFollowers()
    setloader(false)
  }, [user])

  return (
    <div className="flex flex-wrap p-1  ">
      {followers && followers.length > 0 && !loader ? (
        followers.map(user => (
          <GithubUser
            key={user.id}
            avatar={user.avatar_url}
            github={user.html_url}
            github_name={user.login}
            following={null}
            
          />
        ))
      ) : (
        <Loader />
      )}
      <br />
    </div>
  )
}

export default Followers
