import Parser from 'rss-parser';

const parser = new Parser();
// The RSS URL from the PRD seems to be for a specific category. Using the general RSS feed for more content.
const RSS_URL = 'https://code-lab.tistory.com/rss';

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(RSS_URL);
    return feed.items.slice(0, 3).map(item => {
      // Extract thumbnail from content:encoded
      const content = item['content:encoded'];
      const thumbnailMatch = content?.match(/<img[^>]+src="([^">]+)"/);
      
      return {
        title: item.title || 'No Title',
        link: item.link || '#',
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet: item.contentSnippet?.slice(0, 120) + '...' || 'No Snippet',
        thumbnail: thumbnailMatch ? thumbnailMatch[1] : undefined,
      };
    });
  } catch (error) {
    console.error('Error fetching or parsing RSS feed:', error);
    return [];
  }
}
