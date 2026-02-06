import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap, Users, TrendingUp, ArrowRight, Mail, Phone, MapPin, BarChart3, Package, Calendar, ChevronLeft } from 'lucide-react';

export default function SCAWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showExamples, setShowExamples] = useState(false);
  const [activeExample, setActiveExample] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section based on scroll position
      const sections = ['inicio', 'servicios', 'proceso', 'tecnologias', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Sample data for examples
  const salesData = [
    { month: 'Ene', ventas: 45000, objetivo: 40000 },
    { month: 'Feb', ventas: 52000, objetivo: 45000 },
    { month: 'Mar', ventas: 48000, objetivo: 45000 },
    { month: 'Abr', ventas: 61000, objetivo: 50000 },
    { month: 'May', ventas: 55000, objetivo: 50000 },
    { month: 'Jun', ventas: 67000, objetivo: 55000 },
  ];

  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, nombre: 'Laptop Dell XPS', cantidad: 15, precio: 3500000, categoria: 'Electrónica' },
    { id: 2, nombre: 'Mouse Logitech', cantidad: 45, precio: 85000, categoria: 'Accesorios' },
    { id: 3, nombre: 'Teclado Mecánico', cantidad: 23, precio: 320000, categoria: 'Accesorios' },
    { id: 4, nombre: 'Monitor 27"', cantidad: 8, precio: 890000, categoria: 'Electrónica' },
    { id: 5, nombre: 'Webcam HD', cantidad: 32, precio: 180000, categoria: 'Accesorios' },
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, cliente: 'María González', servicio: 'Consulta General', fecha: '2026-02-07', hora: '09:00', estado: 'confirmada' },
    { id: 2, cliente: 'Carlos Ruiz', servicio: 'Seguimiento', fecha: '2026-02-07', hora: '11:30', estado: 'pendiente' },
    { id: 3, cliente: 'Ana Martínez', servicio: 'Primera Consulta', fecha: '2026-02-08', hora: '10:00', estado: 'confirmada' },
    { id: 4, cliente: 'Luis Pérez', servicio: 'Control', fecha: '2026-02-08', hora: '14:00', estado: 'pendiente' },
  ]);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo de Software",
      description: "Creamos soluciones personalizadas que impulsan tu negocio. Desde aplicaciones web hasta sistemas empresariales complejos.",
      features: ["Apps Web", "Apps Móviles", "Sistemas ERP", "E-commerce"],
      hasExamples: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización de Procesos",
      description: "Optimizamos tus operaciones mediante automatización inteligente, reduciendo costos y aumentando la eficiencia.",
      features: ["RPA", "Integración de APIs", "Flujos de trabajo", "IA aplicada"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoría Tecnológica",
      description: "Te acompañamos en la transformación digital de tu empresa con estrategias personalizadas y efectivas.",
      features: ["Auditoría IT", "Estrategia Digital", "Migración Cloud", "Capacitación"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analítica de Datos",
      description: "Convertimos tus datos en insights accionables para tomar decisiones informadas y estratégicas.",
      features: ["Business Intelligence", "Dashboards", "Predicción", "KPIs personalizados"]
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "AWS", "Azure", "PostgreSQL", 
    "MongoDB", "Docker", "Kubernetes", "TypeScript", "Flutter", "Next.js"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Descubrimiento",
      description: "Analizamos tus necesidades, objetivos y desafíos empresariales en profundidad."
    },
    {
      number: "02",
      title: "Estrategia",
      description: "Diseñamos una solución tecnológica alineada con tu visión y presupuesto."
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Construimos tu solución con metodologías ágiles y entregas continuas."
    },
    {
      number: "04",
      title: "Implementación",
      description: "Desplegamos la solución y capacitamos a tu equipo para maximizar el ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                SCA
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Inicio', 'Servicios', 'Proceso', 'Tecnologías', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative group ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left transition-transform ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              {['Inicio', 'Servicios', 'Proceso', 'Tecnologías', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-slate-800 text-cyan-400' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" 
               style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" 
               style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 animate-fade-in">
                ✨ Tecnología que transforma negocios
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Impulsamos tu{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                transformación digital
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Somos tu aliado tecnológico en Colombia. Creamos soluciones de software innovadoras 
              para pequeñas y medianas empresas que quieren crecer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                Comienza tu proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:border-cyan-500 transition-all"
              >
                Conoce nuestros servicios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {[
                { number: '50+', label: 'Proyectos completados' },
                { number: '30+', label: 'Clientes satisfechos' },
                { number: '5+', label: 'Años de experiencia' },
                { number: '98%', label: 'Tasa de éxito' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-slate-400">
              Soluciones tecnológicas diseñadas para tu crecimiento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => service.hasExamples && setShowExamples(true)}
                className={`group p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 ${service.hasExamples ? 'cursor-pointer' : ''}`}
                style={{ 
                  animation: 'fade-in 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0 
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-cyan-400">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {service.hasExamples && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <span className="text-cyan-400 text-sm flex items-center gap-2">
                      Ver ejemplos interactivos <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Examples Modal/Section */}
      {showExamples && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen px-6 py-12">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Ejemplos Interactivos
                  </h2>
                  <p className="text-slate-400">
                    Explora demos en vivo de soluciones que podemos construir para ti
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowExamples(false);
                    setActiveExample(null);
                  }}
                  className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Examples Grid or Detail View */}
              {!activeExample ? (
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Dashboard de Ventas */}
                  <div
                    onClick={() => setActiveExample('sales')}
                    className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      Dashboard de Ventas
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      Visualiza KPIs en tiempo real, tendencias y objetivos de ventas
                    </p>
                    <span className="text-cyan-400 text-sm flex items-center gap-2">
                      Ver demo <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Sistema de Inventarios */}
                  <div
                    onClick={() => setActiveExample('inventory')}
                    className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                      <Package className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      Gestión de Inventarios
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      Control de stock, alertas y seguimiento de productos
                    </p>
                    <span className="text-cyan-400 text-sm flex items-center gap-2">
                      Ver demo <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Sistema de Citas */}
                  <div
                    onClick={() => setActiveExample('appointments')}
                    className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      Sistema de Citas
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      Agenda digital, recordatorios y gestión de clientes
                    </p>
                    <span className="text-cyan-400 text-sm flex items-center gap-2">
                      Ver demo <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Back Button */}
                  <button
                    onClick={() => setActiveExample(null)}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Volver a ejemplos
                  </button>

                  {/* Sales Dashboard */}
                  {activeExample === 'sales' && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-cyan-400" />
                        Dashboard de Ventas
                      </h3>

                      {/* KPI Cards */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Ventas del Mes</p>
                          <p className="text-2xl font-bold text-cyan-400">$67,000</p>
                          <p className="text-green-400 text-xs mt-1">↑ 22% vs mes anterior</p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Objetivo</p>
                          <p className="text-2xl font-bold">$55,000</p>
                          <p className="text-cyan-400 text-xs mt-1">122% cumplido</p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Clientes Nuevos</p>
                          <p className="text-2xl font-bold">48</p>
                          <p className="text-green-400 text-xs mt-1">↑ 15% este mes</p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Ticket Promedio</p>
                          <p className="text-2xl font-bold">$1,395</p>
                          <p className="text-slate-400 text-xs mt-1">Sin cambios</p>
                        </div>
                      </div>

                      {/* Chart */}
                      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                        <h4 className="text-lg font-semibold mb-4">Evolución Mensual</h4>
                        <div className="space-y-4">
                          {salesData.map((data, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-400">{data.month}</span>
                                <div className="flex gap-4">
                                  <span className="text-cyan-400">${(data.ventas / 1000).toFixed(0)}k</span>
                                  <span className="text-slate-500">Meta: ${(data.objetivo / 1000).toFixed(0)}k</span>
                                </div>
                              </div>
                              <div className="relative h-8 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className="absolute h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all"
                                  style={{ width: `${Math.min((data.ventas / data.objetivo) * 100, 100)}%` }}
                                />
                                <div
                                  className="absolute h-full border-r-2 border-slate-300"
                                  style={{ left: '100%' }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Top Products */}
                      <div className="mt-6 bg-slate-800 rounded-lg p-6 border border-slate-700">
                        <h4 className="text-lg font-semibold mb-4">Productos Más Vendidos</h4>
                        <div className="space-y-3">
                          {[
                            { producto: 'Plan Premium', ventas: 145, monto: 21750 },
                            { producto: 'Plan Básico', ventas: 89, monto: 8900 },
                            { producto: 'Consultoría', ventas: 34, monto: 17000 },
                          ].map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg">
                              <div>
                                <p className="font-medium">{item.producto}</p>
                                <p className="text-sm text-slate-400">{item.ventas} unidades vendidas</p>
                              </div>
                              <p className="text-cyan-400 font-semibold">${item.monto.toLocaleString()}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Inventory System */}
                  {activeExample === 'inventory' && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Package className="w-8 h-8 text-cyan-400" />
                        Sistema de Inventarios
                      </h3>

                      {/* Summary Cards */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Total Productos</p>
                          <p className="text-2xl font-bold text-cyan-400">{inventoryItems.length}</p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Valor Total</p>
                          <p className="text-2xl font-bold">
                            ${inventoryItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0).toLocaleString()}
                          </p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Stock Bajo</p>
                          <p className="text-2xl font-bold text-yellow-400">
                            {inventoryItems.filter(item => item.cantidad < 20).length}
                          </p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Categorías</p>
                          <p className="text-2xl font-bold">
                            {new Set(inventoryItems.map(item => item.categoria)).size}
                          </p>
                        </div>
                      </div>

                      {/* Inventory Table */}
                      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-slate-700">
                              <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Producto</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Categoría</th>
                                <th className="px-4 py-3 text-center text-sm font-semibold">Cantidad</th>
                                <th className="px-4 py-3 text-right text-sm font-semibold">Precio</th>
                                <th className="px-4 py-3 text-right text-sm font-semibold">Valor Total</th>
                                <th className="px-4 py-3 text-center text-sm font-semibold">Estado</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                              {inventoryItems.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-700/50 transition-colors">
                                  <td className="px-4 py-3 font-medium">{item.nombre}</td>
                                  <td className="px-4 py-3 text-slate-400 text-sm">{item.categoria}</td>
                                  <td className="px-4 py-3 text-center">
                                    <span className={`px-3 py-1 rounded-full text-sm ${
                                      item.cantidad < 10 ? 'bg-red-500/20 text-red-400' :
                                      item.cantidad < 20 ? 'bg-yellow-500/20 text-yellow-400' :
                                      'bg-green-500/20 text-green-400'
                                    }`}>
                                      {item.cantidad}
                                    </span>
                                  </td>
                                  <td className="px-4 py-3 text-right text-slate-300">
                                    ${item.precio.toLocaleString()}
                                  </td>
                                  <td className="px-4 py-3 text-right font-semibold text-cyan-400">
                                    ${(item.precio * item.cantidad).toLocaleString()}
                                  </td>
                                  <td className="px-4 py-3 text-center">
                                    {item.cantidad < 10 ? (
                                      <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded">Crítico</span>
                                    ) : item.cantidad < 20 ? (
                                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">Bajo</span>
                                    ) : (
                                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">Normal</span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Alerts */}
                      <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-yellow-400 font-semibold mb-2">⚠️ Alertas de Inventario</p>
                        <ul className="text-sm text-slate-300 space-y-1">
                          {inventoryItems.filter(item => item.cantidad < 20).map(item => (
                            <li key={item.id}>• {item.nombre}: Solo quedan {item.cantidad} unidades</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Appointments System */}
                  {activeExample === 'appointments' && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Calendar className="w-8 h-8 text-cyan-400" />
                        Sistema de Citas
                      </h3>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Citas Hoy</p>
                          <p className="text-2xl font-bold text-cyan-400">
                            {appointments.filter(a => a.fecha === '2026-02-07').length}
                          </p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Confirmadas</p>
                          <p className="text-2xl font-bold text-green-400">
                            {appointments.filter(a => a.estado === 'confirmada').length}
                          </p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Pendientes</p>
                          <p className="text-2xl font-bold text-yellow-400">
                            {appointments.filter(a => a.estado === 'pendiente').length}
                          </p>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                          <p className="text-slate-400 text-sm mb-1">Esta Semana</p>
                          <p className="text-2xl font-bold">{appointments.length}</p>
                        </div>
                      </div>

                      {/* Appointments List */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Próximas Citas</h4>
                        
                        {/* Group by date */}
                        {['2026-02-07', '2026-02-08'].map(fecha => {
                          const citasDelDia = appointments.filter(a => a.fecha === fecha);
                          if (citasDelDia.length === 0) return null;
                          
                          return (
                            <div key={fecha} className="bg-slate-800 rounded-lg border border-slate-700 p-4">
                              <h5 className="font-semibold mb-3 text-cyan-400">
                                {fecha === '2026-02-07' ? 'Hoy - Viernes 7 de Febrero' : 'Mañana - Sábado 8 de Febrero'}
                              </h5>
                              <div className="space-y-3">
                                {citasDelDia.map(cita => (
                                  <div 
                                    key={cita.id}
                                    className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all"
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                        <span className="text-cyan-400 font-bold text-sm">{cita.hora}</span>
                                      </div>
                                      <div>
                                        <p className="font-semibold">{cita.cliente}</p>
                                        <p className="text-sm text-slate-400">{cita.servicio}</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <span className={`px-3 py-1 rounded-full text-xs ${
                                        cita.estado === 'confirmada' 
                                          ? 'bg-green-500/20 text-green-400' 
                                          : 'bg-yellow-500/20 text-yellow-400'
                                      }`}>
                                        {cita.estado === 'confirmada' ? 'Confirmada' : 'Pendiente'}
                                      </span>
                                      <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm hover:bg-cyan-500/30 transition-all">
                                        Ver detalles
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Quick Actions */}
                      <div className="mt-6 flex gap-3">
                        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                          + Nueva Cita
                        </button>
                        <button className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:border-cyan-500 transition-all">
                          Ver Calendario Completo
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <section id="proceso" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-slate-400">
              Metodología probada para el éxito de tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all h-full">
                  <div className="text-6xl font-bold text-cyan-500/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                    {step.title}
                  </h3>
                  <p className="text-slate-400">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tecnologías que Dominamos
            </h2>
            <p className="text-xl text-slate-400">
              Stack moderno para soluciones de alto rendimiento
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-full hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-default"
                style={{ 
                  animation: 'fade-in 0.5s ease-out forwards',
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0 
                }}
              >
                <span className="text-slate-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">¿No ves tu tecnología?</h3>
            <p className="text-slate-300 mb-6">
              Nos adaptamos a tus necesidades. Trabajamos con múltiples tecnologías y frameworks.
            </p>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Hablemos de tu proyecto
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comencemos tu Proyecto
            </h2>
            <p className="text-xl text-slate-400">
              Estamos listos para transformar tu visión en realidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:contacto@sca.com.co" className="text-cyan-400 hover:underline">
                    contacto@sca.com.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <a href="tel:+573001234567" className="text-cyan-400 hover:underline">
                    +57 300 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-slate-400">
                    Bogotá, Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 group"
              >
                Enviar Mensaje
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                SCA
              </span>
            </div>
            
            <p className="text-slate-400 text-sm text-center">
              © 2026 SCA - Software Consulting Agency. Todos los derechos reservados.
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}