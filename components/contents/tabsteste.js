import { Tab } from '@headlessui/react'
import CardCoruss from '../cardCoruss'
import CardConsultas from '../CardConsultas'
import CardBetoven from '../CardBetoven'
import ContentCoruss from './contentCoruss'
import ContentConsultas from './contentConsultas'
import ContentBetoven from './contentBetoven'

function MyTabs() {
  return (
    <div className='sm:mx-auto sm:w-max'>
    <Tab.Group vertical>
      <Tab.List className="sm:mx-auto mt-3 grid sm:flex sm:space-x-5">
        <Tab className='sm:mt-3'><CardCoruss/></Tab>
        <Tab><CardConsultas/></Tab>
        <Tab><CardBetoven/></Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><ContentCoruss /></Tab.Panel>
        <Tab.Panel><ContentConsultas /></Tab.Panel>
        <Tab.Panel><ContentBetoven /></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>)
}
export default MyTabs