import React from "react"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import SubPageIntro from '../components/sub-page-intro'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AgendaPage = () => (
  <Layout>
    <SEO title="Reactive|Hacks" keywords={[`hackathon`, `NGO`, `react`, `social`]} />

    {SubPageIntro('Agenda')}
    <div className='agenda'>
    <Tabs
        defaultTab="friday"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList className='agenda-tabs'>
          <Tab className='agenda-tab' tabFor="friday">Friday</Tab>
          <Tab className='agenda-tab' tabFor="saturday">Saturday</Tab>
          <Tab className='agenda-tab' tabFor="sunday">Sunday</Tab>
        </TabList>
        <TabPanel tabId="friday">
          <div className='agenda-day'>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>3:00pm - 3:45pm</div>
              <div className='agenda-item-action basic-text'>Opening Ceremony</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>3:45pm - 4:30pm</div>
              <div className='agenda-item-action basic-text'>Ideation &amp; Pitch Preparation</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>4:30pm - 6:30pm</div>
              <div className='agenda-item-action basic-text'>Bar Camps</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>6:30pm - 7:30pm</div>
              <div className='agenda-item-action basic-text'>Dinner</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>7:30pm - 8:30pm</div>
              <div className='agenda-item-action basic-text'>Interest meetings</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>8:30pm - 12:00pm</div>
              <div className='agenda-item-action basic-text'>Get-together &amp; activities</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel tabId="saturday">
          <div className='agenda-day'>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>9:00am - 10:00am</div>
              <div className='agenda-item-action basic-text'>Breakfast</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>10:00am - 12:00am</div>
              <div className='agenda-item-action basic-text'>Workshops</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>12:00pm - 12:55pm</div>
              <div className='agenda-item-action basic-text'>Lunch</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>12:55pm - 1:00pm</div>
              <div className='agenda-item-action basic-text'>Start of Hackathon</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>1:00pm</div>
              <div className='agenda-item-action basic-text'>Hacking begins</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>6:30pm - 7:30pm</div>
              <div className='agenda-item-action basic-text'>Dinners</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel tabId="sunday">
          <div className='agenda-day'>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>0:00am</div>
              <div className='agenda-item-action basic-text'>Midnight Snack</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>01:00am - 01:30am</div>
              <div className='agenda-item-action basic-text'>Halftime Challenge</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>9:00am - 10:00am</div>
              <div className='agenda-item-action basic-text'>Breakfast</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>10:00pm - 10:15pm</div>
              <div className='agenda-item-action basic-text'>Morning Announcements</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>12:30pm - 1:00pm</div>
              <div className='agenda-item-action basic-text'>Submit projects</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>1:00pm</div>
              <div className='agenda-item-action basic-text'>Deadline</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>1:00pm - 1:45pm</div>
              <div className='agenda-item-action basic-text'>Lunch</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>1:45pm - 2:15pm</div>
              <div className='agenda-item-action basic-text'>Preparation</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>2:15pm - 3:00pm</div>
              <div className='agenda-item-action basic-text'>Expo</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>3:15pm - 3:45pm</div>
              <div className='agenda-item-action basic-text'>Winning Ceremony + Wrapping up</div>
            </div>
            <div className='agenda-item'>
              <div className='agenda-item-time basic-text'>3:45pm - 4:30pm</div>
              <div className='agenda-item-action basic-text'>Chill-Out</div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </Layout>
)

export default AgendaPage
