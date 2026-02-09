'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ComponentProps, useState } from 'react';

interface Props extends Omit<ComponentProps<typeof Link>, 'href'> {
  href: string | ComponentProps<typeof Link>['href'];
  back?: boolean;
}

const TransitionLink = ({
  href,
  onClick,
  children,
  back = false,
  ...rest
}: Props) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isTransitioning) return;
    setIsTransitioning(true);

    const pageTransition = document.querySelector(
      '.page-transition',
    ) as HTMLElement | null;

    const pageTransitionInner = document.querySelector(
      '.page-transition--inner',
    ) as HTMLElement | null;

    const navigate = () => {
      if (back) {
        router.back();
      } else if (href) {
        const hrefString = href.toString();
        if (hrefString.startsWith('http') || hrefString.startsWith('//')) {
          window.location.href = hrefString;
          return;
        }
        router.push(href as any);
      } else if (onClick) {
        onClick(e);
      }

      setIsTransitioning(false);
    };

    if (pageTransition && pageTransitionInner) {
      // reset
      pageTransition.style.transform = 'translateY(100%)';
      pageTransitionInner.style.transform = 'translateY(100%)';

      // force repaint so reset is applied
      requestAnimationFrame(() => {
        pageTransition.style.transform = 'translateY(0%)';
      });

      setTimeout(navigate, 300);
    } else {
      // fallback if transition element missing
      navigate();
    }
  };

  return (
    <Link href={href as any} {...rest} onClick={handleLinkClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
