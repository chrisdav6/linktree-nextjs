import Image from 'next/image';
import data from '../../data.json';
import LinkCard from '../../components/LinkCard';

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
    </div>
  );
}
