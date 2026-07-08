'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    // Basic client-side auth check
    const authStatus = isAuthenticated();
    setIsAuth(authStatus);

    if (!authStatus && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [pathname, router]);

  // Don't render until auth state is known
  if (isAuth === null) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-primary-900 font-bold">Loading...</div>;
  }

  // If on login page, just render children without sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // If not authenticated and not on login page, return null (will redirect)
  if (!isAuth) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50" dir="ltr">
      {/* Sidebar */}
      <AdminSidebar activePage={pathname.split('/').pop() || 'admin'} />
      
      {/* Main Content Area */}
      <div className="flex-1 lg:ms-64 flex flex-col min-h-screen overflow-hidden">
        {/* Simple Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-end px-6 shrink-0 shadow-sm z-10">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
              A
            </div>
            <span className="text-sm font-medium text-gray-700">Admin User</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
