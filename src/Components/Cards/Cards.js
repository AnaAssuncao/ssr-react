import React,{useState} from "react";
import * as El from './Cards.style'

import CardCalc from '../CardCalc/CardCalc'

export default function Cards({dataCard}) {
  const [calc, isCalc] = useState(false)
  const [objCurrency,setObjCurrency]= useState(null)

  const handleObjCurrency = (dataCurrency) =>{
    isCalc(true)
    setObjCurrency(dataCurrency)
  }

  const handleIsCalc = (dataCurrency) =>{
    isCalc(false)
  }

  return (
    <El.Cards>
      {calc?
        <CardCalc objCurrency={objCurrency} handleIsCalc={handleIsCalc}></CardCalc>
          :
          < El.CardsContainer>
        {dataCard.map(({ name, currency, rate }) => (
          <El.Card onClick={()=>handleObjCurrency({ name, currency, rate })} key={currency}>
            <El.CardItem >
              <El.CardTitle>{currency}</El.CardTitle>
              <El.CardSubTitle>{name}</El.CardSubTitle>
              <El.CardValue>{Number(rate).toFixed(4)}</El.CardValue>
            </El.CardItem>
          </El.Card>
        ))}
        </El.CardsContainer>
      }

    </El.Cards>
  )

  }