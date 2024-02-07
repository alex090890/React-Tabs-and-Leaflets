import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyImage from './MyImage';




export default function MyTabs() {
    return (
        <Tabs>
      <TabList>
        <Tab>My Photo</Tab>
        <Tab>Our Location</Tab>
      </TabList>

      <TabPanel>
        <h2>My Photo</h2>
        <MyImage />
      </TabPanel>
      <TabPanel>
        <h2>Our location</h2>

      </TabPanel>
    </Tabs>
    )
}