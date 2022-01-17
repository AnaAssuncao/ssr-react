import React from "react";
import { useQuery, gql } from "@apollo/client";
import List  from "./List";
import * as El from './HomeStyle.style'

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
     <El.Title>Lista</El.Title>
     <List dataList={testData}/>
   </El.HomeContainer>
  )
}
