import React,{useState} from "react";
import * as El from './CardCalc.style'

export default function CardCalc({objCurrency,handleIsCalc}) {
  const { name, currency, rate } = objCurrency
  const [value, setValue] = useState(rate)

  const handleValue= (qt) =>{
    const resp = Number(rate) * qt
    setValue(resp)
  }

  return (
        <El.Container >
          <El.Button onClick={()=>handleIsCalc()}>Voltar</El.Button>
          <El.Info>
              <El.CardTitle>{currency}</El.CardTitle>
              <El.CardSubTitle>{name}</El.CardSubTitle>
          </El.Info>
          <El.CardCalc>
              <El.CardInput 
                defaultValue={1} 
                maxlength={8} 
                onChange={(e)=>handleValue(e.target.value)}></El.CardInput>

              <El.Rate>  x  {Number(rate).toFixed(4)}</El.Rate>
              <El.RespCalc> = {Number(value).toFixed(4)}</El.RespCalc>
          </El.CardCalc>
 
        </El.Container>
  )

  }