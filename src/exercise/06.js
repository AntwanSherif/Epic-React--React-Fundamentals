// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function ErrorDisplay({errorMessage}) {
  if (!errorMessage) return null

  return (
    <div
      role="alert"
      style={{fontSize: 'small', color: 'red', marginBottom: 5}}
    >
      {errorMessage}
    </div>
  )
}

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const handleUserNameChange = e => {
    const {value} = e.target
    const isValidInput = value === value.toLowerCase()

    setError(isValidInput ? null : 'Username must be lower case')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const userName = e.target.elements.username.value
    onSubmitUsername(userName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleUserNameChange}
        />

        <ErrorDisplay errorMessage={error} />
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
