import styled from '@emotion/styled'
import { Container } from 'react-bootstrap'

import CertikLogo from 'assets/images/CertiK_Logo_white_horizontal.svg'
import ReactangleGrid from 'assets/images/Rectangle-grid-right.svg'

const AuditedByCertikBanner: React.FC = () => {
  return (
    <StyledAuditedByCertikBanner>
      <div className="bg-container">
        <Container>
          <div>
            <div className="heading">
              <h3>Audited By</h3>
              <img src={CertikLogo} alt="Certik Logo" />
            </div>
            <p className="description">
              The Coinfluence Token is audited by{' '}
              <a href="//certik.io">certik.io</a>. Please download the audit
              report to learn more.
            </p>
          </div>
          <button className="btn download-button">
            <i className="far fa-arrow-alt-circle-down"></i>
            <span>Download Report</span>
          </button>
        </Container>
      </div>
    </StyledAuditedByCertikBanner>
  )
}

const StyledAuditedByCertikBanner = styled.div`
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
    }
  }
  .description {
    font: normal normal normal 18px/30px Roboto;
    letter-spacing: 0px;
    color: #ccccffcc;
    a {
      color: #00ff95;
      text-decoration: none;
    }
  }

  .download-button {
    background-color: #00ff95;
    border-radius: 30px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    color: var(--bright-purple-100-opacity);
    text-align: left;
    letter-spacing: 0px;
    opacity: 1;
    padding: 18px 30px;
    transition: all 0.1s ease-out;

    .svg-inline--fa {
      margin-right: 9px;
      width: 18px;
      height: 18px;
    }

    &:hover {
      background-color: #40f470;
    }
  }
`

export default AuditedByCertikBanner
