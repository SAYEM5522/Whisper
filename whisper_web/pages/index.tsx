import type { NextPage } from 'next'
import Header from '../components/Header/Header'


const Home = () => {
  return (
    <div className="flex min-h-screen max-w-screen-md 
    flex-col py-2
     self-center ml-auto mr-auto">
     <Header/>
    </div>
  )
}

export default Home
