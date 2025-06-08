import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const FAQSection = () => {
  const faqCategories = [
    {
      id: "general",
      label: "Geral",
      questions: [
        {
          question: "Como funciona o escaneamento de recibos?",
          answer: "Nosso sistema utiliza tecnologia de reconhecimento óptico de caracteres (OCR) combinada com inteligência artificial para extrair informações de seus recibos e boletos. Basta tirar uma foto ou fazer upload do documento, e nossa IA identifica automaticamente dados como valor, data, estabelecimento e categoria do gasto."
        },
        {
          question: "Quais tipos de documentos são suportados?",
          answer: "Suportamos uma ampla variedade de documentos financeiros, incluindo recibos de compras, boletos bancários, faturas de cartão de crédito, notas fiscais eletrônicas (NFe) e comprovantes de pagamento. Nosso sistema funciona com documentos em formato físico (via foto) ou digital (PDF, JPG, PNG)."
        },
        {
          question: "Meus dados financeiros estão seguros?",
          answer: "Sim, a segurança é nossa prioridade. Utilizamos criptografia de ponta a ponta para proteger seus documentos e informações financeiras. Nossos servidores são seguros e seguimos rigorosos protocolos de proteção de dados. Além disso, não compartilhamos suas informações com terceiros sem sua autorização expressa."
        }
      ]
    },
    {
      id: "usage",
      label: "Uso",
      questions: [
        {
          question: "Posso acessar meus dados em diferentes dispositivos?",
          answer: "Sim, nossa plataforma é totalmente responsiva e funciona em qualquer dispositivo com acesso à internet. Você pode escanear recibos pelo celular e depois analisar seus relatórios financeiros no computador. Todos os seus dados são sincronizados automaticamente entre dispositivos."
        },
        {
          question: "Como são organizadas as categorias de gastos?",
          answer: "Nossa IA categoriza automaticamente seus gastos em grupos como Alimentação, Transporte, Moradia, Saúde, Educação, Lazer, entre outros. Você também pode criar categorias personalizadas e reclassificar transações manualmente se necessário."
        },
        {
          question: "É possível exportar meus dados financeiros?",
          answer: "Sim, oferecemos opções de exportação em vários formatos, incluindo PDF, CSV e Excel. Isso facilita a integração com outros softwares financeiros ou o compartilhamento com seu contador. Os relatórios exportados podem ser personalizados para incluir apenas as informações que você precisa."
        }
      ]
    },
    {
      id: "billing",
      label: "Cobrança",
      questions: [
        {
          question: "Como funciona o período de teste?",
          answer: "Oferecemos um período de teste gratuito de 14 dias para o plano Premium, sem necessidade de cartão de crédito. Durante este período, você tem acesso a todos os recursos premium para avaliar se atendem às suas necessidades. Ao final do período, você pode escolher continuar com o plano pago ou voltar para o plano gratuito."
        },
        {
          question: "Posso mudar de plano a qualquer momento?",
          answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Se fizer upgrade, o novo plano entra em vigor imediatamente. Se fizer downgrade, a mudança ocorrerá no próximo ciclo de faturamento. Não há taxas adicionais para mudar de plano."
        },
        {
          question: "Quais formas de pagamento são aceitas?",
          answer: "Aceitamos pagamentos via cartão de crédito (Visa, Mastercard, American Express), boleto bancário, PIX e PayPal. Para planos empresariais, também oferecemos opções de faturamento mensal ou anual com nota fiscal."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Perguntas frequentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Respostas para as dúvidas mais comuns sobre nossa plataforma
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {category.questions.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;