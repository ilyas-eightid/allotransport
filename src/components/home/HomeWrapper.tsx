import React from 'react'
import Hero from './Hero'
import Statistic from './Statistic'
import Signup from '../sections/Signup'
import Transports from '../sections/transports'
import Privacypolicy from '../sections/Privacypolicy'

type Props = {}

export default function HomeWrapper({ }: Props) {
    return (
        <>
            <Hero />
            <Statistic />
            <Signup />
            <Transports />
            <Privacypolicy />
        </>
    )
}