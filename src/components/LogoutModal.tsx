import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

interface LogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function LogoutModal({ isOpen, onConfirm, onCancel }: LogoutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-100"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </motion.div>
                
                <h3 className="text-2xl mb-2 text-gray-800">
                  Logout Confirmation
                </h3>
                <p className="text-gray-600 mb-1">
                  Are you sure you want to logout?
                </p>
                <p className="text-gray-600 mb-6">
                  Kya aap logout karna chahte hain?
                </p>

                <div className="flex gap-3">
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50"
                      onClick={onCancel}
                    >
                      Nahi, Wapas Jaao
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={onConfirm}
                    >
                      Yes, Logout
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
