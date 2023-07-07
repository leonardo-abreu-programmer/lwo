import Image from 'next/image'
import Gym from '../../components/gym'
import Me from '../../components/me'
import Music from '../../components/music'
import Travel from '../../components/travel'

export default function Page() {
  return (
    <>
      <Me/>
      <Gym/>
      <Music/>
      <Travel/>
    </>
  )
}
