'use client';
import type { Metadata } from 'next';
import styles from './index.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// export const metadata: Metadata = {
//   title: 'CONTACT お問い合わせ',
// };
export default function StaticPage() {
  const router = useRouter();
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await submit_hubspot_form(firstname, lastname, email, message);
  };

  const submit_hubspot_form = async (
    firstname: string,
    lastname: string,
    email: string,
    message: string
  ) => {
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

    return await axios
      .post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          portalId,
          formGuid,
          fields: [
            {
              name: 'firstname',
              value: firstname,
            },
            {
              name: 'lastname',
              value: lastname,
            },
            {
              name: 'email',
              value: email,
            },
            {
              name: 'message',
              value: message,
            },
          ],
        }
      )
      .then(() => {
        router.push('/contact/thanks/');
      });
  };

  return (
    <>
      <section className={`${styles.container}`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <fieldset className={styles.formField}>
              <legend className={styles.formLegend}>
                <span className={styles.formJp}>Name</span>
                <span className={styles.formRequire}>*Required</span>
              </legend>
              <div className={`${styles.formInnerColumn} ${styles.formInner}`}>
                <div className={styles.formInnerColumn__cont}>
                  <label className={styles.formInnerTitle} htmlFor="lastname">
                    First Name
                  </label>
                  <input
                    className={styles.formInnerInput}
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={lastname}
                    placeholder="John"
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formInnerColumn__cont}>
                  <label className={styles.formInnerTitle} htmlFor="firstname">
                    Last Name
                  </label>
                  <input
                    className={styles.formInnerInput}
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={firstname}
                    placeholder="Smith"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>
            </fieldset>
            <fieldset className={styles.formField}>
              <div className={styles.formInner}>
                <label className={styles.formInnerTitle} htmlFor="email">
                  <span className={styles.formJp}>Email</span>
                  <span className={styles.formRequire}>*Required</span>
                </label>
                <input
                  className={styles.formInnerInput}
                  id="email"
                  name="email"
                  placeholder="your@email.address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </fieldset>
            <fieldset className={styles.formField}>
              <div className={styles.formInner}>
                <label className={styles.formInnerTitle} htmlFor="message">
                  <span className={styles.formJp}>Content</span>
                  <span className={styles.formRequire}>*Required</span>
                </label>
                <textarea
                  className={styles.formInnerTextarea}
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </fieldset>
          </div>
          <button className={styles.formButton} type="submit">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
