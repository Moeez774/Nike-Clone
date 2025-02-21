'use client'
import Offers from './Offers'
import Sidebar from './Sidebar'
import './Converse.css'
import Collection from './Collection'
import { useEffect, useState } from 'react'
import Filters from './Filters'
import { useParams } from 'next/navigation'


const Structure = () => {
  const [showFilters, hideFilters] = useState(false)
  const [allItems, setAllItems] = useState<{
    Heading: string,
    types: any[],
    AllItems: any[],
  }>({ types: [], AllItems: [], Heading: "" })

  const [isOpen, setOpen] = useState(false)

  const params = useParams()

  const path = Array.isArray(params.path) ? params.path[0] : params.path || ''

  useEffect(() => {

    // fetching all data
    const fetchData = async () => {
      const types = await fetch('../../Data/Items.json')

      if (!types.ok) {
        throw new Error("Error fetching All Items")
      }

      // setting data and types of items
      const items = await types.json()
      setAllItems(items[path])
    }
    fetchData()
  }, [])

  return (
    <div className='flex flex-col gap-2 relative overflow-x-hidden overflow-y-auto'>

      {/* // offers */}
      <div className='relative z-30'>
        <Offers />
      </div>

      {/* Sidebar and collection */}

      <div className='flex flex-col mdx:flex-row mx-0 mdx:mx-12'>

        {/* Sidebar */}

        <div className={`${showFilters ? 'w-0 -translate-x-[40vw]' : 'w-[13em] translate-x-0'} hidden mdx:block h-screen transition-all duration-300 relative z-30`} >
          <Sidebar setOpen={setOpen} allItems={allItems} />
        </div>

        <div className='block mdx:hidden'>
          <Filters setOpen={setOpen} isOpen={isOpen} allItems={allItems} />
        </div>

        <div className={`flex ${showFilters ? 'ml-0' : 'mdx:ml-12'} transition-all duration-300 justify-end flex-1`}>
          <Collection allData={allItems} setOpen={setOpen} showFilters={showFilters} hideFilters={hideFilters} />
        </div>

      </div>

    </div>
  )
}

export default Structure
