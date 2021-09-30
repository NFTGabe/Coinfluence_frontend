import styled from '@emotion/styled'
import { Container } from 'react-bootstrap'

import ReactangleGrid from 'assets/images/Rectangle-grid-right.svg'

const BecomeCoinfluencerBanner: React.FC = () => {
  return (
    <StyledBecomeCoinfluencerBanner>
      <div className="bg-container">
        <Container>
          <div>
            <div className="heading">
              <h3>
                Become a part of the first{' '}
                <span className="highlighted">100,000 Coinfluencers</span>
              </h3>
            </div>
            <p className="description">
              Even if you are not a token holder you can earn our tokens doing
              some work for the movement.
            </p>
          </div>
          <button className="btn download-button">Become an Owner</button>
        </Container>
      </div>
    </StyledBecomeCoinfluencerBanner>
  )
}

const StyledBecomeCoinfluencerBanner = styled.div`
  background: transparent linear-gradient(90deg, #251b59 0%, #38468c 100%) 0% 0%
    no-repeat padding-box;

  .bg-container {
    background-image: url(${ReactangleGrid});
    background-repeat: no-repeat;
    background-position: 98% center;
    padding-top: 53px;
    padding-bottom: 58px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    display: flex;
    margin-bottom: 18px;
    align-items: center;
    h3 {
      color: #fff;
      margin-right: 16px;
      margin-bottom: 0;
      font: normal normal 500 26px/39px Poppins;
      letter-spacing: 0px;
      opacity: 1;

      .highlighted {
        color: #00ff95;
      }
    }
  }
  .description {
    font: normal normal normal 18px/30px Roboto;
    letter-spacing: 0px;
    color: #ccccffcc;
  }

  .download-button {
    border-radius: 30px;
    background: transparent linear-gradient(90deg, #aa80ff 0%, #99aaff 100%) 0%
      0% no-repeat padding-box;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    color: var(--bright-purple-100-opacity);
    text-align: left;
    letter-spacing: 0px;
    opacity: 1;
    padding: 18px 30px;
    transition: all 0.1s ease-out;
    color: #fff;

    &:hover {
      background: transparent linear-gradient(90deg, #b793ff 0%, #a8b7ff 100%)
        0% 0% no-repeat padding-box;
    }
  }
`

export default BecomeCoinfluencerBanner
