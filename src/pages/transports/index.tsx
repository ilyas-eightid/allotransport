import GlobalQuery from '@/queries/Global';
import React from 'react'
import client from '../../../apollo-client';
import { gql } from '@apollo/client';
import { homeProps } from '@/interfaces/interface';
import GlobCta from '@/components/shared/GlobCta';
import Filters from '@/components/transports/Filters';
import GetGloblProps from '@/functions/functions';
import Listing from '@/components/transports/Listing';

type props = {
  data: any,
  page: any,
  transports: any
}

export default function Index({ data, page, transports }: props) {

  return (
    <>
      <GlobCta data={page} />

      <div className="container">
        <div className="py-0 py-xxl-5 my-5">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-3 order-1 order-lg-0 mt-5 mt-lg-0">
              <Filters page={page} />
            </div>
            <div className="col-12 col-lg-8 col-xl-9 order-0 order-lg-1 ps-lg-5 pb-4 pb-0">
              <div className="heading mb-4">
                <h2 className="h5">{page.ListTitle}</h2>
                <p>{page.ListePagination}</p>
              </div>
              <Listing data={transports} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {

  const { data } = await client.query({
    query: gql`${GlobalQuery}`,
  });

  const page = await client.query({
    query: gql`
    query Listing {
      listing {
        data {
          attributes {
            Title
            SubTitle
            ListTitle
            ListePagination
            FilterTitle
            RequiredTitle
            FilterButton
            {
              Title
                  Href
                  Type
            }
          }
        }
      }
    }
    `
  });

  const transports = await client.query({
    query: gql`
    query Transports {
      transports {
        data {
          attributes {
            seo {
              metaImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            Title
            SubTitle
            slug
            Informations {
              Email
              Phone
              phone1
              Fax
              Address
              city{data{attributes{Name}}}
              ZipCode
              Website
            }
            About
          }
        }
      }
    }
    `
  });


  return {
    props: {
      data: GetGloblProps({ data }),
      page: page.data.listing.data.attributes,
      transports: transports.data.transports.data,
    },
  };
}