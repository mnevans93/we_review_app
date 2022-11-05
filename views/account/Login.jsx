const React = require('react')
const Default = require('../layouts/Default')

class Login extends React.Component {
  render () {
    return (
      <Default title='Welcome Back!'>
        <form action='/we-review/account/login' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required /></label>
            <input type='submit' value='Log In' />
          </fieldset>
          <a href='/we-review/account/signup'>New User? Sign up Here!</a>
        </form>
      </Default>
    )
  }
}

module.exports = Login
