import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary/5 border-t border-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            For inquiries about our research, collaborations, or opportunities, please reach out to us.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://github.com/MotrixLab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-card border border-border hover:border-primary hover:bg-card text-foreground font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <Github size={20} />
              Visit our GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
