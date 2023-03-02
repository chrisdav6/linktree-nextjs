import Image from 'next/image';
import data from '../../data.json';
import LinkCard from '../../components/LinkCard';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='flex flex-col items-center mx-auto mt-16 px-16'>
      <Image
        className='rounded-full'
        src={data.avatar}
        width={96}
        height={96}
        alt={data.name}
      />
      <h1 className='font-bold mt-4 text-xl mb-8 text-white'>{data.name}</h1>

      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

      <div className='flex gap-2 text-white text-2xl mt-6'>
        {data.socials.map((icon) => {
          if (icon.href.includes('twitter')) {
            return (
              <a href={icon.href} target='_blank' key={icon.href}>
                <FaTwitter className='hover:scale-125 hover:text-blue-600 transition-all duration-500' />
              </a>
            );
          }
          if (icon.href.includes('github')) {
            return (
              <a href={icon.href} target='_blank' key={icon.href}>
                <FaGithub className='hover:scale-125 hover:text-black transition-all duration-500' />
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
