import { useState } from 'react';
export default function useMail() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const send = async () => {
    await fetch('http://localhost:3000/api/mail', {
      method: 'POST',
      body: `
名前
${name}

お問い合わせ内容
${message}
`,
    });
  };

  return {
    setName,
    setMessage,
    send,
  };
}
