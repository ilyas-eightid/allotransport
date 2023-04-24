import React, { useCallback, useEffect, useRef, useState } from 'react'
import client from '../../apollo-client';
import GlobalQuery from '@/queries/Global';
import GetGloblProps from '@/functions/functions';
import { gql } from '@apollo/client';
import GlobCta from '@/components/shared/GlobCta';
import Information from '@/components/shared/Information';
import { useForm } from 'react-hook-form';
import Inputs from '@/components/form/Inputs';
import { sendContactForm } from '@/lib/email';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import Alert from '@/components/shared/Alert';

type Props = {
  data: any,
  page: any
}

// send mail with defined transport object

export default function contact({ data, page }: Props) {

  const contactForm = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const onSubmit = (FormData: any) => {
    setIsLoading(true);

    sendContactForm(FormData).then((res) => {
      setIsLoading(false);
      setIsSent(true);
      contactForm.current?.reset();
    }).catch((error) => {
      setIsLoading(false);
    });

  }

  const  CONTACT_BREADCRUNBS = [
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

  return (
    <>
    
      <GlobCta data={page} breadCrumbs={CONTACT_BREADCRUNBS} />
      <div className="container">
        <div className="py-0 py-xxl-5 my-5">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-3 order-1 order-lg-0 mt-5 mt-lg-0">
              {
                data.Contact.map((info: any, index: any) => {
                  return (
                    <Information data={info} key={index} />
                  )
                })
              }
            </div>
            <div className="col-12 col-lg-8 col-xl-9 order-0 order-lg-1 ps-lg-5 pb-4 pb-0">
              <div className="contact-form">
                <div className="heading mb-4">
                  <p className="h4">{page.Form.Title}</p>
                  <p>{page.Form.SubTitle}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} ref={contactForm} encType='multipart/form-data'>
                  <div className="row gy-3">
                    <div className="col-12 col-md-12">
                      <div className='row gy-3'>
                        <Inputs data={page.Form.Elements} errors={errors} register={register} />
                      </div>
                    </div>
                    <div className="col-12 form-indice">
                      <p className="mb-0 small" dangerouslySetInnerHTML={{ __html: page.Form.RequiredTitle }}></p>
                    </div>
                    <div className="col-sm-12">
                      {isLoading ?
                        <LoadingSpinner /> :
                        <button type="submit" className="btn btn-warning" disabled={isLoading} id="submit">{page.Form.Button.Title}</button>}
                    </div>
                  </div>
                </form>
                {isSent ?
                      <div className='col-sm-12'>
                        <Alert Message={page.Form.SubmitSuccessfulMessage} />
                      </div> : ''}
              </div>
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
    query Contact {
      contact {
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
            Form {
              Title
              SubTitle
              RequiredTitle
              Elements {
                Title
                Placeholder
                Error
                isRequired
                Name
                Class
                Type
              }
              Button {
                Title
                Href
                Type
              }
              SubmitSuccessfulMessage
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
      page: page.data.contact.data.attributes,
    },
  };
}