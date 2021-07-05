import React from 'react';

const navItems = [
  {
    caption: 'Blog',
    href: '/blog',
  },
  {
    caption: 'Github',
    href: 'https://www.github.com/kenbarbour',
  },
];

const Header = () => (
<nav class="flex items-center justify-between flex-wrap bg-grey p-4">
    <div class="flex items-center flex-no-shrink mr-6">
      <a href="/" class="font-semibold text-xl tracking-tight">React Skeleton</a>
    </div>
    <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        { navItems.map(({caption, href}) => (
          <a href={href} class="block mt-4 sm:inline-block sm:mt-0 mr-4">
            {caption}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Header;
