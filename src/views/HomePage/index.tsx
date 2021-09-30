import AsSeenInSection from './AsSeenInSection'
import AuditedByCertikBanner from './AuditedByCertikBanner'
import BecomeCoinfluencerBanner from './BecomeCoinfluencerBanner'
import ComingSoonSection from './ComingSoonSection'
import OurTrustedPartnershipsSection from './OurTrustedPartnershipsSection'

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <AuditedByCertikBanner />
      <OurTrustedPartnershipsSection />
      <BecomeCoinfluencerBanner />
      <ComingSoonSection />
      <AsSeenInSection />
    </div>
  )
}

export default HomePage
