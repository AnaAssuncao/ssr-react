import styled from 'styled-components'

export const FooterContainer = styled.footer`
    align-items: center;
    background-color:#4c576c;
    color:#fff;
    display: flex;
    height:30%;
    justify-content: space-between;
    padding: 20px;
    widht:100%;
  
`
export const FooterMenu = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left:50px;
`

export const FooterItem= styled.li`
    list-style-type: none;
    margin-top:30px;   
`

export const FooterText= styled.p`
    color: #fff;
    cursor:pointer;
    font-size:20px;
    text-decoration: none;
`