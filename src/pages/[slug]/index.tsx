import client from '../../../apollo-client';
import { gql } from '@apollo/client';
import { homeProps } from '@/interfaces/interface';
import GlobCta from '@/components/shared/GlobCta';
import Content from '@/components/shared/Content';
import GlobalQuery from '@/queries/Global';
import GetGloblProps from '@/functions/functions';

type props = {
  data: any,
  page: any,
}


export default function Index({ data, page }: props) {

  return (
    <>
      <GlobCta data={page} />
      <div className="container">
        <div className="py-0 py-xxl-5 my-5">
          <Content data={page} />
        </div>

      </div>

    </>
  )
}


export async function getServerSideProps({ params }: any) {
  const { data } = await client.query({
    query: gql`${GlobalQuery}`,
  });


  const page = await client.query({
    query: gql`
    query Page($slug: String!){
      
      pages(filters: { slug: { eq: $slug } }) {
        data {
          attributes {
            Title
            SubTitle
            Content
          }
        }
      }
    }`,
    variables: {
      slug: params.slug
    }
  });


  return {
    props: {
      data: GetGloblProps({ data }),
      page: page.data.pages.data[0].attributes,
    },
  };
}

