import Parser from 'rss-parser';

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail?: string;
}

type CustomFeed = { [key: string]: any };
type CustomItem = { [key: string]: any };

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {
    item: ['description', 'content:encoded', 'category']
  },
  timeout: 10000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml, text/xml, */*'
  }
});

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching Tistory RSS feed...');

    // Directly fetch RSS from Tistory
    const RSS_URL = 'https://code-lab.tistory.com/rss';

    const feed = await parser.parseURL(RSS_URL);

    console.log(`Found ${feed.items?.length || 0} items in RSS feed`);

    if (!feed.items || feed.items.length === 0) {
      console.warn('No items found in RSS feed');
      return [];
    }

    const posts = feed.items.slice(0, 3).map((item: any) => {
      // Extract thumbnail from content:encoded or description
      const content = item['content:encoded'] || item.description || item.content || '';
      const thumbnailMatch = typeof content === 'string' ? content.match(/<img[^>]+src="([^">]+)"/) : null;

      // Clean up and validate thumbnail URL
      let thumbnail: string | undefined = undefined;
      if (thumbnailMatch && thumbnailMatch[1]) {
        let url = thumbnailMatch[1].trim();

        // Fix malformed URLs
        // "https:/cdn.example.com" -> "https://cdn.example.com"
        // "http:/example.com" -> "http://example.com"
        if (url.match(/^https?:\/[^\/]/)) {
          url = url.replace(/^(https?):\/([^\/])/, '$1://$2');
        }

        // Validate URL format
        try {
          const urlObj = new URL(url);
          if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
            thumbnail = url;
            console.log(`Valid thumbnail URL: ${url}`);
          }
        } catch (e) {
          console.warn(`Invalid thumbnail URL: ${url}`);
        }
      }

      // Clean up content snippet
      const contentText = typeof content === 'string' ? content : '';
      const textContent = contentText.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&').trim();
      const contentSnippet = textContent.slice(0, 120) + (textContent.length > 120 ? '...' : '');

      return {
        title: item.title || 'No Title',
        link: item.link || '#',
        pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        contentSnippet: contentSnippet || 'No description available',
        thumbnail: thumbnail,
      };
    });

    console.log(`Successfully parsed ${posts.length} blog posts`);
    return posts;

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
    }
    return [];
  }
}
