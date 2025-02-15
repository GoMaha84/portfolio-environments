import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  LogOut,
  ChevronDown
} from 'lucide-react';

const AdminLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/admin" className="text-xl font-bold text-portfolio-blue">
                  Portfolio CMS
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <div className="col-span-12 md:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <nav className="space-y-1 p-4">
                <Link
                  to="/admin"
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive('/admin')
                      ? 'bg-portfolio-blue text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <LayoutDashboard className="h-5 w-5 mr-2" />
                  Dashboard
                </Link>
                <Link
                  to="/admin/articles"
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive('/admin/articles')
                      ? 'bg-portfolio-blue text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Articles
                </Link>
                <Link
                  to="/admin/articles/new"
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive('/admin/articles/new')
                      ? 'bg-portfolio-blue text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <PlusCircle className="h-5 w-5 mr-2" />
                  New Article
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <main className="col-span-12 md:col-span-9">
            <div className="bg-white rounded-lg shadow p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 