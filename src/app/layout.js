import './globals.css';

export const metadata = {
  title: 'Next JS Linktree App',
  description: 'Next.js + Tailwind CSS Linktree App',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gradient-to-b from-gray-600 to-gray-200'>
        {children}
      </body>
    </html>
  );
}
