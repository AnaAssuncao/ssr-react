import React,{useState} from "react";
import * as El from './Cards.style'

import CardCalc from '../CardCalc/CardCalc'

const objValueCompare={
  nameValueCompare:"United States Dollar",
   currencyValueCompare:'USD', 
   rateValueCompare:1
}

export default function Cards({dataCard}) {
  const [calc, isCalc] = useState(false)
  const [objCurrency,setObjCurrency]= useState(null)

  const handleObjCurrency = (dataCurrency) =>{
    isCalc(true)
    setObjCurrency(dataCurrency)
  }

  const handleIsCalc = () =>{
    isCalc(false)
  }

  return (
    <El.Cards>
      {calc?
        <CardCalc objCurrency={objCurrency} handleIsCalc={handleIsCalc} objValueCompare={objValueCompare}></CardCalc>
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