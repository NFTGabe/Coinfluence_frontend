import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  primaryColor?: string
  secondaryColor?: string
}

const Paragraph: React.FC<Props> = ({
  children,
  primaryColor = '#2e1f4c80',
  secondaryColor = '#2e1f4cb3',
}) => {
  const StyledParagraph = styled.p`
    text-align: left;
    font: normal normal normal 18px/30px Roboto;
    letter-spacing: 0px;
    color: ${primaryColor};

    b {
      color: ${secondaryColor};
      font-weight: 500;
    }
  `

  return (
    <StyledParagraph style={{ color: primaryColor }}>
      {children}
    </StyledParagraph>
  )
}

export default Paragraph
