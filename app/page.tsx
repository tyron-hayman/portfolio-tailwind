'use client'; 
import Image from 'next/image'
import Layout from "./components/Layout";
import Header from "./components/header";

export default function Home() {

  return (
    <>
    <Header />
    <Layout>
      <div className='container mx-auto mainContainer'>
        <div className='navigation columns-3'>
          <div><h1>Welcome Home</h1></div>
        </div>
      </div>
      </Layout>
      </>
  )
}
