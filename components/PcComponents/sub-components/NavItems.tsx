import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import New from '../NavItems/New'
import Men from '../NavItems/Men'
import Women from '../NavItems/Women'
import Kids from '../NavItems/Kids'
import Jordan from '../NavItems/Jordan'
import Sale from '../NavItems/Sale'

interface Hovers {
  newHover: boolean,
  setNewHover: Dispatch<SetStateAction<boolean>>,
  menHover: boolean,
  setMenHover: Dispatch<SetStateAction<boolean>>,
  womenHover: boolean,
  setWomenHover: Dispatch<SetStateAction<boolean>>,
  kidsHover: boolean,
  setKidsHover: Dispatch<SetStateAction<boolean>>,
  jordanHover: boolean,
  setJordanHover: Dispatch<SetStateAction<boolean>>,
  saleHover: boolean,
  setSaleHover: Dispatch<SetStateAction<boolean>>,
  start: boolean,
}

const NavItems: React.FC<Hovers> = ({ newHover, setNewHover, start, menHover, setMenHover, womenHover, setWomenHover, kidsHover, setKidsHover, jordanHover, setJordanHover, saleHover, setSaleHover }) => {

  const [allData, setAllData] = useState<{
    New: any,
    Men: any,
    Sale: any,
    Women: any,
    Kids: any,
    Jordan: any,
  } | undefined>()

  // getting navs items data from server

  useEffect(() => {
    const fetchedData = async() => {
      let a = await fetch('../../../api/collections', {
        method: "GET"
      })

      let response = await a.json()
      setAllData(response.data)
    }
    fetchedData()
  }, [])

  return (
    <>
    <div className={`absolute hidden mdx:block h-screen ${newHover || menHover || womenHover || kidsHover || jordanHover || saleHover || start? 'opacity-1 z-30': 'opacity-0 z-0' } w-screen`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', transition: 'all 0.3s ease-in-out' }}></div>

      <div className={`absolute hidden mdx:block ${newHover ? 'z-[100]' : '-z-10'}`}>

        {/* New Nav item */}
        <New data={allData?.New} newHover={newHover} setNewHover={setNewHover} />
      </div>

      {/* Men's Items */}

      <div className={`absolute hidden mdx:block ${menHover ? 'z-[100]' : '-z-10'}`}>
        <Men data={allData?.Men} menHover={menHover} setMenHover={setMenHover} />
      </div>

      {/* Women's Items */}

      <div className={`absolute hidden mdx:block ${womenHover ? 'z-[100]' : '-z-10'}`}>
        <Women data={allData?.Women} womenHover={womenHover} setWomenHover={setWomenHover} />
      </div>

      {/* Kid's Items */}

      <div className={`absolute hidden mdx:block ${kidsHover ? 'z-[100]' : '-z-10'}`}>
        <Kids data={allData?.Kids} kidsHover={kidsHover} setKidsHover={setKidsHover} />
      </div>

      {/* Jordan Items */}

      <div className={`absolute hidden mdx:block ${jordanHover ? 'z-[100]' : '-z-10'}`}>
        <Jordan data={allData?.Jordan} jordanHover={jordanHover} setJordanHover={setJordanHover} />
      </div>

      {/* Sale */}

      <div className={`absolute hidden mdx:block ${saleHover ? 'z-[100]' : '-z-10'}`}>
        <Sale data={allData?.Sale} saleHover={saleHover} setSaleHover={setSaleHover} />
      </div>
    </>
  )
}

export default NavItems
