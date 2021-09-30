import styled from '@emotion/styled'
import { rgba } from 'polished'

interface Props {
  children: React.ReactNode
  className?: string
  mainColor?: string
  highlightColor?: string
  outline?: boolean
}

const Title: React.FC<Props> = ({
  children,
  className = '',
  mainColor = '#1F1F4D',
  highlightColor = '#AA80FF',
  outline = true,
}) => {
  const StyledTitle = styled.h2`
    font: normal normal 600 32px/52px Poppins;
    letter-spacing: 0px;
    text-align: center;
    color: ${mainColor};

    span {
      color: ${highlightColor};
      display: inline-block;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        height: 40%;
        width: 100%;
        left: 0;
        bottom: 2px;
        background-color: ${rgba(highlightColor, 0.25)};
      }
    }
  `

  return <StyledTitle className={className}>{children}</StyledTitle>
}

export default Title
