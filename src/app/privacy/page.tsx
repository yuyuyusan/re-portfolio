import type { Metadata } from 'next';
import styles from './index.module.scss';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
};
export default function About() {
  return (
    <>
      <section className={`${styles.privacy}`}>
        <div className={styles.container}>
          <h3 className={styles.title}>利用規約とプライバシー</h3>
          <p className={styles.desc}>
            当サイトは、個人のウェブサイトであり、個人情報の保護に関する法律をはじめとする個人情報の保護に関する法令、ガイドラインおよび本プライバシーポリシーを遵守いたします。
          </p>
          <h3 className={styles.title}>個人情報の利用目的</h3>
          <p className={styles.desc}>
            当サイトでは、書籍予約特典のお申し込みやお問い合わせを受けた際に、お名前、メールアドレス等の個人情報をご登録いただきます。
            <br />
            これらの個人情報は特典の情報送付やご質問に対する回答などを電子メールでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。特典以外での無料セミナーのご案内なども行いません。
          </p>
          <h3 className={styles.title}>個人情報の第三者への開示</h3>
          <p className={styles.desc}>
            当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
            <br />
            本人のご了解がある場合 法令等への協力のため、開示が必要となる場合
          </p>
          <h3 className={styles.title}>
            個人情報の開示、訂正、追加、削除、利用停止
          </h3>
          <p className={styles.desc}>
            ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。
          </p>
          <h3 className={styles.title}>Cookie（クッキー</h3>
          <p className={styles.desc}>
            当サイトでは、コンテンツの情報の収集にCookieを使用しています。Cookieは、ユーザーがサイトを訪れた際に、そのユーザーのコンピュータ内に記録されます。
            <br />
            ただし、記録される情報には、ユーザー名やメールアドレスなど、個人を特定するものは一切含まれません。また、当サイトではユーザーの方々がどのようなサービスに興味をお持ちなのかを分析したり、ウェブ上での効果的な広告の配信のためにこれらを利用させていただく場合があります。
          </p>
          <h3 className={styles.title}>
            当サイトが使用しているアクセス解析ツールについて
          </h3>
          <p className={styles.desc}>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            <br />
            このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは{' '}
            <a
              href="https://www.google.com/analytics/terms/jp.html"
              target="_blank"
              rel="noopenner noreferrer"
              className={styles.link}
            >
              こちら
            </a>
            をご参照ください。
          </p>
          <h3 className={styles.title}>当サイトの広告について</h3>
          <p className={styles.desc}>
            当サイトでは「Amazonアソシエイト」などのアフィリエイトプログラムや第三者配信広告サービス「GoogleAdsense」を利用しています。
            <br />
            GoogleAdsenseでは広告配信プロセスにおいてデータを収集するために、Cookieを使用しています。GoogleでCookieを使用することにより、インターネットにおけるご自身のサイトや他のサイトへのアクセス情報に基づいてユーザーに広告を配信することが可能になります。
            <br />
            Cookieを使用しないように設定するには
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              target="_blank"
              rel="noopenner noreferrer"
              className={styles.link}
            >
              こちら
            </a>
            をご参照ください。
          </p>
          <h3 className={styles.title}>著作権について</h3>
          <p className={styles.desc}>
            当サイトに掲載されている情報についての著作権は放棄しておりません。
            <br />
            著作権法により認められている引用の範囲である場合を除き「内容、テキスト、アイコン画像等」の無断転載・使用を固く禁じます。
          </p>
          <h3 className={styles.title}>免責事項</h3>
          <p className={styles.desc}>
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            <br />
            当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
            <br />
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <h3 className={styles.title}>プライバシーポリシーの変更について</h3>
          <p className={styles.desc}>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
            <br />
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
        </div>
      </section>
    </>
  );
}
