import AboutText from './components/AboutText'

function About(props) {
  console.log("ABOUT PROPS", props)
  return <AboutText text={props.url.query.text}/>
}

export default About