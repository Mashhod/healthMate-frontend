import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Languages, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ViewReportProps {
  onBack: () => void;
}

export function ViewReport({ onBack }: ViewReportProps) {
  const [language, setLanguage] = useState<'english' | 'urdu'>('english');
  const [isGenerating, setIsGenerating] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'urdu' : 'english');
  };

  const generateSummary = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const summaries = {
    english: {
      title: "AI Summary",
      content: "Your blood test results show normal values across all parameters. Hemoglobin levels are within the healthy range at 14.2 g/dL. White blood cell count is normal, indicating good immune function. Cholesterol levels are well-controlled. Continue maintaining a balanced diet and regular exercise routine. No immediate medical concerns detected.",
      recommendations: [
        "Maintain current diet and exercise routine",
        "Stay hydrated with 8 glasses of water daily",
        "Schedule next check-up in 6 months"
      ]
    },
    urdu: {
      title: "AI Summary (Roman Urdu)",
      content: "Aapke blood test ke nataaij tamam parameters mein normal hain. Hemoglobin ki miqdar sehatmand range mein hai yaani 14.2 g/dL. White blood cells ki tadaad bhi theek hai, jo achi immunity ko zaahir karti hai. Cholesterol levels control mein hain. Apni balanced diet aur regular exercise jaari rakhein. Koi fori medical concern nahi hai.",
      recommendations: [
        "Apni diet aur exercise routine jaari rakhein",
        "Din mein 8 glass paani zaroor piyen",
        "Agle 6 mahine baad check-up karwaein"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
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

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl mb-2 text-gray-800">View Report</h1>
              <p className="text-xl text-gray-600">Report Dekhein</p>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-md">
              <Languages className="w-5 h-5 text-[#00BFA5]" />
              <Label htmlFor="language-toggle" className="text-sm">
                {language === 'english' ? 'English' : 'Roman Urdu'}
              </Label>
              <Switch
                id="language-toggle"
                checked={language === 'urdu'}
                onCheckedChange={toggleLanguage}
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Report Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-white shadow-xl border-0 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-800">Blood Test Report</h3>
                  <p className="text-sm text-gray-500">October 15, 2025</p>
                </div>
              </div>

              {/* Report Image Preview */}
              <div className="bg-gray-100 rounded-lg p-8 aspect-[3/4] flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB0ZWNobm9sb2d5JTIwYWl8ZW58MXx8fHwxNzYwODIzOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Medical Report"
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="mt-4 flex gap-3">
                <Button variant="outline" className="flex-1">
                  Download PDF
                </Button>
                <Button variant="outline" className="flex-1">
                  Print
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Right Side - AI Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* AI Chatbot Header */}
            <Card className="p-6 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] text-white shadow-xl border-0">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-xl">AI Health Assistant</h3>
                  <p className="text-sm text-white/80">Powered by Gemini AI</p>
                </div>
              </div>
            </Card>

            {/* Summary Card */}
            <Card className="p-6 bg-white shadow-xl border-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={language}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl mb-4 text-gray-800 flex items-center gap-2">
                    {summaries[language].title}
                    {isGenerating && (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-sm text-[#00BFA5]"
                      >
                        (Generating...)
                      </motion.span>
                    )}
                  </h4>

                  <div className="space-y-4">
                    {/* Typing effect simulation */}
                    {isGenerating ? (
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 bg-[#00BFA5] rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#00BFA5] rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#00BFA5] rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-700 leading-relaxed">
                          {summaries[language].content}
                        </p>

                        <div className="border-t pt-4 mt-4">
                          <h5 className="text-gray-800 mb-3">
                            {language === 'english' ? 'Recommendations:' : 'Mashwaray:'}
                          </h5>
                          <ul className="space-y-2">
                            {summaries[language].recommendations.map((rec, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-2 text-gray-700"
                              >
                                <span className="text-[#00BFA5] mt-1">✓</span>
                                <span>{rec}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {!isGenerating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <Button
                    onClick={generateSummary}
                    variant="outline"
                    className="w-full border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Regenerate Summary / Dobara Banaein
                  </Button>
                </motion.div>
              )}
            </Card>

            {/* Health Status */}
            <Card className="p-6 bg-green-50 border-green-200 border-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="text-green-800">Overall Status: Normal</h4>
                  <p className="text-sm text-green-700">Aamtaur par: Normal</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
