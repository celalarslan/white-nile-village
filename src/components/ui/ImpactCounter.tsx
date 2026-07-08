'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ImpactItem {
  label: string;
  value: number;
  suffix?: string;
}

interface ImpactCounterProps {
  items: ImpactItem[];
}

function useCountUp(target: number, isVisible: boolean, duration = 2000): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (current !== start) {
        start = current;
        setCount(current);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}

function CounterItem({ item, isVisible }: { item: ImpactItem; isVisible: boolean }) {
  const count = useCountUp(item.value, isVisible);

  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6">
      <div className="text-3xl font-extrabold text-primary-800 md:text-4xl">
        {count.toLocaleString()}
        {item.suffix && (
          <span className="text-earth-600 font-bold ml-0.5 rtl:mr-0.5">{item.suffix}</span>
        )}
      </div>
      <div className="text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
        {item.label}
      </div>
    </div>
  );
}

export default function ImpactCounter({ items }: ImpactCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'grid gap-4 rounded-3xl bg-white p-6',
        'grid-cols-1 sm:grid-cols-3',
        'border border-gray-200/50 shadow-soft'
      )}
    >
      {items.map((item, index) => (
        <CounterItem key={index} item={item} isVisible={isVisible} />
      ))}
    </div>
  );
}
