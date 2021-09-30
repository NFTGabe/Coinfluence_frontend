import styled from '@emotion/styled'
import Title from 'components/Title'

import BBCLogo from 'assets/images/Logos/BBC Logo/BBC_Logo.svg'
import FortuneLogo from 'assets/images/Logos/Fortune Logo/Fortune_Logo.svg'
import SlateLogo from 'assets/images/Logos/Slate Logo/Slate_Logo.svg'
import TimeLogo from 'assets/images/Logos/Time Logo/Time_Logo.svg'
import YahooLogo from 'assets/images/Logos/Yahoo Logo/Yahoo_Logo.svg'
import { Container } from 'react-bootstrap'

const logos = [BBCLogo, FortuneLogo, SlateLogo, TimeLogo, YahooLogo]

const AsSeenInSection: React.FC = () => {
  return (
    <StyledAsSeenInSection>
      <Title className="section-title">
        As Seen <span>In</span>
      </Title>

      <Container>
        <div className="logo-list-container">
          {logos.map((l) => (
            <div key={l} className="logo-container">
              <img src={l} alt="logo" />
            </div>
          ))}
        </div>
      </Container>
    </StyledAsSeenInSection>
  )
}

const StyledAsSeenInSection = styled.section`
  background-color: #2e1f4c08;
  padding-top: 110px;
  padding-bottom: 120px;

  .section-title {
    margin-bottom: 79px;
  }

  .logo-list-container {
    display: flex;
    justify-content: space-between;

    .logo-container {
      width: 184px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        transform: scale(0.8);
        opacity: 0.2;
        transition: all 0.1s ease-out;
        filter: saturate(0);
      }

      &:hover {
        img {
          transform: scale(1);
          opacity: 1;
          filter: saturate(1);
        }
      }
    }
  }
`

export default AsSeenInSection
