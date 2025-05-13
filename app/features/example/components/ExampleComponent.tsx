import styled from "@emotion/styled"

export const ExampleComponentInner = styled.div`
  color: ${({ theme }) => {
    console.log(theme)
    return theme.colors.primary
  }};
  background-color: ${({ theme }) => theme.colors.background};
`

export const ExampleComponent = () => {
  return <ExampleComponentInner>ExampleComponent</ExampleComponentInner>
}
