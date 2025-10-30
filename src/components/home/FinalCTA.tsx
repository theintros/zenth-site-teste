"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "phosphor-react";
import { BorderTrail } from "@/components/ui/border-trail";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Por favor, insira um e-mail válido"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function FinalCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
      
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <BorderTrail
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
            size={150}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'linear',
            }}
          />

          {/* Inner Glow Effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Pronto Para Alcançar Seu{" "}
                <span className="gradient-text">Máximo Potencial?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Vamos discutir como podemos transformar seu marketing e gerar crescimento mensurável para sua marca.
              </motion.p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} weight="bold" className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground">
                  Retornaremos em até 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Seu Nome"
                      className="w-full px-6 py-4 glass-card rounded-xl bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Seu E-mail"
                      className="w-full px-6 py-4 glass-card rounded-xl bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    {...register("company")}
                    type="text"
                    placeholder="Nome da Empresa"
                    className="w-full px-6 py-4 glass-card rounded-xl bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
                  />
                  {errors.company && (
                    <p className="text-destructive text-sm mt-2">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="w-full px-6 py-4 glass-card rounded-xl bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-2">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Enviando..." : "Começar Agora"}</span>
                    {!isSubmitting && (
                      <ArrowRight
                        size={20}
                        weight="bold"
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}