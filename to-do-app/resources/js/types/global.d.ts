import type { route as routeFn } from 'ziggy-js';

declare global {
    const route: typeof routeFn;
}

export interface SharedPageProps {
    auth?: {
      user: {
        id: number;
        name: string;
        email: string;
      };
    };
    flash?: {
      success?: string;
      error?: string;
    };
  }

  export type InertiaPageProps<T> = SharedPageProps & T;
