import { client, client2, client3 } from './api';
import { notFound } from 'next/navigation';

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

// 雑記の型定義
export type Info = {
  id: string;
  emoji: string;
  title: string;
  content: string;
  goodButton: number;
} & MicroCMSDate;

// テックブログの型定義
export type Tech = {
  id: string;
  title: string;
  content: string;
} & MicroCMSDate;

// 実績の型定義
export type Works = {
  id: string;
  title: string;
  image: MicroCMSImage;
  mockup: MicroCMSImage;
  imagehover: MicroCMSImage;
  platform: string;
  created: string;
  url: string;
  desc: string;
  stack: string[];
} & MicroCMSDate;

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type InfoArticle = Info & MicroCMSDate;
export type BlogArticle = Blog & MicroCMSDate;
export type WorksArticle = Works & MicroCMSDate;
export type TechArticle = Tech & MicroCMSDate;

// 雑記一覧を取得する関数
export const getInfoList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Info>({
      endpoint: 'info',
      queries,
    })
    .catch(notFound);
  return listData;
};

// 雑記の詳細を取得
export const getInfoDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Info>({
    endpoint: 'info',
    contentId,
    queries,
  });
  return detailData;
};

// 雑記の詳細をいいねボタンで編集
export const updateInfoArticle = async (contentId: string) => {
  const detailData = await client.update<Info>({
    endpoint: 'info',
    contentId,
    content: {
      title: 'test',
    },
  });
  return detailData;
};

// ブログ一覧を取得する関数
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client2
    .getList<Blog>({
      endpoint: 'blogs',
      queries,
    })
    .catch(notFound);
  return listData;
};

// ブログの詳細を取得
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client2.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  });
  return detailData;
};

// テックブログを取得する関数
export const getTechList = async (queries?: MicroCMSQueries) => {
  const listData = await client3
    .getList<Tech>({
      endpoint: 'tech',
      queries,
    })
    .catch(notFound);
  return listData;
};

// テックブログの詳細を取得
export const getTechDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client3.getListDetail<Tech>({
    endpoint: 'tech',
    contentId,
    queries,
  });
  return detailData;
};

// 実績一覧を取得する関数
export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Works>({
      endpoint: 'works',
      queries,
    })
    .catch(notFound);
  return listData;
};

// 実績の詳細を取得
export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Works>({
    endpoint: 'works',
    contentId,
    queries,
  });
  return detailData;
};
