import Image from 'next/image'
import Button from './_components/common/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 max-w-6xl mx-auto">
      <div className='grid grid-cols-5 gap-10'>
        <div className="col-span-3 space-y-4">
          <h1 className='text-6xl font-bold'>Garden Genius</h1>
          <h2 className="text-3xl font-bold">Your personal gardening assistant, right in the palm of your hand!</h2>
          <div className='space-y-4'>
            <p>Our mission is to help gardeners of all experience levels cultivate thriving green spaces by leveraging the power of publicly available data.</p>
            <p>Garden Genius offers tailored watering and planting recommendations based on live weather data and comprehensive information of over 1500 plant species and their growth patterns and ideal environmental conditions.</p>
          </div>
          <div className='flex flex-row space-x-4'>
            <Button disabled={true}>Download (Coming Soon!)</Button>
            <Button>View Screenshots</Button>
          </div>
        </div>
        <div className="relative col-span-2">
          <Image className="rounded-lg border-black border-4 border-gray-900 overflow-hidden" src="/screenshot-home-screen.png" height={1000} width={1000} alt="Screenshot of home screen" style={{height: "70%", width: "auto"}} />
        </div>
      </div>
    </main>
  )
}
