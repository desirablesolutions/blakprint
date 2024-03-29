import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Blakprint',
  tagline: 'a closure evaluator & composer for architecting software.',
  favicon: 'img/favicon.ico',


  url: 'https://blakprint.desirablesolutions.org',

  baseUrl: '/',

  organizationName: 'desirablesolutions', // Usually your GitHub org/user name.
  projectName: 'blakprint', // Usually your repo name.

  onBrokenMarkdownLinks: 'warn',
  onBrokenLinks: "ignore",


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
      
        
        },
        blog: {
          showReadingTime: true,

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Blakprint',
      logo: {
        alt: 'Blakprint Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
           {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/desirablesolutions/blakprint',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Information',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Support',
          items: [

            {
              label: 'Ko-fi',
              href: 'https://discordapp.com/invite/docusaurus',
            },
      
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/desirablesolutions/blakprint',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Desirable Solutions`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
