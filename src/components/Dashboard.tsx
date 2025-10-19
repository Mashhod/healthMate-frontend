import { motion } from 'motion/react';
import { FileText, TrendingUp, Heart, Activity, Upload, Calendar, Eye, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const reports = [
    {
      id: 1,
      name: 'Blood Test Report',
      nameUrdu: 'Blood Test ki Report',
      date: '2025-10-15',
      status: 'Normal',
      statusUrdu: 'Normal',
      color: 'green'
    },
    {
      id: 2,
      name: 'X-Ray Report',
      nameUrdu: 'X-Ray Report',
      date: '2025-10-10',
      status: 'Review Needed',
      statusUrdu: 'Dekhna Zaroori',
      color: 'yellow'
    },
    {
      id: 3,
      name: 'ECG Report',
      nameUrdu: 'ECG Report',
      date: '2025-10-05',
      status: 'Normal',
      statusUrdu: 'Normal',
      color: 'green'
    }
  ];

  const vitals = [
    { label: 'Blood Pressure', labelUrdu: 'BP', value: '120/80', icon: Heart, color: '#00BFA5' },
    { label: 'Blood Sugar', labelUrdu: 'Sugar', value: '95 mg/dL', icon: Activity, color: '#0F2D5F' },
    { label: 'Heart Rate', labelUrdu: 'Dil ki Dhadkan', value: '72 bpm', icon: TrendingUp, color: '#00BFA5' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl mb-2 text-gray-800">Welcome Back!</h1>
          <p className="text-xl text-gray-600">Khush Aamdeed wapsi par!</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onNavigate('upload')}
              className="w-full h-24 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] hover:opacity-90 flex-col gap-2 shadow-lg"
            >
              <Upload className="w-6 h-6" />
              <span>Upload Report</span>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onNavigate('vitals')}
              className="w-full h-24 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] hover:opacity-90 flex-col gap-2 shadow-lg"
            >
              <Plus className="w-6 h-6" />
              <span>Add Vitals</span>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onNavigate('timeline')}
              className="w-full h-24 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] hover:opacity-90 flex-col gap-2 shadow-lg"
            >
              <Calendar className="w-6 h-6" />
              <span>Timeline</span>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onNavigate('view')}
              className="w-full h-24 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] hover:opacity-90 flex-col gap-2 shadow-lg"
            >
              <Eye className="w-6 h-6" />
              <span>View Reports</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Vitals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl mb-4 text-gray-800">
            Current Vitals / <span className="text-gray-600">Abhi ke Vitals</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vitals.map((vital, index) => (
              <motion.div
                key={vital.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${vital.color}20` }}
                    >
                      <vital.icon className="w-6 h-6" style={{ color: vital.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">{vital.label}</p>
                      <p className="text-xs text-gray-500">{vital.labelUrdu}</p>
                      <p className="text-2xl text-gray-800 mt-1">{vital.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reports Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-gray-800">
              Your Health Reports / <span className="text-gray-600">Aapki Reports</span>
            </h2>
            <Button 
              variant="outline" 
              onClick={() => onNavigate('view')}
              className="border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-white"
            >
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {reports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Card className="p-6 bg-white shadow-md border-0 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-800">{report.name}</p>
                        <p className="text-sm text-gray-500">{report.nameUrdu}</p>
                        <p className="text-sm text-gray-400 mt-1">{report.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span 
                        className={`px-4 py-2 rounded-full text-sm ${
                          report.color === 'green' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {report.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{report.statusUrdu}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Health Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Card className="p-8 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] text-white shadow-xl border-0">
            <h3 className="text-2xl mb-2">Health Score / Sehat Score</h3>
            <p className="text-white/80 mb-6">Based on your recent reports / Aapki reports ke mutabiq</p>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <Progress value={85} className="h-3 bg-white/20" />
              </div>
              <div className="text-4xl">85%</div>
            </div>
            <p className="mt-4 text-white/90">Excellent! Keep it up / Bahut acha! Yun hi jaari rakhein</p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
