import { motion } from 'motion/react';
import { Calendar, FileText, Heart, Activity, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

interface TimelineProps {
  onBack: () => void;
}

export function Timeline({ onBack }: TimelineProps) {
  const timelineData = [
    {
      date: '2025-10-15',
      dateUrdu: '15 October 2025',
      type: 'report',
      icon: FileText,
      color: '#00BFA5',
      title: 'Blood Test Report Uploaded',
      titleUrdu: 'Blood Test Report Upload Hui',
      description: 'All parameters normal. AI analysis completed.',
      descriptionUrdu: 'Tamam parameters normal. AI analysis mukammal.'
    },
    {
      date: '2025-10-14',
      dateUrdu: '14 October 2025',
      type: 'vitals',
      icon: Heart,
      color: '#0F2D5F',
      title: 'Vitals Recorded',
      titleUrdu: 'Vitals Darj Kiye',
      description: 'BP: 120/80, Sugar: 95 mg/dL, Weight: 70 kg',
      descriptionUrdu: 'BP: 120/80, Sugar: 95 mg/dL, Wazn: 70 kg'
    },
    {
      date: '2025-10-10',
      dateUrdu: '10 October 2025',
      type: 'report',
      icon: FileText,
      color: '#00BFA5',
      title: 'X-Ray Report Uploaded',
      titleUrdu: 'X-Ray Report Upload Hui',
      description: 'Chest X-ray shows clear lungs. No abnormalities.',
      descriptionUrdu: 'Chest X-ray saaf hai. Koi masla nahi.'
    },
    {
      date: '2025-10-08',
      dateUrdu: '8 October 2025',
      type: 'vitals',
      icon: Activity,
      color: '#0F2D5F',
      title: 'Vitals Recorded',
      titleUrdu: 'Vitals Darj Kiye',
      description: 'BP: 118/78, Sugar: 92 mg/dL, Weight: 69.5 kg',
      descriptionUrdu: 'BP: 118/78, Sugar: 92 mg/dL, Wazn: 69.5 kg'
    },
    {
      date: '2025-10-05',
      dateUrdu: '5 October 2025',
      type: 'report',
      icon: FileText,
      color: '#00BFA5',
      title: 'ECG Report Uploaded',
      titleUrdu: 'ECG Report Upload Hui',
      description: 'Heart rhythm normal. No irregularities detected.',
      descriptionUrdu: 'Dil ki rhythm theek. Koi irregularity nahi.'
    },
    {
      date: '2025-10-01',
      dateUrdu: '1 October 2025',
      type: 'milestone',
      icon: TrendingUp,
      color: '#FF6B6B',
      title: 'Health Score Improved',
      titleUrdu: 'Sehat Score Behtar Hua',
      description: 'Your health score increased from 78% to 85%',
      descriptionUrdu: 'Aapka sehat score 78% se 85% hogaya'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            variant="outline"
            onClick={onBack}
            className="mb-6"
          >
            ← Back to Dashboard
          </Button>

          <div className="mb-8">
            <h1 className="text-4xl mb-2 text-gray-800">Health Timeline</h1>
            <p className="text-xl text-gray-600">Sehat ka Timeline</p>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="p-6 bg-white shadow-lg border-0">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-3xl text-gray-800">{timelineData.filter(item => item.type === 'report').length}</p>
            <p className="text-sm text-gray-600">Total Reports / Kul Reports</p>
          </Card>

          <Card className="p-6 bg-white shadow-lg border-0">
            <div className="text-4xl mb-2">❤️</div>
            <p className="text-3xl text-gray-800">{timelineData.filter(item => item.type === 'vitals').length}</p>
            <p className="text-sm text-gray-600">Vitals Recorded / Vitals Darj</p>
          </Card>

          <Card className="p-6 bg-white shadow-lg border-0">
            <div className="text-4xl mb-2">📅</div>
            <p className="text-3xl text-gray-800">15</p>
            <p className="text-sm text-gray-600">Days Tracked / Din Track Kiye</p>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-8 bg-white shadow-xl border-0">
            <ScrollArea className="h-[600px] pr-4">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00BFA5] to-[#0F2D5F]"></div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative pl-16"
                    >
                      {/* Icon Circle */}
                      <motion.div
                        className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: item.color }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Content Card */}
                      <motion.div
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="p-6 bg-gray-50 border-0 shadow-md hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg text-gray-800">{item.title}</h3>
                              <p className="text-sm text-gray-600">{item.titleUrdu}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-1">{item.description}</p>
                          <p className="text-sm text-gray-600">{item.descriptionUrdu}</p>
                        </Card>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* End of Timeline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="relative pl-16 mt-8"
                >
                  <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] shadow-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <Card className="p-6 bg-gradient-to-br from-[#00BFA5]/10 to-[#0F2D5F]/10 border-0">
                    <h3 className="text-lg text-gray-800 mb-1">Start of Your Journey</h3>
                    <p className="text-sm text-gray-600">Aapke safar ki shuruaat</p>
                  </Card>
                </motion.div>
              </div>
            </ScrollArea>
          </Card>
        </motion.div>

        {/* Export Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex gap-4 justify-center"
        >
          <Button variant="outline" className="border-[#00BFA5] text-[#00BFA5]">
            Export as PDF
          </Button>
          <Button variant="outline" className="border-[#00BFA5] text-[#00BFA5]">
            Share Timeline
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
