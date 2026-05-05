// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";
import { LikeC4VitePlugin } from "likec4/vite-plugin";

// https://astro.build/config
export default defineConfig({
  site: "https://unideb-advanced-software-engineering.github.io",
  base: "/26-tavasz-06-ask-zamunda",
  vite: {
    plugins: [/** @type {any} */ (LikeC4VitePlugin({}))],
  },
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Esettanulmány",
          slug: "esettanulmany",
        },
        {
          label: "SRS",
          link: "/srs.docx",
        },
        {
          label: "Architekturális karakterisztikák",
          slug: "ac",
        },
        {
          label: "Architekturálisan szignifikáns követelmények",
          slug: "asr",
        },
        {
          label: "Architekturális stílus",
          slug: "as",
        },
        {
          label: "Döntési jegyzőkönyvek",
          autogenerate: { directory: "adr" },
        },
		{
			label: "C4 diagramok",
			slug: "c4",
		},
      ],
    }),
    react(),
  ],
});