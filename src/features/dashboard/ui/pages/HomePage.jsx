import React from 'react'
import { useDispatch } from 'react-redux'
import { themeToggle } from '../../../../shared/state/themeSlice'

const HomePage = () => {

  // Get the dispatch function to send actions to Redux.
  let dispatch = useDispatch()

  const handleTheme = () => {
      // By default, the theme is dark.
      // When the button is clicked, dark changes to light,
      // and light changes back to dark.
      dispatch(themeToggle())
  }

  return (
    <div>
      <h1>HOME PAGE</h1>

      {/* Click this button to switch between dark and light themes. */}
      <button onClick={handleTheme}>change theme</button>
    </div>
  )
}

export default HomePage