import { MessageCircle } from 'lucide-react';
import { buildWhatsAppConsultationURL } from '../../utils/whatsapp';
import { motion } from 'framer-motion';

export const FloatingWhatsApp = () => (
    <motion.a 
        href={buildWhatsAppConsultationURL()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Konsultasi via WhatsApp"
    >
        <MessageCircle className="w-8 h-8"/>
    </motion.a>
);
