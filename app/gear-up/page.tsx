'use client'
import GearUp from '@/components/GearUp/GearUp'
import Offers from '@/components/ws/Offers'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [firstColl, setFirstColl] = useState([])
    const [secondColl, setSecondColl] = useState([])
    const [everythingColl, setEverythingColl] = useState([])

    useEffect(() => {

        const getFirst = async () => {
            const a = await fetch('/Data/Sports.json')
            const response = await a.json()
            setFirstColl(response["sport1"])
            setSecondColl(response["sport2"])
            setEverythingColl(response["Everything"])
        }

        getFirst()
    }, [])
    return (
            <div className='flex flex-col gap-2 relative z-0'>

                <Offers />

                <div>
                    <GearUp firstColl={firstColl} everythingColl={everythingColl} secondColl={secondColl} />
                </div>

            </div>
    )
}

export default page
