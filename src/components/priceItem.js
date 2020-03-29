import React from 'react'
import RichText from './richText';
import styled from 'styled-components'

const PriceItemWrapper = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    margin: 0 auto;
    background: ${props => props.mostPopular ? 'orange' : '#eee'};
    color: ${props => props.mostPopular ? 'white' : 'black'};
    padding: 10px;
    position: relative;
    .price{
        text-align: center;
        font-size: 30px;
        background: rgba(0,0,0,0.2);
        padding: 10px;
        margin-left: -10px
        margin-right: -10px;

        .duration{
            font-size: 16px;
        }
    }

    .most-popular{
        position: absolute;
        right: 0;
        top: 0;
        padding: 5px;
        color: white;
        background: green;
        font-weight: bold;
    }
    .description{
        padding-top: 15px;
    }
`

function PriceItem({title, price, mostPopular, description}) {
    return (
        <PriceItemWrapper mostPopular={mostPopular}>
            {!!mostPopular &&
            <div className="most-popular">
                Most Popular
            </div>
            }
            <RichText render={title} />
            <div className="price">
                ${price} <span className="duration">/Month</span>
            </div>
            <div className="description">
                <RichText render={description} />
            </div>
        </PriceItemWrapper>
    )
}

export default PriceItem
