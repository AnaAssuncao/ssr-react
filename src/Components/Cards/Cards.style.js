import styled from 'styled-components'

export const Cards= styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
`

export const CardsContainer = styled.div`
  display: flex;
  height: 65%;
  justify-content:center;
  flex-wrap: wrap;
  width: 100%;
`

export const Card= styled.div`
  border: 1px solid #ebebeb;
  border-radius:15px;
  box-shadow: 0px 1px 10px #ebebeb;
  margin:15px;
  padding: 20px;
  position:relative;
  width: 40%;

  &:hover {
    box-shadow: 0px 2px 10px #4c586c;
  }
`
export const CardItem = styled.h3`
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.h3`
  color: #191f28;
  line-height: 1.5;
  font-size:18px;
  font-weight: 600;
  margin-bottom:8px;
`

export const CardSubTitle = styled.span`
  color: #4c576c;
  line-height: 1.33;
  font-size:14px;
`

export const CardValue = styled.span`
  bottom:15px;
  color: #191f28;
  font-size:24px;
  font-weight: 600;
  right:15px;
  position: absolute;
`