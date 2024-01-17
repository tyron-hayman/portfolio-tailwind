'use client'; 
import Image from 'next/image'
import Layout from "../components/Layout";
import Header from "../components/header";

export default function About() {

  return (
    <>
    <Header />
    <Layout>
      <div className='container mx-auto mainContainer'>
        <div className='navigation columns-3'>
          <div><h1>About</h1></div>
        </div>
      </div>
      </Layout>
      </>
  )
}
