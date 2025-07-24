import Link from "next/link";

interface ButtonProps {
  btnText: string;
  href: string;
  height: string;
  width: string;
}

export default function Button({ btnText, href, height, width }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${width} ${height}
        "inline-block bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold rounded-lg transition duration-300 tracking-widest"`}
    >
      {btnText}
    </Link>
  );
}
