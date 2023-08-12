import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});


// if (!process.env.MICROCMS_SERVICE_DOMAIN2) {
//   throw new Error('MICROCMS_SERVICE_DOMAIN2 is required');
// }
// if (!process.env.MICROCMS_API_KEY2) {
//   throw new Error('MICROCMS_API_KEY2 is required');
// }

// // API取得用のクライアントを作成
// export const client2 = createClient({
//   serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN2,
//   apiKey: process.env.MICROCMS_API_KEY2,
// });