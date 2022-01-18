import React from "react";
import * as El from './Cards.style'

export default function Cards({dataCard}) {

  return (
    <El.CardsContainer>
      {dataCard.map(({ currency, rate }) => (
        <El.Card key={currency}>
          <El.CardItem  >
            <h3>{currency}</h3>
            <p>{rate}</p>
          </El.CardItem>
        </El.Card>
      ))}
    </El.CardsContainer>
  )

  }