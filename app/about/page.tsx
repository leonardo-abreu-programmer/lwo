import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className="grid xl:grid-cols-3 w-full">
        <div className="w-full flex xl:items-end p-6 xl:p-0 items-center justify-center">
          <Image 
            src="/images/alsome.jpg" 
            width={500}
            height={500}
            alt="Me again" 
            className="rounded"
          />
        </div>
        <div className="flex flex-col items-start justify-start px-12 xl:col-span-2">
          <h2 className="pb-6">Hello World</h2>
          <p>
              My name is Leonardo. I'm a programmer from São Paulo, Brazil, currently living in Portugal and completing my graduation.<br/><br/>
              I have a job at an influential programming company in Portugal, and I'm planning to continue my studies.<br/><br/>
              I am familiar with several programmingges, and I can easily learn new ones. I enjoy learning new design patterns and implementing them in my projects.<br/><br/>
              In the future, I hope to enhance my programming knowledge through work experience, and I am also planning to move to another country to improve my English skills.<br/><br/>
          </p>
        </div>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-1 gap-6 px-12">

          <div className="grid xl:grid-cols-2 gap-4">
            <div>
              <h2 className="pb-6">Gym</h2>
              <p>
                Going to the gym has become a very important part of my life, a place of socializing for people who strive for a better and healthier lifestyle through effort. <br/><br/>
                There is no easy way to achieve gains, there are no better or worse ones, there are only those who are more hardworking and consistent. <br/><br/>
                This lifestyle demands more effort, is more painful, and requires more energy, but seeing how my body improves in terms of strength and aesthetics is priceless.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-start">
              <Image 
                src="/images/gym.jpg" 
                width={500}
                height={500}
                alt="Arnold pose picture" 
                className="rounded"
              />
              <Image 
                src="/images/zyzz.jpg" 
                width={500}
                height={500}
                alt="Zyzz pose picture" 
                className="rounded"
              />
              <div className="flex items-end justify-end">
                <Image 
                  src="/images/lean.jpg"
                  width={500}
                  height={500}
                  alt="LeanBeefPatty pose picture" 
                  className="rounded"
                />
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-4">
            <Image 
              src="/images/music.jpg"
              width={500}
              height={500}
              alt="Pulse show" 
              className="rounded-xl"
            />
            <div className="h-min order-first">
              <h2 className="pb-6">Music</h2>
              <p>
                Music has been an important part of my life since forever. <br/><br/>
                I grew up listening to classNameic Brazilian and foreign music. Wherever I go, I carry headphones with me and several downloaded songs. <br/><br/>
                My favorite music genres are pop, rock, and jazz, and almost anything that originates from them. I have an open mind to new bands and new styles. <br/><br/>
                The Weeknd, Lana Del Rey, Pink Floyd, The Alan Parsons Project, Tyler, The Creator, and Arctic Monkeys are always among the most played songs of the day.
              </p>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-4">
            <div className="h-min">
              <h2 className="pb-6">Travel</h2>
              <p className="pr-6">
                But if I had to choose one, my favorite hobby is definitely traveling. <br/><br/>
                I enjoy everything about traveling, from planning the flights and packing my suitcase to the feeling of leaving the house locked up. I love the excitement of arriving at the airport, the journey on the plane, and immersing myself in a new culture in a new country with new sights and cuisine. <br/><br/>
                So far, I haven't traveled to many places, but I have several photographs of where I've been, and I'm definitely going to see the whole world when I start having my own money.
              </p>
            </div>
            <Image 
              src="/images/travel.jpg"
              width={500}
              height={500}
              alt="Pulse show" 
              className="rounded"
            />
          </div>

        </div>
      </div>
    </>
  )
}
