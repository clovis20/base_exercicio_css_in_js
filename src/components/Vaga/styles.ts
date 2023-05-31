import styled from 'styled-components'

export const Lista = styled.li`
  border: 1px solid ${(props) => props.theme.CorSecundaria};
  background-color: ${(props) => props.theme.CorSecundaria};
  color: ${(props) => props.theme.CorPrincipal};
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

    :hover {
      background-color: ${(props) => props.theme.CorPrincipal};
      color: ${(props) => props.theme.CorSecundaria};
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.CorSecundaria};
    background-color: ${(props) => props.theme.CorPrincipal};
    color: ${(props) => props.theme.CorSecundaria};
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    :hover {
      border-color: ${(props) => props.theme.CorPrincipal};
      background-color: ${(props) => props.theme.CorSecundaria};
      color: ${(props) => props.theme.CorPrincipal};

    @media (max-width: 768px) {
      display: block;
    }
`
