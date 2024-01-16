'use client'; 
import Image from 'next/image'
import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";
import { ApolloProvider } from "@apollo/client";
import Header from "../components/header";

export default function About() {

  return (
    <>
      <Header />
      <div className='container mx-auto mainContainer'>
        <div className='navigation columns-3'>
          <div><h1>About</h1></div>
        </div>
      </div>
    </>
  )
}
