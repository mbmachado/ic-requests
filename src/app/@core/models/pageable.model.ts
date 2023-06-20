export interface Pageable<T = unknown> {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  links: [
    {
      url: string | null;
      label: string;
      active: boolean;
    }
  ];
  first_page_url: string;
  next_page_url: string;
  prev_page_url: string;
  last_page_url: string;
  path: string;
  from: number | null;
  to: number | null;
  data: T[];
}
