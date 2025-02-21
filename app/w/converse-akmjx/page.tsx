import { Metadata } from 'next'
import '../../../components/Converse/Converse.css'
import Converse from '@/components/Converse/Converse'

export const metadata: Metadata = {
  title: "Converse. Nike.com",
  description: "Just Do It",
  icons: {
    icon: '/favicon.ico'
  }
}


const page = () => {

  return (
    <div className='flex flex-col gap-2 relative overflow-x-hidden overflow-y-auto'>

        <Converse />

    </div>
  )
}

export default page
