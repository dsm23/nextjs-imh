const POST_GRAPHQL_FIELDS = `
  header
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          title
          description
          url
          height
          width
        }
      }
    }
  }
  slug
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractAsset(fetchResponse) {
  return fetchResponse?.data?.asset;
}

function extractAssetEntries(fetchResponse) {
  return fetchResponse?.data?.assetCollection?.items;
}

function extractCard(fetchResponse) {
  return fetchResponse?.data?.cardCollection?.items?.[0];
}

function extractCardEntries(fetchResponse) {
  return fetchResponse?.data?.cardCollection?.items;
}

function extractPage(fetchResponse) {
  return fetchResponse?.data?.pageCollection?.items?.[0];
}

function extractWelcome(fetchResponse) {
  return fetchResponse?.data?.welcomeCollection?.items?.[0];
}

function extractPageEntries(fetchResponse) {
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getAllAssetsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      assetCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }`
  );
  return extractAssetEntries(entries);
}

export async function getAsset(assetId) {
  const entry = await fetchGraphQL(
    `query {
      asset(id: "${assetId}") {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }`
  );
  return extractAsset(entry);
}

export async function getPreviewPageBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPage(entry);
}
// pageCollection(preview: $preview, limit: 10){
// pageCollection(where: { slug_exists: true }, order: date_DESC) {
export async function getAllPagesWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      pageCollection(where: { slug_exists: true }, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPageEntries(entries);
}

export async function getWelcomeForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      welcomeCollection(preview: ${preview ? "true" : "false"}) {
        items {
          header
          body {
            json
          }
          welcomePic {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
        }
      }
    }`,
    preview
  );

  const cards = await fetchGraphQL(
    `query {
      cardCollection(preview: ${preview ? "true" : "false"}, limit: 9) {
        items {
          entryUnused
          body {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  title
                  description
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }`
  );

  return {
    welcome: extractWelcome(entries),
    cards: extractCardEntries(cards),
  };
}

export async function getPageAndMorePages(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      pageCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    page: extractPage(entry),
    morePages: extractPageEntries(entries),
  };
}
