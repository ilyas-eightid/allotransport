import { gql } from '@apollo/client';
import React, { useEffect, useRef } from 'react'
import client from '../../../../apollo-client';
import GetGloblProps from '@/functions/functions';
import GlobalQuery from '@/queries/Global';
import GlobCta from '@/components/shared/GlobCta';
import Hours from '@/components/shared/Hours';
import Image from 'next/image';
import Map from '@/components/shared/Map';
import $ from "jquery"
import Slider from 'react-slick';
import Similar from '@/components/transports/Similar';

type Props = {
    data: any,
    page: any,
    similars: any
}


export default function Index({ data, page, similars }: Props) {

    const featuredtransport = useRef(null)

    var carousel = {
        autoplay: true,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 447,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    };

    return (
        <>
            <GlobCta data={page} />
            <div className="container">
                <div className="py-0 py-xxl-5 my-5">
                    <div className="row">
                        <div className="col-12 col-lg-4 col-xl-3 order-1 order-lg-0 mt-5 mt-lg-0">
                            <div className="info-legal border border-light rounded p-4 mb-4">
                                <div className="activity-logo mb-3">
                                    <Image alt={page.Title} width="106" height="106" className="img-fluid w-100" src={'http://127.0.0.1:1337' + page.seo.metaImage.data.attributes.url} />
                                </div>
                                <h2 className="h6 mb-2">Informations</h2>
                                <ul className="list-unstyled">
                                    <li>Email: {page.Informations?.Email}</li>
                                    <li>Phone: {page.Informations?.Phone}</li>
                                    <li>Fixed phone: {page.Informations?.Phone1}</li>
                                    <li>Address: {page.Informations?.Address}</li>
                                    <li>City: {page.Informations.city?.data.attributes.Name}</li>
                                    <li>Zip code: {page.Informations?.ZipCode}</li>

                                </ul>
                            </div>
                            <div className="hours border border-light rounded p-4 mb-4">
                                <h2 className="h6 mb-3">Opening Hours</h2>
                                <div className="working-hours">
                                    <Hours hours={page.Hours} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-xl-9 order-0 order-lg-1 ps-lg-5 pb-4 pb-0">
                            <div className="card border-primary mb-5">
                                <div className="card-body">
                                    <div className="d-block d-md-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="card-title h5 mb-4">{page.Title}</div>
                                            <h3 className="ps-1 mb-2 blockquote-footer">{page.Category.data.attributes.Name}</h3>
                                            <p className="mb-0">{page.Informations.Address}</p>
                                        </div>
                                        <div className="card-call-action mt-3 mt-xl-0 mt-3 mt-xl-0">
                                            {
                                                page.SocialLinks.map((social: any, index: any) => {
                                                    return (
                                                        <a href={social.Href} target='_blank' className="btn btn-outline-default" title={social.TItle} key={index}>
                                                            <i className={social.Icon}></i>
                                                        </a>
                                                    )
                                                })
                                            }
                                            <a href={page.Informations.Website} className="btn btn-outline-info" title={page.Title}>Site web</a>

                                            <a href={"tel:" + page.Informations.Phone} className="btn btn-warning" title={page.Title}>{page.Informations.Phone}</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="about mb-5">
                                <h2 className="h5 mb-2">About</h2>
                                {page.About}
                            </div>
                            <Map />
                            <div className="featured">
                                <div className="featured-top d-flex justify-content-between align-items-center">
                                    <h2 className="h5 mb-4">Similar Business Activity</h2>
                                    <div className="featured-arrows position-relative d-flex-inline">
                                        <button onClick={() => featuredtransport?.current?.slickPrev()} className="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>
                                        <button onClick={() => featuredtransport?.current?.slickNext()} className="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
                                    </div>
                                </div>
                                <div className="row mx-lg-0 featured-transport">
                                    <Slider ref={featuredtransport} {...carousel}>
                                        {
                                            similars.map((item: any, index: any) => {
                                                return <Similar data={item} key={index} />
                                            })
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>

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
        query Transport($slug: String!) {
            transports(filters: { slug: { eq: $slug } }) {
              data {
                attributes {
                  seo {
                    metaTitle
                    metaDescription
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
                  Hours {
                    Day
                    Start
                    End
                    Closed
                  }
                  About
                  Map {
                    Longitude
                    Latitude
                    Zoom
                  }
                  SocialLinks {
                    Title
                    Href
                    Icon
                  }
                  Category {
                    data {
                      attributes {
                        Name
                      }
                    }
                  }
                }
              }
            }
          }                  
        `,
        variables: {
            slug: params.slug
        }
    });

    const similars = await client.query({
        query: gql`
        query Transports {
            transports {
              data {
                attributes {
                  Title
                  SubTitle
                  slug
                  Informations {
                    Email
                    Phone
                    phone1
                    Fax
                    Address
                    city {
                      data {
                        attributes {
                          Name
                        }
                      }
                    }
                    ZipCode
                    Website
                  }
                  Hours {
                    Day
                    Start
                    End
                    Closed
                  }
                  About
                  Map {
                    Longitude
                    Latitude
                    Zoom
                  }
                  SocialLinks {
                    Title
                    Href
                    Icon
                  }
                  Category {
                    data {
                      attributes {
                        Name
                      }
                    }
                  }
                }
              }
            }
          }                           
        `
    });

    return {

        props: {
            data: GetGloblProps({ data }),
            page: page.data.transports.data[0].attributes,
            similars: similars.data.transports.data,
        },
    };
}