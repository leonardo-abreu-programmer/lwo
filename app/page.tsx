import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="bg-sky-900 w-full xl:h-80 grid xl:grid-cols-2 px-4 rounded-xl">
        <div className="flex flex-col items-center justify-center p-4 italic">
          <h1 className="xl:text-8xl">Software</h1>
          <h1 className="xl:pl-64 pl-4 xl:text-8xl">Engineer</h1>
        </div>
        <Image
          src="/images/me.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className='object-none object-top w-full h-80'
          priority={true}
        />
      </div>
    </>
  )
}
