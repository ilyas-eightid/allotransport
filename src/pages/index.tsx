import { Inter } from 'next/font/google'
import { gql } from "@apollo/client";
import client from "../../apollo-client";

import HomeWrapper from '@/components/home/HomeWrapper';
import { homeProps } from '@/interfaces/interface';
import GlobalQuery from '@/queries/Global';


const inter = Inter({ subsets: ['latin'] });



export default function Home(data: homeProps) {

  return (
    <>
      <HomeWrapper />
    </>
  )
}


export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`${GlobalQuery}`,
  });


  //console.log(data.layout.data.attributes.Navbar.Menu);

  return {
    props: {
      data: {
        Logo: data.layout.data.attributes.Navbar.Logo.data.attributes.url,
        Menus: data.layout.data.attributes.Navbar.Menu,
      }
    },
  };
}