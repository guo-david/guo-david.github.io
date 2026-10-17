import '@mantine/core/styles.css';
import './fonts.css';

import React from 'react';
import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { LINKS } from './constants';

const siteUrl = 'https://guo-david.github.io/';
const title = 'David Guo | AI Researcher | University of Toronto';
const description =
  'David Guo is an AI researcher (MASc) at the University of Toronto’s D3M Lab, studying interactive AI systems, recommendation, user modeling, and spatial & conversational memory.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: 'website',
    siteName: 'David Guo',
    images: [
      {
        url: '/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'David Guo — AI Researcher (MASc), University of Toronto MIE, D3M Lab. Interactive AI systems, conversational recommendation, user modeling, spatial & conversational memory, and human–AI interaction.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [
      {
        url: '/social-preview.png',
        alt: 'David Guo — AI Researcher (MASc), University of Toronto MIE, D3M Lab.',
      },
    ],
  },
};

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}#person`,
  name: 'David Guo',
  url: siteUrl,
  image: `${siteUrl}me.png`,
  jobTitle: 'AI Researcher (MASc)',
  description,
  affiliation: [
    { '@type': 'CollegeOrUniversity', name: 'University of Toronto' },
    {
      '@type': 'Organization',
      name: 'Department of Mechanical & Industrial Engineering',
      parentOrganization: { '@type': 'CollegeOrUniversity', name: 'University of Toronto' },
    },
    { '@type': 'Organization', name: 'Data-Driven Decision Making (D3M) Lab', url: LINKS.lab },
  ],
  knowsAbout: [
    'Interactive AI systems',
    'Conversational recommendation',
    'User modeling',
    'Spatial & conversational memory',
    'Human–AI interaction',
  ],
  sameAs: [LINKS.linkedin, LINKS.scholar, LINKS.github],
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png?v=2" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
        />
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
