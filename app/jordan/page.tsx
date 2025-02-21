import Jordan from '@/components/Jordan/Jordan'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Jordan. Nike.com",
  description: "Just Do It",
  icons: {
    icon: '/favicon.ico'
  }
}

const page = async() => {
  return (
    <div>
      <Jordan />
    </div>
  )
}

export default page