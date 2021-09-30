import styled from '@emotion/styled'
import Title from 'components/Title'
import { Container } from 'react-bootstrap'

import CoinzillaLogo from 'assets/images/Logos/Coinzilla Logo/Coinzilla_Logo_light_background.svg'
import BscScanLogo from 'assets/images/Logos/BscScan Logo/Bscscan_Logo_light_background.svg'

const logos = [
  CoinzillaLogo,
  BscScanLogo,
  CoinzillaLogo,
  BscScanLogo,
  CoinzillaLogo,
]

const OurTrustedPartnershipsSection: React.FC = () => {
  return (
    <StyledOurTrustedPartnershipsSection>
      <Title className="section-title">
        Our trusted <span>Partnerships</span>
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
    </StyledOurTrustedPartnershipsSection>
  )
}

const StyledOurTrustedPartnershipsSection = styled.section`
  background-color: #fff;
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
        filter: saturate(0);
        transition: all 0.1s ease-out;
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

export default OurTrustedPartnershipsSection
