import React from "react";
import { useQuery, gql } from "@apollo/client";
import Cards  from "../../Components/Cards/Cards";
import * as El from './Home.style'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default function Home(props) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  const testData = data.rates.slice(0, 2);

  return (
   <El.HomeContainer>
     <El.Title>Cards</El.Title>
     <Cards dataCard={testData}/>
   </El.HomeContainer>
  )
}
