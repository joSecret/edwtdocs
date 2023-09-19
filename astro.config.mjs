import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://josecret.github.io',
  base: '/edwtdocs',

  integrations: [
    starlight({
      title: 'EDWT Docs',
      social: {
        github: 'https://github.com/joSecret/edwtdocs',
      },
      logo: {
        src: './src/assets/logo.svg',
      },
      customCss: [
        './src/styles/custom.css',
        './src/styles/edwt/vars.pcss.css',
        './src/styles/edwt/api.pcss.css',
        './src/styles/edwt/reboot.pcss.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/start/introduction' },
            { label: 'Environment Setup', link: '/start/env-setup' },
            { label: 'Working with PCSS', link: '/start/pcss' },
            { label: 'Compiled Files', link: '/start/compiled-files' },
            { label: 'File Structure', link: '/start/file-structure' },
            { label: 'Resources & assets', link: '/start/resources-assets' },
            { label: 'Changelog', link: '/start/changelog' },
          ],
          // autogenerate: { directory: 'guides' },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: 'Example Guide', link: '/guides/example/' },
          // ],
        },
        {
          label: 'Foundation',
          autogenerate: { directory: 'foundation' },
        },
        {
          label: 'Utilities',
          autogenerate: { directory: 'utilities' },
        },
        {
          label: 'Forms',
          autogenerate: { directory: 'forms' },
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
        {
          label: 'Custom components',
          autogenerate: { directory: 'custom' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
