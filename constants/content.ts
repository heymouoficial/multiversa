
import { Server, Search, Globe, Database, Shield, Zap, Target, Sparkles, Layout, Calculator, HelpCircle, Activity } from 'lucide-react';

export const content = {
  es: {
    nav: {
      items: [
        { id: 'hero', label: 'INICIO' },
        { id: 'proceso', label: 'METODO' },
        { id: 'servicios', label: 'ECOSISTEMA' },
        { id: 'fuerza', label: 'AGENTES' },
        { id: 'niveles', label: 'PLANES' },
        { id: 'calculatu', label: 'CALCULATU' },
        { id: 'faq', label: 'INFO' },
      ]
    },
    hero: {
      badge: "FOUNDERS ACCESS: 20 ESPACIOS HASTA EL 31/01",
      title: "No hacemos webs.",
      titleGradient: "Creamos empleados digitales",
      subtitle: "Filtran prospectos, generan insights y escalan tu negocio mientras tú tomas las decisiones. Inteligencia aplicada que vive en tu bolsillo.",
      ctaPrimary: "EXPLORAR ECOSISTEMA",
      ctaSecondary: "CONOCE CALCULATÚ"
    },
    process: {
      label: "LEAN UX + IA COGNITIVA",
      title: "Nuestro Proceso Acelerado",
      subtitle: "Sprint de Diseño y Desarrollo centrado en valor, ética y velocidad.",
      steps: [
        {
          title: "Descubrimiento Holístico",
          desc: "No vemos solo código. Analizamos tu negocio como un sistema vivo, entendiendo tus limitaciones y fortalezas.",
          icon: Search
        },
        {
          title: "Arquitectura Polímata",
          desc: "Integramos psicología, diseño, economía y tecnología. Soluciones robustas desde múltiples disciplinas.",
          icon: Layout
        },
        {
          title: "Prototipado Vivo",
          desc: "Usamos IA para generar prototipos funcionales en horas, no semanas. Ves el resultado antes de invertir.",
          icon: Zap
        },
        {
          title: "Despliegue Ético",
          desc: "Lanzamos herramientas que respetan al usuario y potencian al humano, sin cajas negras.",
          icon: Shield
        }
      ]
    },
    services: {
      label: "NUESTROS SERVICIOS",
      title: "Soluciones que llevan tu negocio al siguiente nivel",
      subtitle: "Diseñamos, desarrollamos e implementamos herramientas de automatización que trabajan para ti, no al revés.",
      automationLabel: "AUTOMATIZACIÓN",
      automationTitle: "Delega tareas repetitivas",
      automationDesc: "Te ayudamos a agilizar operaciones internas mediante flujos de trabajo automatizados para la entrada de datos, informes y cadenas de aprobación.",
      buttons: ["BOTS INTERNOS", "+100 AUTOMATIZACIONES"]
    },
    agents: {
      label: "EL DESAFÍO REAL",
      title: "Inteligencia Artificial aplicada a negocios.",
      desc: "No somos una agencia tradicional. Multiversa materializa procesos éticos y eficientes mediante agentes cognitivos que viven en tu bolsillo.",
      nux: {
        role: "THE LOBBY FILTER",
        desc: "Prospecta, filtra y gestiona la entrada de tu negocio. Asegura que solo interactúes con leads reales y valiosos.",
        labels: ['Prospección', 'Filtrado', 'Control de Lobby']
      },
      lumina: {
        role: "THE INSIGHTS SOUL",
        desc: "Analiza patrones, detecta oportunidades invisibles y entrega claridad estratégica para escalar tu negocio.",
        labels: ['Estrategia', 'Alma de Datos', 'Patrones']
      }
    },
    pricing: {
      label: "PRODUCTOS IMPULSADOS POR IA",
      title: "Niveles de Ecosistema",
      subtitle: "Soluciones diseñadas para escalar junto a tu visión.",
      plans: [
        {
          name: "NanoOS",
          subtitle: "MINIMAL LIQUID GLASS",
          period: "PAGO ÚNICO",
          cta: "Activar NanoOS",
          features: ["Landing One Page Premium", "Nux Integrado (Lead Gen)", "Capa silenciosa MCP + RAG", "Retorno de inversión acelerado", "Entrega Flash < 6 Horas"]
        },
        {
          name: "SmartOS",
          subtitle: "ECOSISTEMA INTELIGENTE",
          period: "PAGO ÚNICO",
          cta: "Escalar a SmartOS",
          features: ["Todo lo anterior +", "Lumina: Insights Semanales", "Dashboard de Métricas Vivo", "Scraping de Oportunidades", "Entrega 24 - 36 Horas"]
        },
        {
          name: "EnterpriseOS",
          subtitle: "PAY AS YOU GO",
          period: "EN DESARROLLO",
          cta: "Consultar Enterprise",
          badge: "PRÓXIMAMENTE",
          features: ["PolimataOS Engine", "CRM Avanzado + Inventario", "Marca Blanca Completa", "SLA Garantizado", "Personalización Total"]
        }
      ],
      addons: {
        label: "MÓDULOS & COMPLEMENTOS",
        items: [
          { title: "Mantenimiento", price: "$25/mes", real: "$50" },
          { title: "SEO Avanzado", price: "$50", real: "$150" },
          { title: "Wordpress Int.", price: "$50", real: "$150" },
          { title: "Paga por Uso", price: "Flexible", real: "" }
        ]
      },
      offer: {
        title: "BENEFICIO FOUNDERS",
        desc: "Incluimos Dominio y Hosting el primer año (Stack Vercel + Supabase)",
        cta: "RECLAMAR"
      }
    },
    calculatu: {
      badge: "SOLUCIÓN FINANCIERA",
      title: "Mercado sin",
      titleGradient: "Estrés.",
      desc: "No es un sistema operativo, es tu paz mental. CalculaTú convierte divisas en tiempo real y te ayuda a gestionar un presupuesto limitado sin la ansiedad de las matemáticas manuales en caja.",
      ctaPrimary: "Usar Gratis Ahora",
      ctaSecondary: "Probar Voz Savara",
      appHeader: "CalculaTú",
      appSub: "Billetera Inteligente",
      inputManual: "ENTRADA: MANUAL",
      inputVoice: "VOZ: ACTIVA",
      list: [
        { name: 'Harina PAN (x2)', price: '$2.40' },
        { name: 'Queso Duro (1kg)', price: '$4.50' },
        { name: 'Mantequilla', price: '$2.10' },
      ],
      totalLabel: "TOTAL ESTIMADO",
      executeBtn: "CALCULAR PRESUPUESTO",
      banner: "¿Te suena familiar? Reduce la ansiedad de compra en Venezuela."
    },
    faq: {
      label: "FILOSOFÍA & DUDAS",
      title: "Transparencia Radical",
      items: [
        {
          q: "¿Qué es exactamente Multiversa?",
          a: "Somos una agencia de arquitectura digital con visión holística. No 'hacemos páginas web', construimos ecosistemas digitales donde la IA propone y el humano decide. Nacimos en Venezuela para resolver restricciones complejas con creatividad polímata."
        },
        {
          q: "¿Qué significa que son éticos y polímatas?",
          a: "Éticos porque nuestros agentes (como Nux) no engañan; se identifican como IA y buscan ayudar, no manipular. Polímatas porque unimos diseño, código, psicología y negocio. No te damos un martillo, te damos una casa construida."
        },
        {
          q: "¿Cómo funciona el proceso 'Lean UX Acelerado'?",
          a: "Eliminamos la burocracia. Usamos IA para prototipar en tiempo real durante la fase de descubrimiento. En lugar de esperar semanas por un wireframe, lo ves el mismo día. Iteramos rápido, fallamos barato y lanzamos calidad."
        },
        {
          q: "¿Por qué Venezuela con visión Global?",
          a: "El entorno venezolano nos ha entrenado para ser eficientes con recursos limitados (presupuesto, internet, tiempo). Esa eficiencia 'todo terreno' es nuestra ventaja competitiva al exportar servicios al mundo."
        },
        {
          q: "¿CalculaTú es gratis?",
          a: "Sí, tiene una capa gratuita robusta para el consumidor venezolano (B2C). Ofrecemos una versión Power User de pago único ($9.99) que desbloquea funciones avanzadas y apoya el desarrollo."
        }
      ]
    },
    ctaSection: {
      title: "IA propone,",
      titleGradient: "el humano decide.",
      subtitle: "Multiversa Agency",
      button: "INICIAR PROYECTO"
    },
    footer: {
      tagline: "IA propone, el humano decide.",
      desc: "Multiversa Agency © 2025. Construido con principios estoicos y tecnología de punta.",
      links: ["Manifiesto", "Carreras", "Privacidad"],
      socials: ["LinkedIn", "Twitter/X", "Instagram"]
    }
  },
  en: {
    nav: {
      items: [
        { id: 'hero', label: 'HOME' },
        { id: 'proceso', label: 'METHOD' },
        { id: 'servicios', label: 'ECOSYSTEM' },
        { id: 'fuerza', label: 'AGENTS' },
        { id: 'niveles', label: 'PRICING' },
        { id: 'calculatu', label: 'CALCULATU' },
        { id: 'faq', label: 'INFO' },
      ]
    },
    hero: {
      badge: "FOUNDERS ACCESS: 20 SPOTS UNTIL JAN 31",
      title: "We don't do websites.",
      titleGradient: "We build Digital Employees",
      subtitle: "They filter leads, generate insights, and scale your business while you make the decisions. Applied intelligence living in your pocket.",
      ctaPrimary: "EXPLORE ECOSYSTEM",
      ctaSecondary: "MEET CALCULATÚ"
    },
    process: {
      label: "LEAN UX + COGNITIVE AI",
      title: "Our Accelerated Process",
      subtitle: "Design and Development Sprints focused on value, ethics, and speed.",
      steps: [
        {
          title: "Holistic Discovery",
          desc: "We don't just see code. We analyze your business as a living system, understanding your constraints and strengths.",
          icon: Search
        },
        {
          title: "Polymath Architecture",
          desc: "We integrate psychology, design, economics, and technology. Robust solutions from multiple disciplines.",
          icon: Layout
        },
        {
          title: "Live Prototyping",
          desc: "We use AI to generate functional prototypes in hours, not weeks. You see the result before investing.",
          icon: Zap
        },
        {
          title: "Ethical Deployment",
          desc: "We launch tools that respect the user and empower the human, with no black boxes.",
          icon: Shield
        }
      ]
    },
    services: {
      label: "OUR SERVICES",
      title: "Solutions that take your business to the next level",
      subtitle: "We design, develop, and implement automation tools that work for you, not the other way around.",
      automationLabel: "AUTOMATION",
      automationTitle: "Delegate repetitive tasks",
      automationDesc: "We help you streamline internal operations through automated workflows for data entry, reporting, and approval chains.",
      buttons: ["INTERNAL BOTS", "+100 AUTOMATIONS"]
    },
    agents: {
      label: "THE REAL CHALLENGE",
      title: "Artificial Intelligence applied to business.",
      desc: "We are not a traditional agency. Multiversa materializes ethical and efficient processes through cognitive agents that live in your pocket.",
      nux: {
        role: "THE LOBBY FILTER",
        desc: "Prospects, filters, and manages your business entry. Ensures you only interact with real and valuable leads.",
        labels: ['Prospecting', 'Filtering', 'Lobby Control']
      },
      lumina: {
        role: "THE INSIGHTS SOUL",
        desc: "Analyzes patterns, detects invisible opportunities, and delivers strategic clarity to scale your business.",
        labels: ['Strategy', 'Data Soul', 'Patterns']
      }
    },
    pricing: {
      label: "AI-POWERED PRODUCTS",
      title: "Ecosystem Levels",
      subtitle: "Solutions designed to scale with your vision.",
      plans: [
        {
          name: "NanoOS",
          subtitle: "MINIMAL LIQUID GLASS",
          period: "ONE-TIME PAYMENT",
          cta: "Activate NanoOS",
          features: ["Premium One Page Landing", "Integrated Nux (Lead Gen)", "Silent Layer MCP + RAG", "Accelerated ROI", "Flash Delivery < 6 Hours"]
        },
        {
          name: "SmartOS",
          subtitle: "INTELLIGENT ECOSYSTEM",
          period: "ONE-TIME PAYMENT",
          cta: "Upgrade to SmartOS",
          features: ["Everything above +", "Lumina: Weekly Insights", "Live Metrics Dashboard", "Opportunity Scraping", "Delivery 24 - 36 Hours"]
        },
        {
          name: "EnterpriseOS",
          subtitle: "PAY AS YOU GO",
          period: "IN DEVELOPMENT",
          cta: "Consult Enterprise",
          badge: "COMING SOON",
          features: ["PolimataOS Engine", "Advanced CRM + Inventory", "Full White Label", "Guaranteed SLA", "Total Customization"]
        }
      ],
      addons: {
        label: "MODULES & ADD-ONS",
        items: [
          { title: "Maintenance", price: "$25/mo", real: "$50" },
          { title: "Advanced SEO", price: "$50", real: "$150" },
          { title: "Wordpress Int.", price: "$50", real: "$150" },
          { title: "Pay As You Go", price: "Flexible", real: "" }
        ]
      },
      offer: {
        title: "FOUNDERS BENEFIT",
        desc: "Free Domain & Hosting for the first year (Vercel + Supabase Stack)",
        cta: "CLAIM OFFER"
      }
    },
    calculatu: {
      badge: "FINANCIAL SOLUTION",
      title: "Stress-free",
      titleGradient: "Market.",
      desc: "It's not an OS, it's peace of mind. CalculaTú converts currencies in real-time and helps you manage a limited budget without the anxiety of manual math at the checkout.",
      ctaPrimary: "Use Free Now",
      ctaSecondary: "Test Savara Voice",
      appHeader: "CalculaTú",
      appSub: "Smart Wallet",
      inputManual: "INPUT: MANUAL",
      inputVoice: "VOICE: ON",
      list: [
        { name: 'Corn Flour (x2)', price: '$2.40' },
        { name: 'Hard Cheese (1kg)', price: '$4.50' },
        { name: 'Butter', price: '$2.10' },
      ],
      totalLabel: "ESTIMATED TOTAL",
      executeBtn: "CALCULATE BUDGET",
      banner: "Sound familiar? Reduce purchase anxiety in Venezuela."
    },
    faq: {
      label: "PHILOSOPHY & DOUBTS",
      title: "Radical Transparency",
      items: [
        {
          q: "What exactly is Multiversa?",
          a: "We are a digital architecture agency with a holistic vision. We don't 'make websites', we build digital ecosystems where AI proposes and humans decide. Born in Venezuela to solve complex constraints with polymath creativity."
        },
        {
          q: "What does ethical and polymath mean?",
          a: "Ethical because our agents (like Nux) don't deceive; they identify as AI and seek to help, not manipulate. Polymath because we unite design, code, psychology, and business. We don't give you a hammer, we give you a built house."
        },
        {
          q: "How does 'Accelerated Lean UX' work?",
          a: "We eliminate bureaucracy. We use AI to prototype in real-time during the discovery phase. Instead of waiting weeks for a wireframe, you see it the same day. We iterate fast, fail cheap, and launch quality."
        },
        {
          q: "Why Venezuela with a Global vision?",
          a: "The Venezuelan environment has trained us to be efficient with limited resources (budget, internet, time). That 'all-terrain' efficiency is our competitive advantage when exporting services to the world."
        },
        {
          q: "Is CalculaTú free?",
          a: "Yes, it has a robust free layer for the Venezuelan consumer (B2C). We offer a one-time payment Power User version ($9.99) that unlocks advanced features and supports development."
        }
      ]
    },
    ctaSection: {
      title: "AI proposes,",
      titleGradient: "Human decides.",
      subtitle: "Multiversa Agency",
      button: "START PROJECT"
    },
    footer: {
      tagline: "AI proposes, Human decides.",
      desc: "Multiversa Agency © 2025. Built with stoic principles and bleeding-edge tech.",
      links: ["Manifesto", "Careers", "Privacy"],
      socials: ["LinkedIn", "Twitter/X", "Instagram"]
    }
  }
};
