import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Activity, Weight, FileText, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';

interface AddVitalsProps {
  onBack: () => void;
}

export function AddVitals({ onBack }: AddVitalsProps) {
  const [formData, setFormData] = useState({
    systolic: '',
    diastolic: '',
    sugar: '',
    weight: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.systolic || !formData.diastolic || !formData.sugar || !formData.weight) {
      toast.error('Please fill all fields / Tamam fields bharein');
      return;
    }

    toast.success('Vitals saved successfully! / Vitals save hogaye!', {
      description: 'Your health data has been updated / Aapka data update hogaya'
    });

    // Reset form
    setFormData({
      systolic: '',
      diastolic: '',
      sugar: '',
      weight: '',
      notes: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-3xl mx-auto px-6 py-8">
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

          <h1 className="text-4xl mb-2 text-gray-800">Add Manual Vitals</h1>
          <p className="text-xl text-gray-600 mb-8">Apne Vitals Daalein</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 bg-white shadow-xl border-0">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Blood Pressure */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-800">Blood Pressure</h3>
                    <p className="text-sm text-gray-600">BP / Khoon ka Dabaao</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="systolic">Systolic (Upper)</Label>
                    <Input
                      id="systolic"
                      type="number"
                      placeholder="120"
                      value={formData.systolic}
                      onChange={(e) => setFormData({ ...formData, systolic: e.target.value })}
                      className="mt-2 focus:border-[#00BFA5] focus:ring-[#00BFA5]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="diastolic">Diastolic (Lower)</Label>
                    <Input
                      id="diastolic"
                      type="number"
                      placeholder="80"
                      value={formData.diastolic}
                      onChange={(e) => setFormData({ ...formData, diastolic: e.target.value })}
                      className="mt-2 focus:border-[#00BFA5] focus:ring-[#00BFA5]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Blood Sugar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-800">Blood Sugar</h3>
                    <p className="text-sm text-gray-600">Sugar Level / Shakkar ki Miqdar</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="sugar">Glucose Level (mg/dL)</Label>
                  <Input
                    id="sugar"
                    type="number"
                    placeholder="95"
                    value={formData.sugar}
                    onChange={(e) => setFormData({ ...formData, sugar: e.target.value })}
                    className="mt-2 focus:border-[#00BFA5] focus:ring-[#00BFA5]"
                  />
                </div>
              </motion.div>

              {/* Weight */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Weight className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-800">Weight</h3>
                    <p className="text-sm text-gray-600">Wazn</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="70"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="mt-2 focus:border-[#00BFA5] focus:ring-[#00BFA5]"
                  />
                </div>
              </motion.div>

              {/* Notes */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-800">Additional Notes</h3>
                    <p className="text-sm text-gray-600">Mazeed Batein (Optional)</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any symptoms or observations... / Koi alamat ya maloomat..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mt-2 min-h-32 focus:border-[#00BFA5] focus:ring-[#00BFA5]"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00BFA5] to-[#0F2D5F] hover:opacity-90 py-6"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save Vitals / Vitals Save Karein
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </Card>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <Card className="p-6 bg-gradient-to-br from-[#00BFA5]/10 to-[#0F2D5F]/10 border-0">
            <p className="text-sm text-gray-700">
              💡 <strong>Tip:</strong> Record your vitals at the same time each day for better tracking. / 
              Har roz ek hi waqt pe vitals check karein behtar results ke liye.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
