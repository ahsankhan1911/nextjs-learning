import React from 'react'
import AgentText from './components/AgentText'

class Agent extends React.Component {
  static async getInitialProps({ req }) {
    console.log("REQ >>>>> ",req)
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
     <AgentText userAgent={this.props.userAgent}/>
    )
  }
}

export default Agent