import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const professionalName = "Mayara Mamoré";
const clinicName = "Clínica de Biomedicina Estética";
const whatsappNumber = "5565996957197";
const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de agendar meu atendimento.",
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "Biomédica Esteta em Cuiabá | Harmonização Facial e Botox",
  description:
    "Agende sua avaliação com biomédica esteta em Cuiabá para harmonização facial, aplicação de botox, preenchimento labial e tratamentos estéticos personalizados.",
  keywords: [
    "biomédica esteta em Cuiabá",
    "harmonização facial em Cuiabá",
    "aplicação de botox em Cuiabá",
    "preenchimento labial com ácido hialurônico",
    "preço harmonização facial Cuiabá",
  ],
  openGraph: {
    title: "Biomédica Esteta em Cuiabá | Harmonização Facial e Botox",
    description:
      "Tratamentos estéticos personalizados com avaliação individual, segurança e resultado natural em Cuiabá.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/mayara-mamore-biomedica-esteta-cuiaba.png",
        width: 1024,
        height: 1536,
        alt: "Mayara Mamoré, biomédica esteta em Cuiabá em consultório premium",
      },
    ],
  },
};

const services = [
  {
    title: "Aplicação de Botox em Cuiabá",
    description:
      "Toxina botulínica para suavizar linhas de expressão, prevenir rugas e preservar a naturalidade da face.",
  },
  {
    title: "Preenchimento Labial com Ácido Hialurônico",
    description:
      "Volume, contorno e hidratação labial com planejamento individual para um resultado elegante e proporcional.",
  },
  {
    title: "Harmonização Facial Personalizada",
    description:
      "Combinação estratégica de procedimentos para equilibrar proporções, contornos e pontos de rejuvenescimento.",
  },
  {
    title: "Bioestimuladores de Colágeno",
    description:
      "Tratamento para firmeza, melhora da qualidade da pele e estímulo gradual de colágeno com aparência natural.",
  },
  {
    title: "Skinbooster e Hidratação Profunda",
    description:
      "Protocolos para viço, textura e luminosidade da pele com ativos injetáveis indicados após avaliação.",
  },
  {
    title: "Planejamento Estético Facial",
    description:
      "Avaliação completa para definir prioridades, segurança, expectativas e plano de tratamento por etapas.",
  },
];

const testimonials = [
  {
    name: "Paciente A.",
    text: "Fui muito bem orientada desde a avaliação. O resultado ficou natural e exatamente como eu buscava.",
  },
  {
    name: "Paciente B.",
    text: "Ambiente acolhedor, atendimento cuidadoso e explicação clara sobre cada etapa do procedimento.",
  },
  {
    name: "Paciente C.",
    text: "Gostei da segurança no planejamento e da delicadeza no resultado. Recomendo a avaliação.",
  },
];

const faqs = [
  {
    question: "Quanto custa harmonização facial em Cuiabá?",
    answer:
      "O valor depende da avaliação, dos produtos indicados e da quantidade necessária para o seu caso. A consulta permite montar um plano seguro, com preço e condições para harmonização facial de forma personalizada.",
  },
  {
    question: "A aplicação de botox em Cuiabá precisa de avaliação?",
    answer:
      "Sim. A avaliação define pontos de aplicação, dosagem, contraindicações e expectativa realista de resultado para toxina botulínica.",
  },
  {
    question: "Preenchimento labial com ácido hialurônico fica natural?",
    answer:
      "Pode ficar natural quando há planejamento técnico, escolha adequada do produto e respeito às proporções do rosto e dos lábios.",
  },
  {
    question: "Como agendar uma avaliação estética?",
    answer:
      "Você pode clicar no botão de WhatsApp e enviar a mensagem de agendamento. A equipe retornará com os horários disponíveis.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: clinicName,
  image: "https://www.seudominio.com.br/images/clinica-biomedicina-estetica.jpg",
  url: "https://www.seudominio.com.br",
  telephone: "+55 65 99695-7197",
  priceRange: "$$",
  description:
    "Clínica de biomedicina estética em Cuiabá especializada em harmonização facial, botox, preenchimento labial e tratamentos injetáveis.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Endereço da clínica, número",
    addressLocality: "Cuiabá",
    addressRegion: "MT",
    postalCode: "78000-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-15.601410",
    longitude: "-56.097891",
  },
  areaServed: {
    "@type": "City",
    name: "Cuiabá",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/seuinstagram",
    "https://www.facebook.com/suapagina",
  ],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function WhatsAppButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-[#65735f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#65735f]/20 transition hover:bg-[#53624f] focus:outline-none focus:ring-2 focus:ring-[#c4a35a] focus:ring-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4.5c-6.08 0-11 4.63-11 10.35 0 2.1.66 4.04 1.8 5.67L5.75 27.5l6.46-2.08c1.18.43 2.46.66 3.79.66 6.08 0 11-4.63 11-10.35S22.08 4.5 16 4.5Z"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 11.2c.2-.44.42-.46.64-.46h.56c.18 0 .43.03.65.5.23.52.78 1.82.85 1.96.08.14.12.3.03.48-.09.2-.14.3-.28.46-.14.16-.3.36-.43.48-.14.14-.29.3-.12.58.16.28.72 1.2 1.55 1.95 1.07.96 1.96 1.25 2.26 1.39.29.14.46.12.63-.08.18-.2.73-.8.93-1.08.2-.28.39-.23.65-.14.27.1 1.68.77 1.96.91.29.15.48.23.55.37.07.14.07.82-.16 1.6-.23.77-1.35 1.47-1.88 1.52-.48.05-1.1.07-1.77-.1-.41-.1-.93-.29-1.6-.56-2.8-1.14-4.63-3.78-4.77-3.95-.14-.18-1.14-1.44-1.14-2.75s.72-1.95.92-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#fbf8f2] text-[#2f352d]">
        <header className="sticky top-0 z-40 border-b border-[#e8ddc8] bg-[#fbf8f2]/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-[#65735f]">
              {clinicName}
            </Link>

            <div className="hidden items-center gap-7 text-sm font-medium text-[#5d6358] md:flex">
              <Link href="#quem-sou" className="transition hover:text-[#65735f]">
                Quem sou
              </Link>
              <Link href="#servicos" className="transition hover:text-[#65735f]">
                Serviços
              </Link>
              <Link href="#depoimentos" className="transition hover:text-[#65735f]">
                Depoimentos
              </Link>
              <Link href="#faq" className="transition hover:text-[#65735f]">
                FAQ
              </Link>
            </div>

            <WhatsAppButton className="hidden px-5 py-2.5 md:inline-flex">
              Agendar avaliação
            </WhatsAppButton>
          </nav>
        </header>

        <main>
          <section className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-40 bg-[#efe3d1]" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.02fr_0.98fr] md:items-center lg:px-8 lg:py-20">
              <article className="max-w-2xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#c4a35a]">
                  Biomedicina estética premium em Cuiabá
                </p>
                <h1 className="text-4xl font-semibold leading-tight text-[#2f352d] sm:text-5xl lg:text-6xl">
                  Biomédica Esteta em Cuiabá | Harmonização Facial e Botox
                </h1>
                <p className="mt-5 text-base leading-8 text-[#5d6358] sm:text-lg">
                  Atendimento individualizado para quem busca harmonização facial,
                  aplicação de botox em Cuiabá e preenchimento labial com ácido
                  hialurônico com segurança, técnica e resultado natural.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton>Agende sua avaliação pelo WhatsApp</WhatsAppButton>
                  <Link
                    href="#servicos"
                    className="inline-flex items-center justify-center rounded-full border border-[#c4a35a] px-6 py-3 text-sm font-semibold text-[#65735f] transition hover:bg-[#f3eadb] focus:outline-none focus:ring-2 focus:ring-[#c4a35a] focus:ring-offset-2"
                  >
                    Ver procedimentos
                  </Link>
                </div>

                <dl className="mt-10 grid grid-cols-3 gap-3 border-y border-[#e8ddc8] py-6 text-center sm:max-w-xl">
                  <div>
                    <dt className="text-2xl font-semibold text-[#65735f]">+500</dt>
                    <dd className="mt-1 text-xs text-[#6f7469]">atendimentos</dd>
                  </div>
                  <div>
                    <dt className="text-2xl font-semibold text-[#65735f]">1:1</dt>
                    <dd className="mt-1 text-xs text-[#6f7469]">avaliação</dd>
                  </div>
                  <div>
                    <dt className="text-2xl font-semibold text-[#65735f]">MT</dt>
                    <dd className="mt-1 text-xs text-[#6f7469]">Cuiabá</dd>
                  </div>
                </dl>
              </article>

              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -left-4 top-8 h-28 w-28 rounded-full bg-[#c98c86]/20 blur-2xl" aria-hidden="true" />
                <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-[#c4a35a]/20 blur-2xl" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-[#eadcc8] shadow-2xl shadow-[#65735f]/10">
                  <Image
                    src="/images/mayara-mamore-biomedica-esteta-cuiaba.png"
                    alt="Mayara Mamoré, biomédica esteta em Cuiabá, em retrato profissional no consultório"
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="quem-sou" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
              <article className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c4a35a]">
                  Autoridade e cuidado técnico
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#2f352d] sm:text-4xl">
                  Quem Sou: {professionalName}, biomédica esteta em Cuiabá
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5d6358]">
                  Substitua este texto pela apresentação da profissional, incluindo
                  formação, especializações, certificações e abordagem de atendimento.
                  O ideal é reforçar biossegurança, escuta ativa e planejamento
                  estético personalizado para cada paciente.
                </p>
                <p className="mt-4 text-base leading-8 text-[#5d6358]">
                  A proposta da clínica é valorizar a beleza individual com
                  procedimentos minimamente invasivos, protocolos atualizados e
                  decisões baseadas em avaliação facial completa.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {["Avaliação individual", "Produtos regularizados", "Resultado natural"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#e8ddc8] bg-[#fbf8f2] p-4 text-sm font-semibold text-[#65735f]"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </article>
            </div>
          </section>

          <section id="servicos" className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c4a35a]">
                  Procedimentos estéticos
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#2f352d] sm:text-4xl">
                  Serviços de harmonização facial, botox e estética avançada
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5d6358]">
                  Cada protocolo é indicado após avaliação clínica, considerando
                  anatomia, histórico, objetivos e segurança do paciente.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className="rounded-2xl border border-[#e8ddc8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#65735f]/10"
                  >
                    <div className="mb-5 h-10 w-10 rounded-full bg-[#efe3d1] text-center text-2xl leading-10 text-[#c4a35a]">
                      +
                    </div>
                    <h3 className="text-xl font-semibold text-[#2f352d]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5d6358]">
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#efe3d1] py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_0.85fr] md:items-center lg:px-8">
              <article>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#65735f]">
                  Planejamento transparente
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#2f352d] sm:text-4xl">
                  Preço e Condições para Harmonização Facial
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5d6358]">
                  O investimento varia conforme o procedimento, quantidade de produto
                  e complexidade do caso. Na avaliação, você recebe uma indicação
                  personalizada, prioridades do tratamento e possibilidades de
                  pagamento.
                </p>
              </article>

              <div className="rounded-3xl bg-white p-6 shadow-xl shadow-[#65735f]/10">
                <p className="text-2xl font-semibold text-[#2f352d]">
                  Consulta com plano estético individual
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5d6358]">
                  A indicação final considera anatomia, objetivos, histórico de
                  procedimentos e expectativa de resultado.
                </p>
                <WhatsAppButton className="mt-6 w-full">
                  Consultar condições pelo WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c4a35a]">
                Próximo passo
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2f352d] sm:text-4xl">
                Agende sua Avaliação Estética Conosco
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5d6358]">
                Envie uma mensagem para consultar horários disponíveis e receber
                orientação inicial sobre o procedimento mais adequado para o seu
                objetivo.
              </p>
              <WhatsAppButton className="mt-8">
                Quero agendar pelo WhatsApp
              </WhatsAppButton>
            </div>
          </section>

          <section id="depoimentos" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c4a35a]">
                  Prova social
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#2f352d] sm:text-4xl">
                  Depoimentos de pacientes sobre atendimento estético
                </h2>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.name}
                    className="rounded-2xl border border-[#e8ddc8] bg-[#fbf8f2] p-6"
                  >
                    <p className="text-base leading-8 text-[#5d6358]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="mt-5 text-sm font-semibold text-[#65735f]">
                      {testimonial.name}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c4a35a]">
                  Dúvidas frequentes
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#2f352d] sm:text-4xl">
                  Perguntas frequentes sobre estética facial em Cuiabá
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5d6358]">
                  Respostas rápidas para quem está pronto para agendar uma avaliação
                  e quer entender segurança, valores e indicação.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-2xl border border-[#e8ddc8] bg-white p-6"
                  >
                    <h3 className="text-lg font-semibold text-[#2f352d]">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5d6358]">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#e8ddc8] bg-[#2f352d] px-5 py-10 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8c28b]">
                {clinicName}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#e7e0d2]">
                Biomedicina estética em Cuiabá com foco em segurança, acolhimento
                e resultados naturais.
              </p>
            </div>

            <address className="not-italic text-sm leading-7 text-[#e7e0d2]">
              <strong className="block text-white">Atendimento</strong>
              Endereço da clínica, número
              <br />
              Cuiabá, MT
              <br />
              WhatsApp: (65) 99695-7197
            </address>

            <div>
              <strong className="block text-sm text-white">Agendamento</strong>
              <p className="mt-3 text-sm leading-7 text-[#e7e0d2]">
                Clique para conversar com a equipe e reservar seu horário de
                avaliação.
              </p>
              <WhatsAppButton className="mt-5 bg-[#c4a35a] text-[#2f352d] hover:bg-[#d8c28b]">
                Chamar no WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </footer>

        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar atendimento pelo WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#65735f] text-sm font-bold text-white shadow-2xl shadow-[#65735f]/30 ring-1 ring-white/60 transition hover:bg-[#53624f] focus:outline-none focus:ring-2 focus:ring-[#c4a35a] focus:ring-offset-2 md:hidden"
        >
          <WhatsAppIcon />
        </Link>
      </div>
    </>
  );
}
