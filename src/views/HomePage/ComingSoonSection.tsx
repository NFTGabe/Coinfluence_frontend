import styled from '@emotion/styled'
import Title from 'components/Title'
import { Container } from 'react-bootstrap'

import CoinMarketCapLogo from 'assets/images/Logos/CoinMarketCap Logo/Coinmarketcap_Logo.svg'
import CoinGeckoLogo from 'assets/images/Logos/CoinGecko Logo/Coingecko_Logo.svg'
import BinanceLogo from 'assets/images/Logos/Binance Logo/Binance_Logo.svg'
import PancakeswapLogo from 'assets/images/Logos/PancakeSwap Logo/Pancakeswap_Logo.svg'

const logos = [CoinMarketCapLogo, CoinGeckoLogo, BinanceLogo, PancakeswapLogo]

const ComingSoonSection: React.FC = () => {
  return (
    <StyledComingSoonSection>
      <Title className="section-title">
        Coming <span>Soon</span>
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
    </StyledComingSoonSection>
  )
}

const StyledComingSoonSection = styled.section`
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
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;

      img {
        transform: scale(0.8);
        opacity: 0.3;
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

export default ComingSoonSection
