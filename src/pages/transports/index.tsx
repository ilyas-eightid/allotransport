import GlobalQuery from '@/queries/Global';
import React, { useState } from 'react'
import client from '../../../apollo-client';
import { gql } from '@apollo/client';
import { homeProps } from '@/interfaces/interface';
import GlobCta from '@/components/shared/GlobCta';
import Filters from '@/components/transports/Filters';
import GetGloblProps from '@/functions/functions';
import Listing from '@/components/transports/Listing';
import Pagination from '@/components/shared/Pagination';

type props = {
  data: any,
  page: any,
  transports: any,
  pagination: any,
  filters: any
}

export default function Index({ data, page, transports, pagination, filters }: props) {

  const PAGE_BREADCRUNBS = [
    {
      id: 0,
      link: "/",
      label: "Accueil",
    },
    {
      id: 1,
      link: "/",
      label: page.Title,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);


  let ListePagination = page.ListePagination.replace("%page", pagination.page).replace("%total", pagination.total);

  return (
    <>
      <GlobCta data={page} breadCrumbs={PAGE_BREADCRUNBS} />

      <div className="container">
        <div className="py-0 py-xxl-5 my-5">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-3 order-1 order-lg-0 mt-5 mt-lg-0">
              <Filters filter={filters} />
            </div>
            <div className="col-12 col-lg-8 col-xl-9 order-0 order-lg-1 ps-lg-5 pb-4 pb-0">
              <div className="heading mb-4">
                <h2 className="h5">{page.ListTitle}</h2>
                <p>{ListePagination}</p>
              </div>
              <Listing data={transports} />
              <Pagination data={pagination} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: any) {

  let currentpage = 1;

  if (context.query.page) {
    currentpage = parseInt(context.query.page);
  }

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

  const Filters = await client.query({
    query: gql`
    query Filters {
      filter {
        data {
          attributes {
            Title
            Form {
              Title
              Placeholder
              Error
              isRequired
              Name
              Class
              Type
            }
            RequiredTitle
            Button {
              Title
              Href
              Type
            }
          }
        }
      }
    }    
    `
  })

  const transports = await client.query({
    query: gql`
    query Transports($start:Int!, $limit: Int!) {
      transports(pagination:{start: $start, limit: $limit}) {
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
        meta {
          pagination {
            page
            pageSize
            pageCount
            total
          }
        }
      }
    }
    `
    ,
    variables: {
      start: currentpage - 1,
      limit: 1,
    }
  });


  return {
    props: {
      data: GetGloblProps({ data }),
      page: page.data.listing.data.attributes,
      transports: transports.data.transports.data,
      pagination: transports.data.transports.meta.pagination,
      filters : Filters.data.filter.data.attributes,
    },
  };
}