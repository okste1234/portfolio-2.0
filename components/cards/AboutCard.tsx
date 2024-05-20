import Image from "next/image";

import userImg from "../../public/user.jpg";

export default function AboutCard() {
  return (
    <div className="sm:rounded-3xl sm:bg-secondary w-full flex flex-col xl:flex-row overflow-hidden sm:border">
      <div className="w-full aspect-[1.3] xl:h-[404px] xl:w-72 rounded overflow-hidden">
        <Image
          src={userImg}
          alt="me"
          className="object-cover grayscale w-full h-full"
          priority
        />
      </div>

      <div className="flex flex-col pt-6 sm:p-6 lg:p-8 flex-1 space-y-3">
        <h2 className="text-xl">My Coding Journey</h2>
        <p className="text-sm text-muted-foreground leading-loose">
          My software development career has been focused on creating custom applications and dApps that empower protocols and businesses through innovative solutions. I specialize in delivering excellence and tailored solutions, and I am proficient in a wide range of technologies, including Smart Contracts, JavaScript, ReactJS, NextJS, Cairo, Rust, and others. Additionally, my expertise extends to both EVM and non-EVM compatible blockchains, smart contract development, frontend engineering, and protocol research and development.
        </p>
        <p className="text-sm text-muted-foreground leading-loose">
          I stay up to date on blockchains and business trends, embodying a commitment to
          continuous learning and innovation, with the goal of improving
          people&apos;s lives through intuitive and visually appealing software
          solutions. Let&apos;s go on a journey together to turn your ideas into
          digital realities that exceed your expectations.
        </p>
      </div>
    </div>
  );
}
