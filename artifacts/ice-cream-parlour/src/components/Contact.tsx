import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Cake, Handshake, Package } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const contactItems: { Icon: LucideIcon; iconColor: string; iconBg: string; title: string; desc: string }[] = [
  { Icon: Cake, iconColor: "text-pink-500", iconBg: "bg-pink-100", title: "Private Events", desc: "Birthday parties, weddings, corporate events" },
  { Icon: Handshake, iconColor: "text-violet-500", iconBg: "bg-violet-100", title: "Wholesale", desc: "Restaurant & café partnerships welcome" },
  { Icon: Package, iconColor: "text-amber-500", iconBg: "bg-amber-100", title: "Gifting", desc: "Custom gift boxes available for shipping" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50" />
      <div className="absolute -right-32 top-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              We'd love to<br />
              <span className="text-gradient italic">hear from you</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              For catering enquiries, birthday party packages, wholesale partnerships,
              or just to say hello — drop us a line. We respond within 24 hours.
            </p>
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <item.Icon size={22} className={item.iconColor} />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 text-center border border-white/60"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check className="text-green-600" size={36} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Message Received!</h3>
                <p className="text-muted-foreground">Thank you {form.name}! We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 sm:p-10 border border-white/60 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      required type="text" value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full bg-white/60 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      required type="email" value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full bg-white/60 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                    className="w-full bg-white/60 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option>Private Event Enquiry</option>
                    <option>Wholesale Partnership</option>
                    <option>Gift Box Order</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    required rows={4} value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/60 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit" disabled={loading} whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <><Send size={16} />Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
