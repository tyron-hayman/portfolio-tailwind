'use client'; 
import Image from 'next/image'
import { gql } from "@apollo/client";
import createApolloClient from "./apollo-client";
import { ApolloProvider } from "@apollo/client";
import Header from "./components/header"

const query = `{
  themeSettingsNext {
    themeSettingsFields {
      footerQuote
      footerQuoteAuthor
      toastContent
      toggleToast
    }
  }
  home : pageBy(uri: "/") {
    homepageField {
      landingHeading
      landingContent
      openWorkBox
      workHeading
      workContent
      welcomes {
        phrase
      }
      projects {
        name
        attribution
        content
        date
        image
        link
      }
    }
  }
  about : pageBy(uri: "/about") {
    aboutFields {
      aboutContent
      aboutHeading
      aboutImage
      skillsContent
      skillsHeading
      skillsList {
        skills
      }
    }
  }
  contact : pageBy(uri: "/contact") {
    contactFields {
      contactContent
      contactEmail
      contactTitle
    }
  }
  menus {
    nodes {
      menuItems {
        edges {
          node {
            url
            label
            target
          }
        }
      }
    }
  }
}`;

export default function Home() {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <div className='container mx-auto'>
        <div className='navigation columns-3'>
          <div><h1>Welcome Home</h1></div>
        </div>
      </div>
    </ApolloProvider>
  )
}
