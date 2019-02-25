function AboutText(props) {
  console.log("ABOUT TEXT", props)
    return <div>Welcome to next.js About!
      <p>{props.text}</p>
    </div>
  }
  
  export default AboutText