export interface IWordpressPost {
  id: string;
  title: string;
  body: string;
  image?: string;
}

export async function getPosts(): Promise<IWordpressPost[]> {
  const res = await fetch(
    "http://helenaswane-wordpress.local/wp-json/wp/v2/posts",
  );
  if (!res.ok) throw new Error("Failed to fetch posts");

  const postsData = await res.json();

  const posts = await Promise.all(
    postsData.map(async (post: any) => {
      let imageUrl = "/placeholder.jpg";

      if (post.featured_media && post.featured_media !== 0) {
        // hämta media info
        const mediaRes = await fetch(
          `http://helenaswane-wordpress.local/wp-json/wp/v2/media/${post.featured_media}`,
        );
        if (mediaRes.ok) {
          const media = await mediaRes.json();
          imageUrl = media.source_url; // här får du riktig URL
        }
      }

      return {
        id: post.id.toString(),
        title: post.title.rendered,
        body: post.content.rendered,
        image: imageUrl,
      };
    }),
  );

  return posts;
}
