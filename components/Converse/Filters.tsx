import React, { Dispatch, SetStateAction } from 'react'
import './Converse.css'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Filtered from './Filtered'


const Filters = ({ isOpen, setOpen }: { isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {

  const collection = [{ 'Gender': ['Men', 'Women'] }, { 'Kids': ['Boys', 'Girls'] }, { 'Kids & Age': ['Babies & Toddlers (0-3 yrs)', 'Little Kids (3-7 yrs)', 'Big Kids (7-15 yrs)'] }, { 'Sale & Offers': ['Sale'] }, { 'Colors': ['Black', 'Blue', 'Brown', 'Green', 'Gray', 'Pink', 'Red', 'White', 'Yellow'] }, { 'Shop By Price': ['$25 - $50', '$50 - $100', '$100 - $150', 'Over $150'] }, { 'Brand (1)': ['Nike Sportswear', 'Jordan', 'Nike By You', 'Converse', 'Nike Lab', 'ACG', 'Nike Pro'] }, { 'Sports': ['Lifestyle'] }]

  return (
    <div className='flex flex-col'>

      {/* first Block */}

      <div className='flex flex-col mx-5 gap-10 py-3 font-semibold justify-between'>

        <div>
          <h1 className='text-xl'>Converse</h1>
        </div>

        <div className='flex gap-8'>
          <button>Shoes</button>
          <button>Tops & T-Shirts</button>
        </div>

      </div>

      <hr />

      {/* Second block  */}

      <div className='py-4 mx-5 flex items-center justify-between'>

        <div>
          <h1 className='font-semibold'>Pick Up Today</h1>
        </div>

        <label className="switchFilter">
          <input type="checkbox" />
          <span className="sliderFilter">
          </span>
        </label>
      </div>

      <hr />

      {/* //Filter allCollections */}

      <div>
        <Sheet open={isOpen} onOpenChange={() => setOpen(!isOpen)}>
          <SheetContent className='h-full overflow-y-auto' side='bottom'>
            <SheetHeader>
              <SheetTitle></SheetTitle>

              {/* Filter */}

              <div className='flex flex-col'>

                <h1 className='font-normal text-start'>Filter</h1>

                {/* First block */}
                <div className='flex flex-col gap-6 my-8'>
                  <h1 className='font-semibold text-start'>Sort By</h1>

                  <div>
                    <div className="my-form flex flex-col gap-3 font-medium">
                      <div>
                        <input id="radio-1" type="radio" name="option" />
                        <label htmlFor="radio-1">Featured</label>
                      </div>
                      <div>
                        <input id="radio-2" type="radio" name="option" />
                        <label htmlFor="radio-2">Newest</label>
                      </div>
                      <div>
                        <input id="radio-3" type="radio" name="option" />
                        <label htmlFor="radio-3">Price: High-Low</label>
                      </div>
                      <div>
                        <input id="radio-4" type="radio" name="option" />
                        <label htmlFor="radio-4">Price: Low-High</label>
                      </div>
                    </div>

                  </div>
                </div>

                <hr />

                {/* // All types of collections */}

                <Filtered collection={collection} />

                <div className='w-full bg-white py-4 translate-y-6' style={{ position: 'sticky', bottom: '0px' }}>
                  <div className='flex justify-center cursor-pointer p-2 bg-black rounded-3xl text-white'>
                    <button>Apply</button>
                  </div>
                </div>

              </div>

            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>

    </div>
  )
}

export default Filters
