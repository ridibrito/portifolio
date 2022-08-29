import { Tab } from '@headlessui/react'
import CardCoruss from './cardCoruss'
import CardConsultas from './CardConsultas'
import CardBetoven from './CardBetoven'
import ContentCoruss from './contents/contentCoruss'
import ContentConsultas from './contents/contentConsultas'
import ContentBetoven from './contents/contentBetoven'

export default function MyTabs() {
  return (
    <div className='block sm:mx-auto sm:max-w-7xl'>
    <Tab.Group>
      <Tab.List className="block justify-around mx-auto mt-3 md:flex ">
        <Tab className='mx-3 sm:mt-3 sm:ml-3'><CardCoruss/></Tab>
        <Tab className="mx-3"><CardConsultas/></Tab>
        <Tab className="mx-3 sm:mr-3"><CardBetoven/></Tab>
      </Tab.List>
      <Tab.Panels className="block mx-auto w-max-7xl mt-5 p-5">
        <Tab.Panel><ContentCoruss /></Tab.Panel>
        <Tab.Panel><ContentConsultas /></Tab.Panel>
        <Tab.Panel><ContentBetoven /></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>)
}
