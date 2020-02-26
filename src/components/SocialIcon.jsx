import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const SOCIAL_MAPPING = {
  twitter: {
    component: faTwitter,
    link: "https://twitter.com/gregbekher",
  },
  github: {
    component: faGithub,
    link: "https://github.com/bekher",
  },
  linkedin: {
    component: faLinkedin,
    link: "https://linkedin.com/in/bekher",
  },
  instagram: {
    component: faInstagram,
    link: "https://instagram.com/gregbekher",
  },
}

export default ({ type = "twitter" }) => {
  return (
    <a href={SOCIAL_MAPPING[type].link}>
      <FontAwesomeIcon color="white" icon={SOCIAL_MAPPING[type].component} />
    </a>
  )
}
