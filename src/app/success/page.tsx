import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'phosphor-react';

export const metadata: Metadata = {
  title: 'Formulário Enviado com Sucesso | Zenth',
  description: 'Seu formulário foi enviado com sucesso. Entraremos em contato em breve.',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-purple-500/10 px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle size={64} className="text-green-500" weight="fill" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Formulário Enviado!</h1>
        <p className="text-muted-foreground mb-8">
          Obrigado pelo seu interesse. Entraremos em contato em breve.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}

