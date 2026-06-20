import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 bottom-0 -ml-20 -mb-20 opacity-30 z-0">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#a3b899" d="M38.8,-55.8C51.6,-45.3,64.2,-34.5,70.5,-20.6C76.8,-6.7,76.8,10.1,70.3,24.8C63.8,39.5,50.8,52.2,36.5,59.3C22.2,66.4,6.6,67.9,-8.2,66C-23,64.1,-37,58.8,-50.2,50C-63.4,41.2,-75.8,29.1,-79.8,14.6C-83.8,0.1,-79.4,-16.8,-70.5,-30.9C-61.6,-45,-48.2,-56.3,-34.2,-64.3C-20.2,-72.3,-5.6,-77,8.2,-75.5C22,-74,37.6,-66.3,38.8,-55.8Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border">
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-foreground mb-4"
            >
              Say Hello
            </motion.h2>
            <p className="text-muted-foreground">Have a question or want to request a custom flavor? Drop us a line.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="peer w-full bg-white border border-border rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:top-2 peer-valid:text-xs"
                >
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="peer w-full bg-white border border-border rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:top-2 peer-valid:text-xs"
                >
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="peer w-full bg-white border border-border rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder=" "
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:top-2 peer-valid:text-xs"
              >
                Your Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              type="submit"
            >
              {isSubmitted ? "Sent Sweetly!" : <><Send className="w-5 h-5" /> Send Message</>}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
