import client from '../../../apollo-client';
import { gql } from '@apollo/client';
import { homeProps } from '@/interfaces/interface';
import GlobCta from '@/components/shared/GlobCta';
import Content from '@/components/shared/Content';
import GlobalQuery from '@/queries/Global';



export default function Index({ data }: homeProps) {

  return (
    <>
      <GlobCta data={data} />
      <div className="container">
        <div className="py-0 py-xxl-5 my-5">
          <Content data={data} />
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

  //  console.log('MyPage ' + page.data.pages.data[0].attributes.Title);


  //console.log(data.layout.data.attributes.Navbar.Menu);

  return {
    props: {
      data: {
        Logo: data.layout.data.attributes.Navbar.Logo.data.attributes.url,
        Menus: data.layout.data.attributes.Navbar.Menu,
        Page: {
          Title: page.data.pages.data[0].attributes.Title,
          SubTitle: page.data.pages.data[0].attributes.SubTitle,
          Content: page.data.pages.data[0].attributes.Content
        }
      },
    },
  };
}

