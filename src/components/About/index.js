import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <img src={coverImage} id="my-background" className="my-2" style={{ width: "100%" }} alt="cover" />
      <h1 id="about">About me</h1>
      <div className="my-2">
        <p>
          Hello! Thanks for visiting this site. Let me take a few sentences to help you understand who I am. I was born
          in Wisconsin, raised in upstate New York, and been living in central Florida for the past 24 years.  My wife and
          I settled here to raise our family. I’ve worked the past 22 years for Walt Disney World Parks and Resorts. I’ve
          spent most of that time as a back-end developer, managing guest data in both an operational and marketing
          context. The pandemic was hard on the company, and I was let go as part of an IT downsizing strategy. I’m
          presently honing my back-end computing skills and acquiring new front-end skills through the “full-stack”
          training “Boot Camp” provided at the University of Central Florida. This site harbors my
          portfolio contents, which highlight the work I’ve done developing the full-stack skill set while attending UCF.
          My experience at Disney is documented in my resume. Concerning the 15 years of employment prior to that, well,
          we can share stories, but there is probably little pertinence in the present context. If you are interested
          conversing with me about employment opportunities, I'd love to chat.  Leave your contact information and I'll be
          sure to get back to you.  Thanks for dropping by!
        </p>
      </div>
    </section>
  )
}

export default About