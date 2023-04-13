import { Inter } from 'next/font/google'
import { gql } from "@apollo/client";
import client from "../../apollo-client";

import HomeWrapper from '@/components/home/HomeWrapper';
import { homeProps } from '@/interfaces/interface';
import GlobalQuery from '@/queries/Global';
import GetGloblProps from '@/functions/functions';


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

  return {
    props: {
      data: GetGloblProps({ data }),
    },
  };
}