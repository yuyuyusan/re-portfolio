import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ユーザー名とパスワード
const USERNAME = 'admin';
const PASSWORD = 'password';

// 認証処理
export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  // 認証情報がない場合、認証ダイアログを表示
  if (!authHeader) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }

  // ベーシック認証の情報をチェック
  const encodedCredentials = authHeader.split(' ')[1];
  const decodedCredentials = atob(encodedCredentials); // デコード
  const [inputUsername, inputPassword] = decodedCredentials.split(':');

  if (inputUsername !== USERNAME || inputPassword !== PASSWORD) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }

  return NextResponse.next();
}

// Middlewareを適用するパス
export const config = {
  matcher: '/:path*', // 全ページに適用
};
