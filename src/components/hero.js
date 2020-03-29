import React from 'react';
import RichText from './richText';
import styled from 'styled-components'

const HeroWrapper = styled.section`
    background:url('${ props => props.backgroundImage}');
    height: calc(100vh - 66px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;

    div{
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background: rgba(0,0,0,0.8);
    }
`

const Hero = ({title, content, backgroundImage}) => {
    console.log(title)
    console.log(content)
    return(
        <HeroWrapper backgroundImage={backgroundImage}>
            <div>
                <RichText render={title} />
                <p>{content}</p>
            </div>
        </HeroWrapper>
    )
}

export default Hero