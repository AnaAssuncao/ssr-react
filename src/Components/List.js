import React from "react";
import * as El from '../Style/HomeStyle.style'


export default function List({dataList}) {

  return (
    <El.ListContainer>
      {dataList.map(({ currency, rate }) => (
        <El.ListItem  key={currency}>
          <p>{currency}: {rate}</p>
        </El.ListItem>
      ))}
    </El.ListContainer>
  )

  }