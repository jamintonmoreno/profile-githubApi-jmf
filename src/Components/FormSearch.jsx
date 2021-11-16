import React from 'react'

const FormSearch = ({ handleUserName, handledataApi }) => {
  return (
    <form
      action=' '
      className='w-5/6 m-auto mt-10 text-center'
      onSubmit={e => handledataApi(e)}
    >
      <input
        className='border-2 rounded-md p-1 mx-0.5  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent '
        type='text'
        placeholder='User Name'
        onChange={({ target }) => handleUserName(target)}
      />
      <button
        className=' bg-purple-700 hover:bg-purple-900 p-1 rounded-md text-lg text-white'
        type='submit'
      >
        Search
      </button>
    </form>
  )
}

export default FormSearch
