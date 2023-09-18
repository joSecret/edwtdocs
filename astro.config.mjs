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
      ],
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: 'Example Guide', link: '/guides/example/' },
          // ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
