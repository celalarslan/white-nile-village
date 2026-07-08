'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Award,
  FolderKanban,
  FileBarChart,
  FileText,
  Handshake,
  Newspaper,
  Settings,
  LogOut,
  Menu,
  X,
  TreePine,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminSidebarProps {
  activePage?: string;
}

interface NavItem {
  key: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { key: 'registrations', label: 'Registrations', icon: Users, href: '/admin/registrations' },
  { key: 'trainings', label: 'Trainings', icon: GraduationCap, href: '/admin/trainings' },
  { key: 'certificates', label: 'Certificates', icon: Award, href: '/admin/certificates' },
  { key: 'projects', label: 'Projects', icon: FolderKanban, href: '/admin/projects' },
  { key: 'reports', label: 'Reports', icon: FileBarChart, href: '/admin/reports' },
  { key: 'documents', label: 'Documents', icon: FileText, href: '/admin/documents' },
  { key: 'partners', label: 'Partners', icon: Handshake, href: '/admin/partners' },
  { key: 'news', label: 'News', icon: Newspaper, href: '/admin/news' },
  { key: 'settings', label: 'Settings', icon: Settings, href: '/admin/settings' },
];

export default function AdminSidebar({ activePage = 'dashboard' }: AdminSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-sky-800/30 px-5 py-5">
        <TreePine className="h-7 w-7 text-green-400" />
        <div>
          <span className="block text-sm font-bold text-white">White Nile</span>
          <span className="block text-xs text-sky-300">Admin Panel</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.key;
            const Icon = item.icon;

            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium',
                    'transition-colors duration-150',
                    isActive
                      ? 'bg-green-600/20 text-green-400'
                      : 'text-sky-100/70 hover:bg-sky-800/40 hover:text-white'
                  )}
                >
                  <Icon className={cn('h-4.5 w-4.5 shrink-0', isActive && 'text-green-400')} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ms-auto h-1.5 w-1.5 rounded-full bg-green-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-sky-800/30 px-3 py-4">
        <button
          className={cn(
            'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium',
            'text-sky-100/60 transition-colors hover:bg-red-900/30 hover:text-red-300'
          )}
        >
          <LogOut className="h-4.5 w-4.5 shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className={cn(
          'fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center',
          'rounded-lg bg-sky-950 text-white shadow-lg lg:hidden',
          'transition-colors hover:bg-sky-900'
        )}
        aria-label="Toggle admin sidebar"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-screen w-64 bg-sky-950',
          'transition-transform duration-300 lg:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
