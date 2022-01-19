import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards  from "../../Components/Cards/Cards";
import * as El from './Information.style'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      name
      currency
      rate
    }
  }
`;

export default function Information(props) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  const testData = data.rates.slice(0, 8);

  return (
   <El.HomeContainer>
     <El.Title>Taxa de câmbio</El.Title>
     <Cards dataCard={testData}/>
   </El.HomeContainer>
  )
}
