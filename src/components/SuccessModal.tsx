import { motion } from "motion/react";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "./ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  closeText: string;
}

export function SuccessModal({ isOpen, onClose, title, message, closeText }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <CheckCircle2 className="w-20 h-20 text-green-500" />
        </motion.div>
        
        <h2 className="text-center mb-4 text-green-600">{title}</h2>
        <p className="text-center text-gray-600 mb-6">{message}</p>
        
        <Button onClick={onClose} className="w-full bg-green-600 hover:bg-green-700">
          {closeText}
        </Button>
      </motion.div>
    </div>
  );
}
