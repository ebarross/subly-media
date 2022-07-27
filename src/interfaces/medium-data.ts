export interface MediumData {
  id: number;
  name: string;
  cover: string;
  languages: Array<string>;
  status: 'ready' | 'transcribing' | 'error';
  createdAt: string;
  updatedAt: string;
  errorMessage?: string;
}
