import React from "react"

import SubPageIntro from '../components/sub-page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"

const FaqPage = () => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    {SubPageIntro('FAQ')}

      <label className='faq-label' htmlFor='one'>
        <input className='faq-checkbox' id='one' type='checkbox'></input>
        <div>Do I need an level of experience?</div>
        <div className='faq-content'>Yes. You should be able to write a code somewhere beyond "hello world" in a language of your choosing. If you are a designer or marketer, we expect some degree of experience in your area.</div>
      </label>
      <input className='faq-checkbox' id='two' type='checkbox'></input>
      <div className='faq-item'>
        <label className='faq-label' htmlFor='two'>How long is the hackathon?</label>
        <div className='faq-content'>The hackathon starts on the May 10th at 10am and goes until May 10th, 4:30pm. We expect you to attend the whole hackathon.</div>
      </div>
      <input className='faq-checkbox' id='three' type='checkbox'></input>
      <div className='faq-item'>
        <label className='faq-label' htmlFor='three'>On which topic do you focus?</label>
        <div className='faq-content'>We will be building a website. Your aim would be to make a perfect website for purpose we will share on the beginning. Be prepared for advanced issues like a payment solution, SEO optimization, social network sharing and so on.</div>
      </div>
    <div className='faq-item'>
      <input className='faq-checkbox' id='four' type='checkbox'></input>
      <label className='faq-label' htmlFor='four'>How can I prepare?</label>
      <div className='faq-content'>Get some idea on modern web technologies. We recommend reading articles from companies like Netflix, Google and Facebook about current status of technology.</div>
    </div>
    <div className='faq-item'>
      <input className='faq-checkbox' id='five' type='checkbox'></input>
      <label className='faq-label' htmlFor='five'>Who are the judges for the hackathon?</label>
      <div className='faq-content'>The Mentors and the market. We don't want to share a methodology for assessment in advance, but real application of the site would make a big difference.</div>
    </div>
    <div className='faq-item'>
      <input className='faq-checkbox' id='six' type='checkbox'></input>
      <label className='faq-label' htmlFor='six'>What is the event language?</label>
      <div className='faq-content'>We expect you to speak English at the hackathon to include everyone and enable everyone communicate with each other. Within the team, you can communicate in whatever language you prefer.</div>
    </div>
    <div className='faq-item'>
      <input className='faq-checkbox' id='seven' type='checkbox'></input>
      <label className='faq-label' htmlFor='seven'>Can we apply as a team?</label>
      <div className='faq-content'>No, each of your team members has to apply individually. You can assemble a team if you all pass the selection.</div>
    </div>
    <div className='faq-item'>
      <input className='faq-checkbox' id='eight' type='checkbox'></input>
      <label className='faq-label' htmlFor='eight'>Anything else?</label>
      <div className='faq-content'>Feel free to contact us via mail: <a href="mailto:hackathon@socialbakers.com">hackathon@socialbakers.com</a></div>
    </div>
  </Layout>
)

export default FaqPage
