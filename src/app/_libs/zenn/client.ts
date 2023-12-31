import Parser from 'rss-parser';
import dayjs from 'dayjs';

// ZennのRSSフィードを取得する
export const getZennRssFeed = async () => {
  // RSSフィードを取得する
  const feed = await new Parser().parseURL(
    'https://zenn.dev/yuyuyusan/feed?all=1'
  );
  return feed.items.map((item) => ({
    return: {
      pagePosts: feed.items.map((item) => ({
        title: item.title ?? '',
        date: item.pubDate ? dayjs(item.pubDate).format('YYYY-MM-DD') : '',
        slug: item.link ?? 'https://zenn.dev/yuyuyusan',
        enclosure: item.enclosure ?? '',
      })),
      totalCount: feed.items.length,
    },
  }));
};
