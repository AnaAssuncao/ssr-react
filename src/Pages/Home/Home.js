import React from "react";

import * as El from './Home.style'

export default function Home() {
  return (
   <El.HomeContainer>
      <El.HomeTitle>Taxa de câmbio</El.HomeTitle>
      <El.HomeLegend>Taxa de câmbio é o preço de uma moeda estrangeira medido em unidades ou frações (centavos) da moeda nacional. </El.HomeLegend>
   </El.HomeContainer>
  )
}
