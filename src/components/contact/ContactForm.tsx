"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PaperPlaneTilt, CheckCircle } from "phosphor-react";
import GlassCard from "../GlassCard";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Por favor, insira um e-mail válido"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  phone: z.string().optional(),
  service: z.string().min(1, "Por favor, selecione um serviço"),
  budget: z.string().min(1, "Por favor, selecione uma faixa de orçamento"),
  message: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const services = [
    "Análise de Dados",
    "Marketing Digital",
    "Posicionamento de Marca",
    "Automação de Marketing",
    "Performance Marketing",
    "Serviços Criativos",
    "Outro",
  ];

  const budgets = [
    "Menos de R$ 5.000",
    "R$ 5.000 - R$ 10.000",
    "R$ 10.000 - R$ 25.000",
    "R$ 25.000 - R$ 50.000",
    "R$ 50.000+",
  ];

  return (
    <GlassCard>
      <h2 className="text-3xl font-bold mb-2">Envie uma Mensagem</h2>
      <p className="text-muted-foreground mb-8">
        Preencha o formulário e retornaremos em até 24 horas.
      </p>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle
            size={64}
            weight="bold"
            className="text-primary mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
          <p className="text-muted-foreground">
            Obrigado por entrar em contato. Responderemos em até 24 horas.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome <span className="text-destructive">*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="João Silva"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                E-mail <span className="text-destructive">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="joao@empresa.com"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Empresa <span className="text-destructive">*</span>
              </label>
              <input
                {...register("company")}
                type="text"
                className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="Empresa Inc."
              />
              {errors.company && (
                <p className="text-destructive text-sm mt-2">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="+55 (11) 99999-9999"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Serviço de Interesse <span className="text-destructive">*</span>
            </label>
            <select
              {...register("service")}
              className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
            >
              <option value="">Selecione um serviço</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-destructive text-sm mt-2">
                {errors.service.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Faixa de Orçamento <span className="text-destructive">*</span>
            </label>
            <select
              {...register("budget")}
              className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
            >
              <option value="">Selecione seu orçamento</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p className="text-destructive text-sm mt-2">
                {errors.budget.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Mensagem <span className="text-destructive">*</span>
            </label>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors resize-none"
              placeholder="Conte-nos sobre seu projeto..."
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity glow-effect flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
            {!isSubmitting && <PaperPlaneTilt size={20} weight="bold" />}
          </motion.button>
        </form>
      )}
    </GlassCard>
  );
}