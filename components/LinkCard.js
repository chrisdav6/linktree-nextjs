import Image from 'next/image';

const LinkCard = ({ href, title, image }) => {
  return (
    <a
      href={href}
      target='_blank'
      className='flex items-center w-full p-1 rounded-md hover:scale-105 transition-all border bg-gray-100 mb-3'
    >
      <div className='flex items-center w-full'>
        {image && (
          <Image
            className='rounded-md'
            src={image}
            width={40}
            height={40}
            alt={title}
          />
        )}
        <h2 className='font-semibold w-full text-center text-gray-700'>
          {title}
        </h2>
      </div>
    </a>
  );
};

export default LinkCard;