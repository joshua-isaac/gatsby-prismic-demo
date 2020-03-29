import React from 'react'
import RichText from './richText';
import styled from 'styled-components'
import PriceItem from './PriceItem'

const PriceWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 15px;
    padding-top: 50px;
    >div:last-child{
        display: flex;
    }
`

const PriceList = ({title, prices}) => {
    return(
        <PriceWrapper>
            <RichText render={title} />
            <div>
            {prices.map((price, i) => {
                return(
                    <PriceItem
                        mostPopular={price.price_type === 'Most popular'}
                        description={price.price_list_description}
                        price={price.price_per_month}
                        type={price.price_type} 
                        title={price.price_list_title}
                        key={i}
                    />
                )
            })}
            </div>
        </PriceWrapper>
    )
}

export default PriceList