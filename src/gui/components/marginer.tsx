import React from 'react'
import styled from 'styled-components'

const HorizontalMargin = styled.span<{ margin?: number }>`
  display: flex;
  width: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}px`)};
`

const VerticalMargin = styled.span<{ margin?: number }>`
  display: flex;
  height: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}px`)};
`

const Marginer = (props: any) => {
  const { direction } = props

  if (direction === 'horizontal') return <HorizontalMargin {...props} />
  else {
    return <VerticalMargin {...props} />
  }
}

Marginer.defaultProps = {
  direction: 'horizontal',
}

export default Marginer
