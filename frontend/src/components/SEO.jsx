import { useEffect } from "react";
import {
  buildAbsoluteUrl,
  defaultDescription,
  defaultImage,
  siteName,
} from "../utils/siteMetadata";

function upsertMeta(attribute, value, content) {
  const selector = `meta[${attribute}="${value}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  const selector = `link[rel="${rel}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let tag = document.head.querySelector(`script#${id}`);

  if (!tag) {
    tag = document.createElement("script");
    tag.setAttribute("id", id);
    tag.setAttribute("type", "application/ld+json");
    document.head.appendChild(tag);
  }

  tag.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  const tag = document.head.querySelector(`script#${id}`);

  if (tag) {
    tag.remove();
  }
}

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
  useEffect(() => {
    const canonicalUrl = buildAbsoluteUrl(path);
    const imageUrl = buildAbsoluteUrl(image);
    const robots = noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    if (keywords.length > 0) {
      upsertMeta("name", "keywords", keywords.join(", "));
    } else {
      const tag = document.head.querySelector('meta[name="keywords"]');

      if (tag) {
        tag.remove();
      }
    }

    upsertLink("canonical", canonicalUrl);

    if (schema.length > 0) {
      upsertJsonLd("structured-data", {
        "@context": "https://schema.org",
        "@graph": schema,
      });
    } else {
      removeJsonLd("structured-data");
    }
  }, [description, image, keywords, noIndex, path, schema, title, type]);

  return null;
}

export default SEO;
