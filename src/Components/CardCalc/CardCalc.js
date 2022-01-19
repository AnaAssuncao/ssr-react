import React,{useState} from "react";
import * as El from './CardCalc.style'

function CurrencyInfomation ({nameInfo, currencyInfo}) {
  return(
    <El.CurrencyInfo>
        <El.CardTitle> {nameInfo} </El.CardTitle>
        <El.CardSubTitle>{ currencyInfo} </El.CardSubTitle>
    </El.CurrencyInfo>
  )
}

export default function CardCalc({objCurrency,handleIsCalc}) {
  const { name, currency, rate } = objCurrency
  const [valueUSD, setValueUSD] = useState(1)

  const handleValue= (qt) =>{
    const resp = Number(rate) * qt
    setValueUSD(resp)
  }

  return (
        <El.Container >
          <El.Button onClick={()=>handleIsCalc()}>Voltar</El.Button>
          <El.CardCalc>
              <El.CardInput 
                defaultValue={1}
                maxlength={8} 
                onChange={(e)=>handleValue(e.target.value)}></El.CardInput>
              <CurrencyInfomation nameInfo={"USD"} currencyInfo={"United States Dollar"}> </ CurrencyInfomation >

              <El.Rate>  x  {Number(rate).toFixed(4)}</El.Rate>
              <CurrencyInfomation nameInfo={name} currencyInfo={currency}/>
         
              <El.RespCalc> = {Number(valueUSD).toFixed(4)}</El.RespCalc>
              <CurrencyInfomation nameInfo={name} currencyInfo={currency}/>
          </El.CardCalc>
 
        </El.Container>
  )

  }