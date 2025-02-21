'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import './Header.css'
import MiniHeader from './sub-components/MiniHeader'
import MainHeader from './sub-components/MainHeader'
import SearchHead from './sub-components/SearchHead'

const PcHeader = ({ start, setStart, showBar, setBar }: { start: boolean, setStart: Dispatch<SetStateAction<boolean>>, showBar: boolean, setBar: Dispatch<SetStateAction<boolean>> }) => {

    const [show, setShow] = useState(false)
    const [isHovered, setHovered] = useState(false)
    const [containerHover, setContainerHover] = useState(false)

    // for popping up search bar header


    return (
        <div className='flex flex-col'>

            {/* SearchBar Header */}

            <div className='absolute z-[60]'>
                <SearchHead start={start} setStart={setStart} showBar={showBar} setBar={setBar} />
            </div>

            {/* MiniHeader */}

            <div className='hidden mdx:block'>
                <MiniHeader setShow={setShow} setContainerHover={setContainerHover} setHovered={setHovered} />
            </div>


            {/* Main Header */}

            <div>

                <MainHeader start={start} setStart={setStart} showBar={showBar} setBar={setBar} show={show} containerHover={containerHover} setContainerHover={setContainerHover} setHovered={setHovered} setShow={setShow} isHovered={isHovered} />

            </div>

        </div>
    )
}

export default PcHeader
