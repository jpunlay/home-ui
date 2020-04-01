import React from "react"
import Thumbnail from "./Thumbnail"

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/lamp"
        image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Project Placeholder"
        category="Mobile App"
      />
    </div>
  )
}

export default Projects;