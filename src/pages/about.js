import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Work" />
    <section>
      <h1>Work</h1>
    </section>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
