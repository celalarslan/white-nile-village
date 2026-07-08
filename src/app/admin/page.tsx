import AdminDashboardCard from '@/components/admin/AdminDashboardCard';
import { dashboardStats } from '@/lib/data/mockData';
import { Users, Sprout, Tractor, Leaf, Award, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Admin Dashboard | White Nile Village Development',
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AdminDashboardCard 
          title="Total Families" 
          value={dashboardStats.totalFamilies} 
          icon={<Users className="w-6 h-6 text-blue-600" />} 
          color="bg-blue-500" 
          change="+12 this month"
        />
        <AdminDashboardCard 
          title="Total People" 
          value={dashboardStats.totalPeople} 
          icon={<Users className="w-6 h-6 text-indigo-600" />} 
          color="bg-indigo-500"
        />
        <AdminDashboardCard 
          title="Pending Registrations" 
          value={dashboardStats.pendingRegistrations} 
          icon={<AlertCircle className="w-6 h-6 text-amber-600" />} 
          color="bg-amber-500" 
        />
        <AdminDashboardCard 
          title="Gum Arabic Trees" 
          value={dashboardStats.totalGumArabicTrees} 
          icon={<Leaf className="w-6 h-6 text-emerald-600" />} 
          color="bg-emerald-500"
        />
        <AdminDashboardCard 
          title="Total Cattle" 
          value={dashboardStats.totalCattle} 
          icon={<Tractor className="w-6 h-6 text-orange-600" />} 
          color="bg-orange-500"
        />
        <AdminDashboardCard 
          title="Total Sheep/Goats" 
          value={dashboardStats.totalSheepGoat} 
          icon={<Tractor className="w-6 h-6 text-orange-500" />} 
          color="bg-orange-400"
        />
        <AdminDashboardCard 
          title="Trained People" 
          value={dashboardStats.trainedPeople} 
          icon={<Award className="w-6 h-6 text-purple-600" />} 
          color="bg-purple-500"
        />
        <AdminDashboardCard 
          title="Certificates" 
          value={dashboardStats.certificateCount} 
          icon={<CheckCircle className="w-6 h-6 text-green-600" />} 
          color="bg-green-500"
        />
        <AdminDashboardCard 
          title="Partner Applications" 
          value={dashboardStats.partnerApplications} 
          icon={<FileText className="w-6 h-6 text-sky-600" />} 
          color="bg-sky-500"
        />
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Recent Registrations</h2>
        </div>
        <div className="p-6 text-center text-gray-500">
          <p>No recent registrations to display.</p>
          <p className="text-sm mt-2">(This will show a data table in the future)</p>
        </div>
      </div>
    </div>
  );
}
