'use client'
import Offers from '@/components/Converse/Offers'
import Sidebar from '@/components/Converse/Sidebar'
import './Converse.css'
import Collection from './Collection'
import { useEffect, useState } from 'react'
import Filters from './Filters'


const Converse = () => {
  const [allData, setData] = useState<any[]>([])
  const [showFilters, hideFilters] = useState(false)

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('../../Data/Converse.json')

          if (!response.ok) {
              throw new Error("Error fetching jordan's collection")
          }

          const data = await response.json()
          setData(data)
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

        <div className={`${showFilters? 'w-0 -translate-x-[40vw]': 'w-[13em] translate-x-0'} hidden mdx:block h-screen transition-all duration-300 relative z-30`} >
            <Sidebar setOpen={setOpen} />
        </div>

        <div className='block mdx:hidden'>
          <Filters setOpen={setOpen} isOpen={isOpen} />
        </div>

        <div className={`flex ${showFilters? 'ml-0': 'mdx:ml-12'} transition-all duration-300 justify-end flex-1`}>
          <Collection allData={allData} setOpen={setOpen} showFilters={showFilters} hideFilters={hideFilters} />
        </div>

      </div>

    </div>
  )
}

export default Converse
