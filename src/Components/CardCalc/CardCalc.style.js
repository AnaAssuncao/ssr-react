import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 60px 0;
  width: 100%;
`

export const Button= styled.button`
  background-color:#fff;
  border-radius:15px;
  color:#0097ff;
  cursor:point;
  font-size:24px;
  left: 15px;
  padding:15px;
  position: absolute;
  bottom: 15px;

  &:hover {
      background-color: #c0e4fd;
      box-shadow: 0px 2px 10px #ebebeb;
    }

`

export const CurrencyInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:20px;
  margin-right:30px;
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

export const CardCalc = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const CardInput = styled.input`
  border-bottom: 1px solid #000;
  color: #191f28;
  font-size:26px;
  text-align: center;
  width: 20%;

  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`

export const Rate = styled.span`
  color: #191f28;
  line-height: 1.33;
  font-size:28px;
  margin-right: 15px;
`

export const RespCalc = styled.span`
  color: #191f28;
  line-height: 1.33;
  font-size:28px;
  font-weight: 600;
`