import React from 'react';
import RichText from './richText';
import styled from 'styled-components'
import { Link } from 'gatsby';

const CallToActionBlockWrapper = styled.section`
    padding: 20px;
    background: #eee;
    border-radius: 20px;
    margin: 20px 0;

    .call-to-action-content{
        display: flex;
        .featured-image-wrapper{
            margin: auto 10px;
            background: white;
            padding: 10px;
            border-radius: 10px;
        }
        img{
            margin: 0;
            max-width: 100px;
        }
    }
`

const Button = styled.div`
    background: orange;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;

    a{
        color: white;
        padding: 8px 20px;
        display: inline-block;
        text-decoration: none;
    }
`

const CallToActionBlock = ({title, content, buttonLabel, buttonDestination, featuredImage}) => {
    return(
        <CallToActionBlockWrapper>

            <RichText render={title} />

            <div className="call-to-action-content">
                <RichText render={content} />
                <div className="featured-image-wrapper">
                    <img src={featuredImage} alt="featured" />
                </div>
            </div>

            <Button>
                <Link to={buttonDestination}>{buttonLabel}</Link>
            </Button>

        </CallToActionBlockWrapper>
    )
}

export default CallToActionBlock