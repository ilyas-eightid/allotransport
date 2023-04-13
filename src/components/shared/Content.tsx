import { homeProps } from '@/interfaces/interface'
import React from 'react'


export default function Content({ data }: any) {
  return (
    <>
      {data.Content}
    </>
  )
}