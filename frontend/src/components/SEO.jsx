import { Helmet } from "react-helmet-async";
import {
  buildAbsoluteUrl,
  defaultDescription,
  defaultImage,
  siteName,
} from "../utils/siteMetadata";

function SEO({
  title,
  description = defaultDescription,
  path = "/",
  image = defaultImage,
  type = "website",
  keywords = [],
  noIndex = false,
  schema = [],
}) {
  const canonicalUrl = buildAbsoluteUrl(path);
  const imageUrl = buildAbsoluteUrl(image);
  const robots = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={canonicalUrl} />
      {schema.length > 0 ? (
        <script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": schema,
          })}
        </script>
      ) : null}
    </Helmet>
  );
}

export default SEO;
