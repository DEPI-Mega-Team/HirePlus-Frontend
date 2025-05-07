import { useMemo } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface Company {
  id: string;
  name: string;
  description: string;
  location: string;
  logo: string;
  tags: string[];
  jobsCount: number;
  categories: string[];
  sales?: string;
}

const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Nomad',
    description: 'Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).',
    location: 'Paris, France',
    logo: '/assets/logos/nomad.svg',
    tags: ['Business Service'],
    jobsCount: 3,
    categories: ['Business Service'],
    sales: '$728,000',
  },
  {
    id: '2',
    name: 'Discord',
    description: "We'd love to work with someone like you. We care about creating a delightful experience.",
    location: 'Remote',
    logo: '/assets/logos/discord.svg',
    tags: ['Business Service'],
    jobsCount: 3,
    categories: ['Business Service'],
  },
  {
    id: '3',
    name: 'Maze',
    description: "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
    location: 'Remote',
    logo: '/assets/logos/maze.svg',
    tags: ['Business Service'],
    jobsCount: 3,
    categories: ['Business Service'],
  },
  {
    id: '4',
    name: 'Udacity',
    description: 'Udacity is a new type of online university that teaches the actual programming skills.',
    location: 'Remote',
    logo: '/assets/logos/udacity.svg',
    tags: ['Business Service'],
    jobsCount: 3,
    categories: ['Business Service'],
  },
  {
    id: '5',
    name: 'Webflow',
    description: 'Webflow is the first design and hosting platform built from the ground up for the mobile age.',
    location: 'Remote',
    logo: '/assets/logos/webflow.svg',
    tags: ['Business Service', 'Technology'],
    jobsCount: 3,
    categories: ['Business Service', 'Technology'],
  },
  {
    id: '6',
    name: 'Foundation',
    description: 'Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.',
    location: 'Remote',
    logo: '/assets/logos/foundation.svg',
    tags: ['Business Service', 'Crypto'],
    jobsCount: 3,
    categories: ['Business Service', 'Crypto'],
  },
];

function useSearchCompaniesService() {
  return useMemo(() => {
    if (API_BASE_URL) {
      // TODO: Replace with real API call logic
      // Example: fetch(`${API_BASE_URL}/companies`)
      return { companies: mockCompanies };
    } else {
      return { companies: mockCompanies };
    }
  }, []);
}

export default useSearchCompaniesService;
