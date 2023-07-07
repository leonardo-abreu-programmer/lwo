import Image from 'next/image'
import Leonardo from '../public/images/me.png'

export default function Home() {
  return (
    <div className="bg-sky-900 w-full h-80 grid lg:grid-cols-2 px-4 rounded-lg">
      <div className="flex flex-col items-center justify-center p-4 italic">
        <h1 className="lg:text-8xl">Software</h1>
        <h1 className="lg:pl-64 pl-4 lg:text-8xl">Engineer</h1>
      </div>
      <Image
        src={Leonardo}
        alt="Picture of the author"
        width={396}
        height={1215}
        className="object-none object-top w-full lg:h-80 h-48 pt-4"
        priority={true}
      />
    </div>
  )
}
