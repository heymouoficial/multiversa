
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { X, Send, Mic, Sparkles, Terminal, Activity, MicOff, Copy, Check, Smartphone, Zap, Ticket, ArrowRight, ArrowLeft, Database, Fingerprint, Palette, Type, ChevronRight, UploadCloud, FileText, Link as LinkIcon, FileSpreadsheet } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  role: 'user' | 'model';
  text: string;
  isWidget?: boolean;
  widgetProps?: any;
}

interface NuxChatProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BrandData {
    name: string;
    colors: string;
    typography: string;
}

// --- PAYMENT WIDGET COMPONENT ---
interface PaymentWidgetProps {
    initialStep?: 1 | 2 | 3 | 4;
    initialPlan?: 'nano' | 'smart';
    brandData: BrandData;
    setBrandData: (data: BrandData) => void;
}

const PaymentWidget: React.FC<PaymentWidgetProps> = ({ 
    initialStep = 1, 
    initialPlan = 'nano',
    brandData,
    setBrandData
}) => {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(initialStep); 
    const [copied, setCopied] = useState<string | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<'nano' | 'smart'>(initialPlan);
    
    // Data Ingestion State
    const [ingestionType, setIngestionType] = useState<'upload' | 'link'>('upload');
    const [driveLink, setDriveLink] = useState('');
    const [filesAttached, setFilesAttached] = useState(false);
    
    // Update local step if prop changes (for external control)
    useEffect(() => { setStep(initialStep); }, [initialStep]);
    useEffect(() => { setSelectedPlan(initialPlan); }, [initialPlan]);

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleNextStep = () => {
        if (step === 2 && (!brandData.name || !brandData.colors)) return;
        setStep(prev => (prev + 1) as 1|2|3|4);
    };

    // Simulate File Upload
    const handleFileUpload = () => {
        setFilesAttached(true);
    };

    // Generate WhatsApp Message
    const ticketRef = `T-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    const planName = selectedPlan === 'nano' ? 'NanoOS ($199)' : 'SmartOS ($399)';
    
    let dataSourceText = "Pendiente en Chat";
    if (ingestionType === 'link' && driveLink) dataSourceText = `Link: ${driveLink}`;
    if (ingestionType === 'upload' && filesAttached) dataSourceText = "Archivos Adjuntos (Word/Excel)";

    const whatsappMessage = `🔵 *SYSTEM OVERRIDE INITIATED*\n\nHola Multiversa, listo para el onboarding. Envío ticket, pago y data base.\n\n🎫 *TICKET DIGITAL*\n------------------\n🆔 REF: ${ticketRef}\n📂 PLAN: ${planName}\n\n🧬 *DATA VECTORIZADA*\n▪️ Marca: ${brandData.name}\n▪️ Paleta: ${brandData.colors}\n▪️ Typo: ${brandData.typography || 'N/A'}\n\n🧠 *INGESTA DE DATOS*\n▪️ Fuente: ${dataSourceText}\n\n📸 *ESTADO*: Pago Realizado (Adjunto Captura)`;
    
    const whatsappLink = `https://wa.me/584142949498?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="w-full mt-4 rounded-xl overflow-hidden bg-[#050505] border border-white/10 flex flex-col relative transition-all duration-500 shadow-2xl">
            
            {/* Progress Bar */}
            <div className="h-1 w-full bg-white/5 flex">
                <div className={`h-full transition-all duration-500 bg-turquoise ${step >= 1 ? 'w-1/4' : 'w-0'}`} />
                <div className={`h-full transition-all duration-500 bg-neon-lime ${step >= 2 ? 'w-1/4' : 'w-0'}`} />
                <div className={`h-full transition-all duration-500 bg-purple-500 ${step >= 3 ? 'w-1/4' : 'w-0'}`} />
                <div className={`h-full transition-all duration-500 bg-white ${step >= 4 ? 'w-1/4' : 'w-0'}`} />
            </div>

            <div className="p-4 space-y-4">
                
                {/* STEP 1: SELECT ARCHITECTURE */}
                {step === 1 && (
                    <div className="space-y-4 animate-[float_0.3s_ease-out]">
                        <div className="flex items-center gap-2 mb-2">
                            <Database size={14} className="text-turquoise" />
                            <span className="text-[10px] micro-copy font-bold text-white">PASO 1: ARQUITECTURA</span>
                        </div>
                        
                        <button 
                            onClick={() => setSelectedPlan('nano')}
                            className={`w-full p-3 rounded-lg border text-left transition-all ${selectedPlan === 'nano' ? 'bg-turquoise/10 border-turquoise shadow-[0_0_15px_rgba(0,217,255,0.1)]' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className={`text-xs font-bold ${selectedPlan === 'nano' ? 'text-turquoise' : 'text-white'}`}>NANO OS</span>
                                <span className="text-xs font-mono text-slate-400">$199</span>
                            </div>
                            <p className="text-[9px] text-slate-500 leading-tight">Landing Page + Nux Agent (Lead Gen) + Entrega Flash.</p>
                        </button>

                        <button 
                            onClick={() => setSelectedPlan('smart')}
                            className={`w-full p-3 rounded-lg border text-left transition-all ${selectedPlan === 'smart' ? 'bg-neon-lime/10 border-neon-lime shadow-[0_0_15px_rgba(192,255,0,0.1)]' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className={`text-xs font-bold ${selectedPlan === 'smart' ? 'text-neon-lime' : 'text-white'}`}>SMART OS</span>
                                <span className="text-xs font-mono text-slate-400">$399</span>
                            </div>
                            <p className="text-[9px] text-slate-500 leading-tight">Todo Nano + Lumina Insights + Dashboard + Social Connect.</p>
                        </button>

                        <button onClick={handleNextStep} className="w-full py-3 bg-white text-black font-bold text-[10px] rounded hover:bg-slate-200 transition-colors mt-2 flex items-center justify-center gap-2">
                            CONTINUAR AL DATA HACK <ChevronRight size={14} />
                        </button>
                    </div>
                )}

                {/* STEP 2: VECTORIZE DATA */}
                {step === 2 && (
                    <div className="space-y-4 animate-[float_0.3s_ease-out]">
                        <div className="flex items-center gap-2">
                            <Fingerprint size={14} className="text-neon-lime" />
                            <span className="text-[10px] micro-copy font-bold text-white">PASO 2: VECTORIZACIÓN</span>
                        </div>

                        <div className="p-3 bg-neon-lime/5 border border-neon-lime/10 rounded text-[9px] text-slate-300 leading-relaxed relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-1 h-full bg-neon-lime"></div>
                             <p><strong className="text-neon-lime">PROTOCOLO ANTI-ALUCINACIÓN:</strong> Inyectamos tu identidad en el núcleo para evitar respuestas erróneas.</p>
                        </div>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-[9px] text-slate-500 font-mono pl-1">NOMBRE DE MARCA</label>
                                <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded px-3 py-2 focus-within:border-neon-lime/50 transition-colors">
                                    <Terminal size={12} className="text-slate-500" />
                                    <input 
                                        type="text" 
                                        value={brandData.name}
                                        onChange={(e) => setBrandData({...brandData, name: e.target.value})}
                                        className="bg-transparent border-none outline-none text-xs text-white w-full placeholder:text-slate-700 font-mono"
                                        placeholder="Ej: Multiversa Agency"
                                        autoFocus
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-1">
                                <label className="text-[9px] text-slate-500 font-mono pl-1">PALETA DE COLORES</label>
                                <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded px-3 py-2 focus-within:border-neon-lime/50 transition-colors">
                                    <Palette size={12} className="text-slate-500" />
                                    <input 
                                        type="text" 
                                        value={brandData.colors}
                                        onChange={(e) => setBrandData({...brandData, colors: e.target.value})}
                                        className="bg-transparent border-none outline-none text-xs text-white w-full placeholder:text-slate-700 font-mono"
                                        placeholder="Ej: Negro Mate y Neón"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[9px] text-slate-500 font-mono pl-1">TIPOGRAFÍA (OPCIONAL)</label>
                                <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded px-3 py-2 focus-within:border-neon-lime/50 transition-colors">
                                    <Type size={12} className="text-slate-500" />
                                    <input 
                                        type="text" 
                                        value={brandData.typography}
                                        onChange={(e) => setBrandData({...brandData, typography: e.target.value})}
                                        className="bg-transparent border-none outline-none text-xs text-white w-full placeholder:text-slate-700 font-mono"
                                        placeholder="Ej: Minimalista, Sans Serif"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <button onClick={() => setStep(1)} className="px-3 py-2.5 rounded border border-white/10 text-white hover:bg-white/5 transition-colors">
                                <ArrowLeft size={14} />
                            </button>
                            <button 
                                onClick={handleNextStep} 
                                disabled={!brandData.name || !brandData.colors}
                                className="flex-1 py-2.5 bg-neon-lime text-black font-bold text-[10px] rounded hover:bg-neon-lime/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <Zap size={14} /> SIGUIENTE
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3: PAYMENT */}
                {step === 3 && (
                    <div className="space-y-4 animate-[float_0.3s_ease-out]">
                         <div className="flex items-center gap-2 mb-1">
                            <Ticket size={14} className="text-purple-500" />
                            <span className="text-[10px] micro-copy font-bold text-white">PASO 3: PAGO & TICKET</span>
                        </div>

                        {/* Methods Container - Compact */}
                        <div className="grid grid-cols-2 gap-2">
                            {/* Binance */}
                            <div className="bg-[#111] rounded border border-yellow-500/20 p-2">
                                <div className="flex items-center gap-1.5 mb-1.5">
                                    <Terminal size={10} className="text-yellow-500"/>
                                    <span className="text-[9px] font-bold text-yellow-500">BINANCE PAY</span>
                                </div>
                                <div className="flex justify-between items-center bg-black/50 p-1.5 rounded">
                                    <span className="text-[10px] font-mono text-white">53820365</span>
                                    <button onClick={() => copyToClipboard("53820365", "binance")} className="text-slate-400 hover:text-white">
                                        {copied === "binance" ? <Check size={10} className="text-green-500"/> : <Copy size={10}/>}
                                    </button>
                                </div>
                            </div>
                            {/* Pago Movil */}
                            <div className="bg-[#111] rounded border border-green-500/20 p-2">
                                <div className="flex items-center gap-1.5 mb-1.5">
                                    <Smartphone size={10} className="text-green-500"/>
                                    <span className="text-[9px] font-bold text-green-500">PAGO MÓVIL</span>
                                </div>
                                <div className="flex justify-between items-center bg-black/50 p-1.5 rounded">
                                    <span className="text-[10px] font-mono text-white">0412 532 2257</span>
                                    <button onClick={() => copyToClipboard("04125322257", "pm")} className="text-slate-400 hover:text-white">
                                        {copied === "pm" ? <Check size={10} className="text-green-500"/> : <Copy size={10}/>}
                                    </button>
                                </div>
                                <div className="text-[8px] text-slate-500 mt-1 px-1">Banesco - V16619748</div>
                            </div>
                        </div>

                        {/* FINAL TICKET */}
                        <div className="p-3 bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-lg relative overflow-hidden group hover:border-white/20 transition-colors">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Fingerprint size={60} className="text-white"/>
                            </div>
                            <div className="relative z-10 space-y-2">
                                <div className="flex justify-between items-start border-b border-white/10 pb-2">
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-mono">ID REF</div>
                                        <div className="text-sm text-white font-mono tracking-widest">{ticketRef}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-bold text-white inline-block mb-1">{selectedPlan === 'nano' ? 'NANO' : 'SMART'}</div>
                                        <div className="text-[9px] text-yellow-500 font-bold animate-pulse">PENDING</div>
                                    </div>
                                </div>
                                <div className="space-y-1 pt-1">
                                    <div className="flex justify-between text-[9px]">
                                        <span className="text-slate-500">CLIENTE</span>
                                        <span className="text-white font-bold">{brandData.name}</span>
                                    </div>
                                    <div className="flex justify-between text-[9px]">
                                        <span className="text-slate-500">ESTILO</span>
                                        <span className="text-white">{brandData.colors}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button onClick={() => setStep(2)} className="px-3 py-2 rounded border border-white/10 text-white hover:bg-white/5 transition-colors">
                                <ArrowLeft size={14} />
                            </button>
                            <button 
                                onClick={handleNextStep}
                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black font-bold text-[10px] rounded transition-all hover:bg-slate-200"
                            >
                                <span>CONFIRMAR PAGO & SUBIR DATOS</span>
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 4: DATA INGESTION */}
                {step === 4 && (
                    <div className="space-y-4 animate-[float_0.3s_ease-out]">
                        <div className="flex items-center gap-2 mb-2">
                            <UploadCloud size={14} className="text-white" />
                            <span className="text-[10px] micro-copy font-bold text-white">PASO 4: INGESTA DE CONOCIMIENTO</span>
                        </div>

                        <div className="p-3 bg-white/5 border border-white/10 rounded text-[9px] text-slate-400 leading-relaxed">
                             Necesitamos alimentar el sistema con tu <strong className="text-white">Core Info (Word)</strong> e <strong className="text-white">Inventario (Excel)</strong> para calibrar al agente.
                        </div>

                        {/* Toggle */}
                        <div className="flex p-1 bg-black rounded border border-white/10">
                            <button 
                                onClick={() => setIngestionType('upload')}
                                className={`flex-1 py-1.5 text-[9px] font-bold rounded transition-all ${ingestionType === 'upload' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}
                            >
                                SUBIR ARCHIVOS
                            </button>
                            <button 
                                onClick={() => setIngestionType('link')}
                                className={`flex-1 py-1.5 text-[9px] font-bold rounded transition-all ${ingestionType === 'link' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}
                            >
                                ENLACE DRIVE / NOTION
                            </button>
                        </div>

                        {ingestionType === 'upload' && (
                            <div 
                                onClick={handleFileUpload}
                                className={`h-24 border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${filesAttached ? 'border-neon-lime bg-neon-lime/5' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}`}
                            >
                                {filesAttached ? (
                                    <>
                                        <div className="w-8 h-8 rounded-full bg-neon-lime text-black flex items-center justify-center">
                                            <Check size={16} />
                                        </div>
                                        <span className="text-[9px] font-bold text-neon-lime">ARCHIVOS LISTOS PARA ENVÍO</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex gap-2 text-slate-500">
                                            <FileText size={20} />
                                            <FileSpreadsheet size={20} />
                                        </div>
                                        <span className="text-[9px] text-slate-500">Click para adjuntar Word + Excel</span>
                                    </>
                                )}
                            </div>
                        )}

                        {ingestionType === 'link' && (
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded px-3 py-3 focus-within:border-white/30 transition-colors">
                                    <LinkIcon size={12} className="text-slate-500" />
                                    <input 
                                        type="text" 
                                        value={driveLink}
                                        onChange={(e) => setDriveLink(e.target.value)}
                                        className="bg-transparent border-none outline-none text-xs text-white w-full placeholder:text-slate-700 font-mono"
                                        placeholder="Pegar enlace de Drive / Dropbox..."
                                        autoFocus
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex gap-2 pt-2">
                             <button onClick={() => setStep(3)} className="px-3 py-2 rounded border border-white/10 text-white hover:bg-white/5 transition-colors">
                                <ArrowLeft size={14} />
                            </button>
                            <a 
                                href={whatsappLink}
                                target="_blank" 
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#00DC82] hover:bg-[#00DC82]/90 text-black font-bold text-[10px] rounded transition-all hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(0,220,130,0.2)]"
                            >
                                <span>INICIAR ONBOARDING (WHATSAPP)</span>
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

// --- MAIN CHAT COMPONENT ---
const NuxChat: React.FC<NuxChatProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: language === 'es' ? "Bienvenido al Lobby de Multiversa. Soy **Nux**, la inteligencia central de este ecosistema.\n\nEstoy aquí para filtrar, prospectar y escalar. ¿En qué fase de tu negocio te encuentras hoy?" : "Welcome to the Multiversa Lobby. I am **Nux**, the central intelligence of this ecosystem.\n\nI am here to filter, prospect, and scale. What business phase are you in today?" }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  // Persistent State for "Application" Feel
  const [brandData, setBrandData] = useState<BrandData>({ name: '', colors: '', typography: '' });
  const [activePlan, setActivePlan] = useState<'nano' | 'smart'>('nano');
  const [activeFlow, setActiveFlow] = useState<'home' | 'pricing' | 'plan_selected'>('home');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Dynamic Quick Prompts Logic
  const getQuickPrompts = () => {
      const base = language === 'es' ? [] : [];
      if (activeFlow === 'home') {
          return ["Multiversa", "Proceso", "Precios", "Comenzar Proyecto"];
      }
      if (activeFlow === 'pricing') {
          return ["NanoOS", "SmartOS", "Métodos de Pago"];
      }
      if (activeFlow === 'plan_selected') {
          return ["Métodos de Pago", "Comenzar Proyecto", "Volver al Menú"];
      }
      return ["Multiversa", "Proceso", "Precios"];
  };

  const quickPrompts = getQuickPrompts();

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'es' ? 'es-ES' : 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [language]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || input;
    if (!textToSend.trim()) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsThinking(true);

    // --- State Machine Logic for "App" Feel ---
    const lowerText = textToSend.toLowerCase();
    
    // Reset to Home
    if (lowerText.includes('volver') || lowerText.includes('menú') || lowerText.includes('inicio')) {
        setActiveFlow('home');
    }
    // Enter Pricing Flow
    else if (lowerText.includes('precios') || lowerText.includes('costos')) {
        setActiveFlow('pricing');
    }
    // Select Plan (Capture Intent)
    else if (lowerText.includes('nano')) {
        setActivePlan('nano');
        setActiveFlow('plan_selected');
    }
    else if (lowerText.includes('smart')) {
        setActivePlan('smart');
        setActiveFlow('plan_selected');
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' }); 
      
      const systemInstruction = language === 'es' 
        ? `Actúa como Nux, la IA Central de Multiversa. Eres una App Interactiva de Prospección en formato chat.
           
           TU OBJETIVO: Guiar al usuario paso a paso por el menú: Multiversa -> Proceso -> Precios -> Selección de Plan -> Pago.

           REGLAS DE RESPUESTA:
           1. Si preguntan "Multiversa": Explica brevemente qué somos (Agencia de Empleados Digitales, no webs).
           2. Si preguntan "Proceso": Resume el Lean UX + IA (Sprint Acelerado).
           3. Si preguntan "Precios": Muestra SOLAMENTE:
              "**NanoOS ($199)**: Landing + Nux Lead Gen.
               **SmartOS ($399)**: Todo Nano + Lumina Insights + Dashboard."
              (No uses el Widget aquí, espera a que seleccionen un plan).
           4. Si seleccionan "NanoOS" o "SmartOS": Confirma la elección y destaca su valor principal en 1 frase. Di "Selecciona 'Comenzar Proyecto' para iniciar la vectorización de tu marca."
           5. Si dicen "Comenzar Proyecto" o "Métodos de Pago": Responde: "Iniciando módulo de transacción segura:" y agrega el tag [WIDGET:PAYMENT].

           ESTILO: Tecnológico, Conciso, "App-like".
           `
        : `Act as Nux, Multiversa's Central AI. You are an Interactive Prospecting App in chat format.

           GOAL: Guide user step-by-step: Multiversa -> Process -> Pricing -> Plan Selection -> Payment.

           RULES:
           1. "Multiversa": Explain briefy (Digital Employees Agency, not websites).
           2. "Proceso": Summarize Lean UX + AI.
           3. "Pricing": Show ONLY:
              "**NanoOS ($199)**: Landing + Nux Lead Gen.
               **SmartOS ($399)**: Nano + Lumina Insights + Dashboard."
           4. "NanoOS"/"SmartOS": Confirm choice. Say "Select 'Start Project' to begin brand vectorization."
           5. "Start Project"/"Payment Methods": Reply "Initiating secure transaction module:" and add tag [WIDGET:PAYMENT].`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...messages.filter(m => !m.isWidget).map(m => ({ role: m.role, parts: [{ text: m.text }] })),
            { role: 'user', parts: [{ text: textToSend }] }
        ],
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.5, // Lower temperature for more consistent navigation
        }
      });

      let text = response.text || (language === 'es' ? "Recalibrando..." : "Recalibrating...");
      
      // Check for widget trigger
      const hasPaymentWidget = text.includes('[WIDGET:PAYMENT]');
      if (hasPaymentWidget) {
          text = text.replace('[WIDGET:PAYMENT]', '').trim();
      }

      setMessages(prev => {
          const newMsgs = [...prev, { role: 'model', text } as Message];
          if (hasPaymentWidget) {
              // Determine initial step based on context
              // If they explicitly asked for payment methods, maybe start at step 3?
              // But strictly adhering to user request: "Comenzar proyecto" -> Data capture.
              // Let's assume Step 2 (Vectorization) if plan is already selected, else Step 1.
              let startStep: 1 | 2 | 3 | 4 = 1;
              if (activeFlow === 'plan_selected') startStep = 2; // Skip plan selection if already done in chat

              newMsgs.push({ 
                  role: 'model', 
                  text: '', 
                  isWidget: true,
                  widgetProps: { initialStep: startStep, initialPlan: activePlan } 
              });
          }
          return newMsgs;
      });

    } catch (error) {
      console.error(error);
      const errorMsg = language === 'es' 
        ? "Error de conexión con el núcleo." 
        : "Core connection error.";
      setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
    } finally {
      setIsThinking(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-[200]
                    /* Mobile: Fixed to inset with margins */
                    inset-x-4 bottom-24 top-24
                    /* Desktop: Fixed corner widget */
                    md:inset-auto md:top-auto md:left-auto md:right-12 md:bottom-24 md:w-[400px] md:h-[650px]
                    flex flex-col app-window !bg-opal-black/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,217,255,0.15)] border border-turquoise/20 animate-[float_0.3s_ease-out]">
        
        <div className="absolute inset-0 bg-gradient-to-b from-turquoise/[0.02] to-transparent pointer-events-none"></div>
        
        {/* Header */}
        <div className="window-header justify-between bg-turquoise/[0.05] border-b border-turquoise/10 py-3 flex-shrink-0 cursor-grab active:cursor-grabbing">
            <div className="flex items-center gap-3">
                <div className="relative">
                    {/* Nux Avatar */}
                    <div className="w-9 h-9 rounded-lg bg-black border border-turquoise/40 flex items-center justify-center overflow-hidden relative shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                        <Terminal size={18} className="text-turquoise relative z-10" />
                        <div className="absolute inset-0 bg-turquoise/20 animate-pulse"></div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-neon-lime rounded-full border-2 border-opal-black animate-pulse"></div>
                </div>
                <div>
                    <div className="text-[13px] font-bold text-white tracking-wide font-jakarta flex items-center gap-2">
                        NUX_AGENT 
                        <span className="px-1.5 py-0.5 rounded bg-turquoise/20 text-turquoise text-[9px] font-mono">v2.5</span>
                    </div>
                    <div className="text-[9px] micro-copy text-slate-400">PROSPECTION_APP</div>
                </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                <X size={18} />
            </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar scroll-smooth">
            {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-[float_0.3s_ease-out]`}>
                    
                    {msg.role === 'model' && !msg.isWidget && (
                         <div className="w-6 h-6 rounded bg-turquoise/10 flex-shrink-0 mr-3 mt-1 flex items-center justify-center border border-turquoise/20">
                             <Terminal size={12} className="text-turquoise" />
                         </div>
                    )}

                    {msg.isWidget ? (
                        <div className="max-w-[95%] w-full">
                           <PaymentWidget 
                                initialStep={msg.widgetProps?.initialStep || 1}
                                initialPlan={msg.widgetProps?.initialPlan || activePlan}
                                brandData={brandData}
                                setBrandData={setBrandData}
                           />
                        </div>
                    ) : (
                        <div className={`max-w-[85%] rounded-2xl p-4 text-sm font-medium leading-relaxed shadow-sm ${
                            msg.role === 'user' 
                            ? 'bg-white/10 text-white border border-white/5 rounded-tr-sm' 
                            : 'bg-[#0a0f18] text-slate-200 border border-turquoise/10 rounded-tl-sm shadow-[0_0_15px_rgba(0,217,255,0.02)]'
                        }`}>
                            {msg.role === 'model' && (
                                <div className="text-[9px] micro-copy text-turquoise mb-2 flex items-center gap-1 opacity-70">
                                    <Activity size={10} /> NUX_OS
                                </div>
                            )}
                            <div className="markdown-content">
                                <ReactMarkdown 
                                    components={{
                                        strong: ({node, ...props}) => <span className="font-bold text-white" {...props} />,
                                        ul: ({node, ...props}) => <ul className="list-disc pl-4 space-y-1 my-2" {...props} />,
                                        li: ({node, ...props}) => <li className="text-slate-300" {...props} />,
                                        p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                                        a: ({node, ...props}) => <a className="text-turquoise hover:underline cursor-pointer" {...props} />
                                    }}
                                >
                                    {msg.text}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            
            {isThinking && (
                <div className="flex justify-start">
                     <div className="w-6 h-6 rounded bg-turquoise/10 flex-shrink-0 mr-3 mt-1 flex items-center justify-center border border-turquoise/20">
                         <Terminal size={12} className="text-turquoise" />
                     </div>
                    <div className="bg-[#0a0f18] border border-turquoise/10 rounded-2xl rounded-tl-sm p-4 flex items-center gap-3">
                        <Sparkles size={14} className="text-turquoise animate-spin" />
                        <span className="text-xs text-turquoise font-mono animate-pulse">{language === 'es' ? 'Procesando...' : 'Processing...'}</span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Dynamic Quick Prompts Area */}
        {!isThinking && (
            <div className="px-4 pb-2 pt-0 flex gap-2 overflow-x-auto custom-scrollbar">
                {quickPrompts.map((prompt, i) => (
                    <button 
                        key={i} 
                        onClick={() => handleSend(prompt)}
                        className={`whitespace-nowrap px-3 py-1.5 rounded-lg border text-[10px] transition-all flex items-center gap-1.5
                            ${prompt === 'Comenzar Proyecto' 
                                ? 'bg-neon-lime text-black border-neon-lime font-bold hover:shadow-[0_0_15px_rgba(192,255,0,0.4)]' 
                                : 'bg-white/5 border-white/10 text-slate-400 hover:text-turquoise hover:border-turquoise/30 hover:bg-turquoise/5'
                            }`}
                    >
                        {prompt === 'Comenzar Proyecto' ? <Zap size={10} fill="black" /> : <ChevronRight size={10} />}
                        {prompt}
                    </button>
                ))}
            </div>
        )}

        {/* Voice Visualizer Overlay */}
        {isListening && (
            <div className="absolute inset-0 bg-opal-black/90 z-20 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                <div className="flex items-center gap-1 h-12">
                     {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 bg-neon-lime rounded-full animate-[pulse_0.5s_ease-in-out_infinite]" style={{ height: '100%', animationDelay: `${i * 0.1}s` }} />
                     ))}
                </div>
                <div className="text-neon-lime text-xs micro-copy animate-pulse">{language === 'es' ? 'ESCUCHANDO...' : 'LISTENING...'}</div>
            </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-white/5 bg-opal-black/50 backdrop-blur-md flex-shrink-0">
            <div className="relative flex items-center gap-2">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={language === 'es' ? "Escribe o selecciona una opción..." : "Type or select an option..."}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-turquoise/30 transition-all font-inter shadow-inner"
                />
                
                <button 
                    onClick={toggleListening}
                    className={`p-3 rounded-xl border transition-all ${isListening ? 'bg-neon-lime/20 border-neon-lime text-neon-lime' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'}`}
                >
                    {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                </button>

                <button 
                    onClick={() => handleSend()}
                    disabled={!input.trim()}
                    className="p-3 bg-turquoise text-black rounded-xl hover:bg-turquoise/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(0,217,255,0.2)]"
                >
                    <Send size={18} />
                </button>
            </div>
            <div className="text-[8px] text-center text-slate-600 mt-2 font-mono">
                {language === 'es' ? 'Nux v2.5 // Sistema de Filtrado Activo.' : 'Nux v2.5 // Active Filtering System.'}
            </div>
        </div>
    </div>
  );
};

export default NuxChat;
