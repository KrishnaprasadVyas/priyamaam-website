import Contact from "../components/Contact";
import SEO from "../components/SEO";

function ContactPage({ emails, links }) {
  return (
    <>
      <SEO
        title="Contact Dr. Priya Surana"
        description="Get in touch with Dr. Priya Surana for academic collaborations, research discussions, speaking requests, or project inquiries."
        path="/contact"
        image="/og-image.svg"
      />
      <Contact emails={emails} links={links} />
    </>
  )
}

export default ContactPage
