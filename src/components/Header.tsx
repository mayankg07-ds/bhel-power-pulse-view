
import { Building2, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-yellow-400" />
              <Zap className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
                BHEL Power Projects
              </h1>
              <p className="text-blue-200 text-sm lg:text-base">
                Bharat Heavy Electricals Limited - Active Construction Monitoring
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-yellow-400 font-semibold text-lg">
                Engineering Excellence
              </p>
              <p className="text-blue-200 text-sm">
                Powering India's Future
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
