import styled from 'styled-components'

const BrandContainer = styled.div<{ color: string; hoverColor: string; size?: number; withShadow: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  // TODO police
  /* font-family: 'Oxygen-Bold'; */
  font-weight: bold;
  font-size: ${({ size }) => (size ? size + 'rem' : '1.25rem')};
  color: ${({ color }) => (color ? color : '#000')};

  &:hover {
    color: ${({ color, hoverColor }) => (hoverColor ? hoverColor : color ? color : '#000')};

    div {
      color: ${({ color, hoverColor, theme }) => (hoverColor ? hoverColor : color ? color : theme.specialTextColor)};
    }
  }
`

const Brand = (props: any) => {
  const { color, hoverColor, size, withShadow } = props

  return (
    <BrandContainer color={color} hoverColor={hoverColor} size={size} withShadow={withShadow}>
      Volya
    </BrandContainer>
  )
}

export default Brand
