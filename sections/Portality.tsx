/**
 * Portality Dashboard - Admin Panel for Multiversa
 * Features: Auth, Metrics, RAG Document Management
 */

import React, { useState, useEffect } from 'react';
import {
    Eye, EyeOff, Lock, Mail, LogOut, FileText, Upload,
    Users, TrendingUp, MessageSquare, Database, Brain,
    BarChart3, Zap, Clock, CheckCircle, AlertCircle, X, Loader2
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

interface AuthFormData {
    email: string;
    password: string;
}

interface DashboardStats {
    totalVisitors: number;
    totalLeads: number;
    totalConversations: number;
    documentsIndexed: number;
    agentMemoryCount: number;
}

// Login Component
const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
    const [formData, setFormData] = useState<AuthFormData>({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [mode, setMode] = useState<'login' | 'reset'>('login');
    const [resetSent, setResetSent] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) throw error;
            onLogin();
        } catch (err: any) {
            setError(err.message || 'Error al iniciar sesión');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
                redirectTo: `${window.location.origin}/portality`,
            });

            if (error) throw error;
            setResetSent(true);
        } catch (err: any) {
            setError(err.message || 'Error al enviar email');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-opal-black flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <img src="/Logotipo.svg" alt="Multiversa" className="h-12 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white font-jakarta">Portality</h1>
                    <p className="text-sm text-slate-500 mt-1">Dashboard de Control</p>
                </div>

                {/* Form Card */}
                <div className="app-window p-8 border-turquoise/20">
                    {mode === 'login' ? (
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-xs text-slate-400 mb-2 font-medium">Email</label>
                                <div className="relative">
                                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="tu@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-turquoise/30"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-slate-400 mb-2 font-medium">Contraseña</label>
                                <div className="relative">
                                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        placeholder="••••••••"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-turquoise/30"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                                    <AlertCircle size={16} />
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-turquoise text-black font-bold py-3 rounded-xl hover:bg-turquoise/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isLoading ? <Loader2 size={18} className="animate-spin" /> : null}
                                {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
                            </button>

                            <button
                                type="button"
                                onClick={() => setMode('reset')}
                                className="w-full text-sm text-slate-500 hover:text-turquoise transition-colors"
                            >
                                ¿Olvidaste tu contraseña?
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleResetPassword} className="space-y-6">
                            {resetSent ? (
                                <div className="text-center py-4">
                                    <CheckCircle size={48} className="text-neon-lime mx-auto mb-4" />
                                    <p className="text-white mb-2">¡Email enviado!</p>
                                    <p className="text-sm text-slate-400">Revisa tu bandeja de entrada</p>
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-xs text-slate-400 mb-2 font-medium">Email</label>
                                        <div className="relative">
                                            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="tu@email.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-turquoise/30"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                                            <AlertCircle size={16} />
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-turquoise text-black font-bold py-3 rounded-xl hover:bg-turquoise/90 transition-all disabled:opacity-50"
                                    >
                                        {isLoading ? 'Enviando...' : 'Enviar Link de Recuperación'}
                                    </button>
                                </>
                            )}

                            <button
                                type="button"
                                onClick={() => { setMode('login'); setResetSent(false); }}
                                className="w-full text-sm text-slate-500 hover:text-turquoise transition-colors"
                            >
                                ← Volver al login
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

// Stat Card Component
const StatCard = ({
    icon: Icon,
    label,
    value,
    trend,
    color = 'turquoise'
}: {
    icon: any;
    label: string;
    value: number | string;
    trend?: string;
    color?: 'turquoise' | 'lime' | 'white';
}) => {
    const colorClasses = {
        turquoise: 'text-turquoise border-turquoise/20 bg-turquoise/5',
        lime: 'text-neon-lime border-neon-lime/20 bg-neon-lime/5',
        white: 'text-white border-white/10 bg-white/5',
    };

    return (
        <div className={`app-window p-5 ${colorClasses[color]} border`}>
            <div className="flex items-start justify-between mb-3">
                <Icon size={20} className={color === 'turquoise' ? 'text-turquoise' : color === 'lime' ? 'text-neon-lime' : 'text-slate-400'} />
                {trend && <span className="text-[10px] text-neon-lime font-mono">{trend}</span>}
            </div>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-xs text-slate-500">{label}</div>
        </div>
    );
};

// Document Card Component
const DocumentCard = ({
    name,
    status,
    chunks,
    date
}: {
    name: string;
    status: string;
    chunks: number;
    date: string;
}) => {
    const statusColors: Record<string, string> = {
        indexed: 'text-neon-lime bg-neon-lime/10',
        processing: 'text-yellow-400 bg-yellow-400/10',
        pending: 'text-slate-400 bg-slate-400/10',
        error: 'text-red-400 bg-red-400/10',
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-turquoise/20 transition-colors">
            <div className="flex items-center gap-3">
                <FileText size={18} className="text-turquoise" />
                <div>
                    <div className="text-sm text-white font-medium">{name}</div>
                    <div className="text-[10px] text-slate-500">{chunks} chunks • {date}</div>
                </div>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-full font-mono ${statusColors[status] || statusColors.pending}`}>
                {status.toUpperCase()}
            </span>
        </div>
    );
};

// Main Dashboard Component
const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
    const [stats, setStats] = useState<DashboardStats>({
        totalVisitors: 0,
        totalLeads: 0,
        totalConversations: 0,
        documentsIndexed: 0,
        agentMemoryCount: 0,
    });
    const [documents, setDocuments] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            // Load documents
            const { data: docs } = await supabase
                .from('documents')
                .select('*')
                .order('created_at', { ascending: false });

            // Load leads count
            const { count: leadsCount } = await supabase
                .from('leads')
                .select('*', { count: 'exact', head: true });

            // Load conversations count
            const { count: conversationsCount } = await supabase
                .from('chat_sessions')
                .select('*', { count: 'exact', head: true });

            // Load documents indexed
            const { count: docsCount } = await supabase
                .from('documents')
                .select('*', { count: 'exact', head: true })
                .eq('status', 'indexed');

            // Load agent memory count
            const { count: memoryCount } = await supabase
                .from('agent_memory')
                .select('*', { count: 'exact', head: true });

            setStats({
                totalVisitors: 0, // From Vercel Analytics
                totalLeads: leadsCount || 0,
                totalConversations: conversationsCount || 0,
                documentsIndexed: docsCount || 0,
                agentMemoryCount: memoryCount || 0,
            });

            setDocuments(docs || []);
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const file = files[0];
        const content = await file.text();

        // Insert document
        const { data, error } = await supabase
            .from('documents')
            .insert({
                name: file.name,
                file_type: file.name.split('.').pop() || 'txt',
                content: content,
                status: 'pending',
                namespace: 'default',
            })
            .select()
            .single();

        if (!error && data) {
            setDocuments([data, ...documents]);
        }
    };

    return (
        <div className="min-h-screen bg-opal-black">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-opal-black/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/Logotipo.svg" alt="Multiversa" className="h-8" />
                        <div className="hidden md:block">
                            <span className="text-xs font-bold text-white tracking-wide">PORTALITY</span>
                            <span className="text-[10px] text-slate-500 ml-2">Dashboard</span>
                        </div>
                    </div>
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-sm"
                    >
                        <LogOut size={16} />
                        <span className="hidden md:inline">Cerrar Sesión</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 size={32} className="animate-spin text-turquoise" />
                    </div>
                ) : (
                    <>
                        {/* Stats Grid */}
                        <section className="mb-8">
                            <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <BarChart3 size={16} className="text-turquoise" />
                                Métricas de Prospección
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <StatCard icon={Users} label="Visitantes (Vercel)" value={stats.totalVisitors || '—'} color="turquoise" />
                                <StatCard icon={TrendingUp} label="Leads Capturados" value={stats.totalLeads} trend="+0%" color="lime" />
                                <StatCard icon={MessageSquare} label="Conversaciones Nux" value={stats.totalConversations} color="turquoise" />
                                <StatCard icon={Zap} label="Conversiones" value="—" color="white" />
                            </div>
                        </section>

                        {/* RAG Section */}
                        <section className="mb-8">
                            <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <Brain size={16} className="text-neon-lime" />
                                Cerebro de Multiversa (RAG)
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                <StatCard icon={Database} label="Documentos Indexados" value={stats.documentsIndexed} color="lime" />
                                <StatCard icon={Brain} label="Memorias del Agente" value={stats.agentMemoryCount} color="turquoise" />
                                <StatCard icon={Clock} label="Última Actualización" value="—" color="white" />
                            </div>

                            {/* Document Upload */}
                            <div className="app-window p-6 border-white/10">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-bold text-white">Documentos</h3>
                                    <label className="flex items-center gap-2 px-4 py-2 rounded-xl bg-turquoise/10 border border-turquoise/20 text-turquoise hover:bg-turquoise/20 transition-colors cursor-pointer text-sm">
                                        <Upload size={16} />
                                        Subir Documento
                                        <input
                                            type="file"
                                            accept=".txt,.md,.pdf,.docx"
                                            className="hidden"
                                            onChange={handleFileUpload}
                                        />
                                    </label>
                                </div>

                                {documents.length === 0 ? (
                                    <div className="text-center py-12 text-slate-500">
                                        <FileText size={48} className="mx-auto mb-4 opacity-30" />
                                        <p className="text-sm">No hay documentos indexados</p>
                                        <p className="text-xs mt-1">Sube documentos para entrenar a Nux</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {documents.map((doc) => (
                                            <div key={doc.id}>
                                                <DocumentCard
                                                    name={doc.name}
                                                    status={doc.status}
                                                    chunks={doc.chunk_count || 0}
                                                    date={new Date(doc.created_at).toLocaleDateString()}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    </>
                )}
            </main>
        </div>
    );
};

// Main Portality Component with Auth
const Portality = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
        setIsCheckingAuth(false);
    };

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
    };

    if (isCheckingAuth) {
        return (
            <div className="min-h-screen bg-opal-black flex items-center justify-center">
                <Loader2 size={32} className="animate-spin text-turquoise" />
            </div>
        );
    }

    return isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
    ) : (
        <LoginForm onLogin={handleLogin} />
    );
};

export default Portality;
