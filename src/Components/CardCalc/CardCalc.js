import React,{useState} from "react";
import * as El from './CardCalc.style'

function CurrencyInfomation ({nameInfo, currencyInfo}) {
  return(
    <El.CurrencyInfo>
        <El.CardTitle> {currencyInfo} </El.CardTitle>
        <El.CardSubTitle>{ nameInfo} </El.CardSubTitle>
    </El.CurrencyInfo>
  )
}

export default function CardCalc({objCurrency,objValueCompare, handleIsCalc}) {
  const { name, currency, rate } = objCurrency
  const { nameValueCompare, currencyValueCompare, rateValueCompare } = objValueCompare

  const [value, setValue] = useState(rateValueCompare)

  const handleValue= (value) =>{
    const resp = Number(rate) * value
    setValue(resp)
  }

  return (
        <El.Container >
          <El.Button onClick={()=>handleIsCalc()}>Voltar</El.Button>
          <El.CardCalc>
              <El.CardInput 
                defaultValue={1}
                maxLength={8} 
                onChange={(e)=>handleValue(e.target.value)}></El.CardInput>
              <CurrencyInfomation nameInfo={nameValueCompare} currencyInfo={currencyValueCompare}> </ CurrencyInfomation >

              <El.Rate>  x  {Number(rate).toFixed(4)}</El.Rate>
              <CurrencyInfomation nameInfo={name} currencyInfo={currency}/>
         
              <El.RespCalc> = {Number(value).toFixed(4)}</El.RespCalc>
              <CurrencyInfomation nameInfo={name} currencyInfo={currency}/>
          </El.CardCalc>
        </El.Container>
  )

  }