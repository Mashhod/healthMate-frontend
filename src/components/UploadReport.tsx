import { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, FileText, X, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';

interface UploadReportProps {
  onBack: () => void;
}

export function UploadReport({ onBack }: UploadReportProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type / Galat file type', {
        description: 'Please upload PDF or image files / PDF ya image upload karein'
      });
      return;
    }

    setIsUploading(true);
    setUploadedFile(file);

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      toast.success('File uploaded successfully! / File upload hogayi!', {
        description: 'AI analysis in progress / AI analysis chal rahi hai'
      });
    }, 2000);
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-4xl mx-auto px-6 py-8">
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

          <h1 className="text-4xl mb-2 text-gray-800">Upload Your Report</h1>
          <p className="text-xl text-gray-600 mb-8">Apni Report Upload Karein</p>
        </motion.div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card
            className={`p-12 border-2 border-dashed transition-all ${
              isDragging 
                ? 'border-[#00BFA5] bg-[#00BFA5]/5 shadow-xl' 
                : 'border-gray-300 bg-white'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              {/* Animated Upload Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] rounded-full mb-6 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  scale: isDragging ? 1.1 : 1,
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  scale: {
                    duration: 0.3
                  }
                }}
              >
                <Upload className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-2xl mb-2 text-gray-800">
                Drag & Drop Your Report Here
              </h3>
              <p className="text-gray-600 mb-1">Apni report yahan drag karein</p>
              <p className="text-sm text-gray-500 mb-6">
                Supported formats: PDF, JPG, PNG (Max 10MB)
              </p>

              <div className="flex items-center gap-4 justify-center mb-6">
                <div className="h-px bg-gray-300 flex-1 max-w-24"></div>
                <span className="text-gray-500">OR / YA</span>
                <div className="h-px bg-gray-300 flex-1 max-w-24"></div>
              </div>

              <label htmlFor="file-upload">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="button"
                    className="bg-gradient-to-r from-[#00BFA5] to-[#0F2D5F] hover:opacity-90"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    Browse Files / Files Dekhen
                  </Button>
                </motion.div>
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileInput}
              />
            </div>
          </Card>
        </motion.div>

        {/* Uploaded File Preview */}
        {uploadedFile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <Card className="p-6 bg-white shadow-lg border-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800">{uploadedFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {(uploadedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {isUploading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-[#00BFA5] border-t-transparent rounded-full"
                    />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                  <button
                    onClick={removeFile}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <Card className="p-6 bg-white shadow-md border-0">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="mb-2 text-gray-800">Secure Upload</h4>
            <p className="text-sm text-gray-600">Your data is encrypted / Aapka data secure hai</p>
          </Card>

          <Card className="p-6 bg-white shadow-md border-0">
            <div className="text-4xl mb-3">🤖</div>
            <h4 className="mb-2 text-gray-800">AI Analysis</h4>
            <p className="text-sm text-gray-600">Gemini AI powered insights / AI se analysis</p>
          </Card>

          <Card className="p-6 bg-white shadow-md border-0">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="mb-2 text-gray-800">Instant Results</h4>
            <p className="text-sm text-gray-600">Get summary in seconds / Foran results</p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
