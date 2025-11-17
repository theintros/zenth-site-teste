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
  budget: z.string().min(1, "Por favor, selecione a média de faturamento mensal"),
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
    try {
      // Prepare form payload
      const payload: Record<string, string> = {
        "form-name": "contact",
        name: data.name,
        email: data.email,
        company: data.company,
        service: data.service,
        budget: data.budget,
        message: data.message,
      };

      if (data.phone) {
        payload.phone = data.phone;
      }

      // Submit via API route (server-side submission to Netlify Forms)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Erro ao enviar formulário");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar formulário. Por favor, tente novamente.");
    }
  };

  const services = [
    "Gestão de Tráfego Pago",
    "Serviços Criativos",
    "Posicionamento de Marca",
    "Chatbots e Automações com IA",
    "E-commerce & Conversão",
    "Marketing Digital",
    "Sites, Landing Pages e Sistemas",
    "Análise de Dados",
    "Automação de Marketing",
    "Outro",
  ];

  const monthlyRevenues = [
    "R$ 25.000 - R$ 50.000",
    "R$ 50.000 - R$ 100.000",
    "R$ 100.000 - R$ 250.000",
    "R$ 250.000 - R$ 500.000",
    "R$ 500.000 - R$ 1.000.000",
    "R$ 1.000.000+",
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
        <form
          name="contact"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome <span className="text-destructive">*</span>
              </label>
              <input
                {...register("name")}
                name="name"
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
                name="email"
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
                name="company"
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
                name="phone"
                type="tel"
                className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="(17) 99284-1484"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Serviço de Interesse <span className="text-destructive">*</span>
            </label>
            <select
              {...register("service")}
              name="service"
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
              Média de Faturamento Mensal <span className="text-destructive">*</span>
            </label>
            <select
              {...register("budget")}
              name="budget"
              className="w-full px-4 py-3 glass-card rounded-lg bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
            >
              <option value="">Selecione a média de faturamento mensal</option>
              {monthlyRevenues.map((revenue) => (
                <option key={revenue} value={revenue}>
                  {revenue}
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
              name="message"
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
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
            {!isSubmitting && <PaperPlaneTilt size={20} weight="bold" />}
          </motion.button>
        </form>
      )}
    </GlassCard>
  );
}