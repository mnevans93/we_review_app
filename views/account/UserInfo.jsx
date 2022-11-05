const React = require('react')
const Default = require('../layouts/Default')

class UserInfo extends React.Component {
  render () {
    // const { username } = req.body
    return (
      <Default title={`Account Page`}>
        {/* <h1>Username: {username}</h1> */}
        <a href={`/we-review/account/logout`}>Log Out</a>
      </Default>
    )
  }
}

module.exports = UserInfo
