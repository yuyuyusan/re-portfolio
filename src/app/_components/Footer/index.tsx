import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <figure>
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
        />  
      </figure>
      <p className="copy">
        &copy; 2023 Yu
      </p>
    </footer>
  )
}