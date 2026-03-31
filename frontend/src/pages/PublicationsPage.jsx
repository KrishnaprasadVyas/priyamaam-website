import Publications from "../components/Publications";

function PublicationsPage({ items, scholarLink, featuredItems }) {
  return (
    <Publications
      items={items}
      scholarLink={scholarLink}
      featuredItems={featuredItems}
    />
  );
}

export default PublicationsPage;
