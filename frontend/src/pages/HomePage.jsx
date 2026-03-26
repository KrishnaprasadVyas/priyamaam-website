import Hero from '../components/Hero'

function HomePage({ profile, researchAreas, publicationsCount, certificationsCount }) {
  return (
    <Hero
      profile={profile}
      researchAreas={researchAreas}
      publicationsCount={publicationsCount}
      certificationsCount={certificationsCount}
    />
  )
}

export default HomePage
