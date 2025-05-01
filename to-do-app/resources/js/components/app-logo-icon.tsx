import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="4" ry="4" fill="#4F46E5"/>
        <path d="M16 10H32" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M17 24L22 29L31 19" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    );
}
