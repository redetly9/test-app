import React, { FC, JSX } from 'react'

type Props = {
    text: string
}

const GradientText: FC<Props> = ({ text }): JSX.Element => {
    return (
        <h1 className="font-montserrat text-4xl font-medium uppercase leading-[0.9] tracking-[0.02em] gradient-text sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] xl:leading-[98px]">
            {text}
        </h1>
    )
}

export default GradientText