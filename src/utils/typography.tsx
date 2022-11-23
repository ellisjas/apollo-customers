import styled, { css } from 'styled-components'

export const defaultFont = 'verdana, sans-serif'
export const defaultFontColor = '#29323a'

const baseTypographyStyles = css`
  font-family: ${defaultFont};
  font-weight: 400;
  margin: 0;
`

export const Heading = styled.h1`
  ${baseTypographyStyles}
  font-size: 1.3rem;
  color: ${defaultFontColor};
`
export const Heading3 = styled.h3`
  ${baseTypographyStyles}
  font-size: 1.2rem;
  color: ${defaultFontColor};
`
export const Paragraph = styled.p`
  ${baseTypographyStyles}
  font-size: 0.8rem;
  color: #afafb0;
`
