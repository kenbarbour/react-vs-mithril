import React from 'react';

const footerNav = [
  {
    href: 'https://github.com/kenbarbour',
    caption: 'github/kenbarbour',
  },
]

const Footer = () => (
  <footer class="p-2 text-sm sm:flex font-light">
    <div class="sm:w-1/3">
      React Skeleton
    </div>
    <div class="sm:w-1/3 text-center">
      &#127279; Copyleft 2021
    </div>
    <div class="sm:w-1/3 md:flex text-right justify-end">
      {footerNav.map(({href, caption}) =>
        <a class="hover:underline" href={href}>{caption}</a>)}
    </div>
  </footer>
)

export default Footer;
