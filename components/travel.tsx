import Image from 'next/image'

export default function Travel() {
  return (
    <div className="grid xl:grid-cols-2 gap-4">
        <div className="h-min">
          <h2 className="pb-6">Travel</h2>
          <p className="pr-6">
            But if I had to choose one, my favorite hobby is definitely traveling. <br/><br/>
            I enjoy everything about traveling, from planning the flights and packing my suitcase to the feeling of leaving the house locked up. I love the excitement of arriving at the airport, the journey on the plane, and immersing myself in a new culture in a new country with new sights and cuisine. <br/><br/>
            So far, I haven't traveled to many places, but I have several photographs of where I've been, and I'm definitely going to see the whole world when I start having my own money.
          </p>
        </div>
        <div className='lg:px-12'>
          <Image
            src="/images/travel.jpg"
            width={700}
            height={700}
            alt="Pulse show" 
            className="rounded"
          />
        </div>
      </div>
  )
}
