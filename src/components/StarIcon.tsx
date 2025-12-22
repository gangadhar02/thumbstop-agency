'use client';

interface StarIconProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function StarIcon({ className = '', color = '#E91E8C', size = 40 }: StarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`sparkle ${className}`}
    >
      <path
        d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z"
        fill={color}
      />
    </svg>
  );
}

