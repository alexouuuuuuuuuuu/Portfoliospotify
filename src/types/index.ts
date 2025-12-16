export interface Project {
  id: string;
  title: string;
  category: string;
  cover: string;
  role: string;
  tools: string[];
  description: string;
  problem: string;
  process: string;
  result: string;
  color: string;
}

export interface Playlist {
  id: string;
  name: string;
  icon: string;
  projects: string[];
}
