"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Shield,
  Clock,
  Award,
  TrendingUp,
  Users,
  Package,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Heart,
  Activity,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <main className="overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                MediSupply Pro
              </span>
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#productos" className="text-gray-700 hover:text-primary-600 transition">Productos</a>
              <a href="#ventajas" className="text-gray-700 hover:text-primary-600 transition">Ventajas</a>
              <a href="#certificaciones" className="text-gray-700 hover:text-primary-600 transition">Certificaciones</a>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition"
              >
                Solicitar Cotización
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                  🏥 Líder en Suministros Médicos B2B
                </span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                  Material Médico de{' '}
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Alta Calidad
                  </span>{' '}
                  para Profesionales
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Optimice su cadena de suministro con nuestro catálogo integral de +15,000 productos certificados.
                  Entregas en 24-48h y soporte técnico especializado.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl flex items-center justify-center gap-2 group"
                >
                  Solicitar Catálogo Completo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </motion.a>
                <motion.a
                  href="#productos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-primary-50 transition"
                >
                  Ver Productos
                </motion.a>
              </motion.div>

              <motion.div
                className="mt-12 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <div className="text-3xl font-bold text-primary-600">+2,500</div>
                  <div className="text-sm text-gray-600">Clientes B2B</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <div className="text-3xl font-bold text-primary-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600">Soporte</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Shield, label: "Certificado", color: "from-blue-500 to-blue-600" },
                      { icon: Clock, label: "Entrega Rápida", color: "from-green-500 to-green-600" },
                      { icon: Award, label: "ISO 13485", color: "from-purple-500 to-purple-600" },
                      { icon: Heart, label: "Calidad", color: "from-red-500 to-red-600" }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-3`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-gray-800">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 opacity-60"
          >
            {['ISO 13485', 'CE Marking', 'FDA Registered', 'GMP Certified', 'ISO 9001'].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-xl font-bold text-gray-400"
              >
                {cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Nuestro Catálogo</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Soluciones Integrales para Cada Necesidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 15,000 productos en stock permanente con trazabilidad completa y garantía de calidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Material Quirúrgico",
                desc: "Instrumental de precisión y consumibles estériles para todo tipo de cirugías",
                icon: Activity,
                items: ["Bisturís y Pinzas", "Suturas Certificadas", "Kits Quirúrgicos", "Implantes Especializados"],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Equipamiento Hospitalario",
                desc: "Mobiliario clínico y equipos de diagnóstico de última generación",
                icon: Package,
                items: ["Camas Hospitalarias", "Monitores Vitales", "Equipos de Imagenología", "Mobiliario Clínico"],
                color: "from-green-500 to-green-600"
              },
              {
                title: "Protección e Higiene",
                desc: "EPIs certificados y productos de esterilización hospitalaria",
                icon: Shield,
                items: ["Mascarillas FFP2/FFP3", "Guantes Estériles", "Batas Quirúrgicas", "Desinfectantes Médicos"],
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Diagnóstico In Vitro",
                desc: "Reactivos y equipos de laboratorio con certificación ISO",
                icon: Stethoscope,
                items: ["Tests Rápidos", "Reactivos Bioquímicos", "Equipos de Análisis", "Material de Laboratorio"],
                color: "from-red-500 to-red-600"
              },
              {
                title: "Dispositivos Implantables",
                desc: "Prótesis y dispositivos de alta tecnología trazables",
                icon: Heart,
                items: ["Prótesis Ortopédicas", "Dispositivos Cardiovasculares", "Implantes Dentales", "Biomateriales"],
                color: "from-orange-500 to-orange-600"
              },
              {
                title: "Equipos de Urgencias",
                desc: "Material crítico para respuesta rápida y emergencias médicas",
                icon: TrendingUp,
                items: ["Desfibriladores", "Equipos de RCP", "Maletines de Emergencia", "Respiradores Portátiles"],
                color: "from-teal-500 to-teal-600"
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.desc}</p>
                <ul className="space-y-2">
                  {product.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Ver catálogo completo <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="ventajas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Ventajas Competitivas</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Por Qué Elegir MediSupply Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No somos un distribuidor más. Somos su socio estratégico en el suministro médico
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: "Entrega Express 24-48h",
                desc: "Logística optimizada con red de distribución nacional. Stock permanente de productos críticos con entregas urgentes garantizadas.",
                metric: "98% puntualidad"
              },
              {
                icon: Shield,
                title: "Trazabilidad Total",
                desc: "Seguimiento completo desde fabricante hasta destino. Documentación técnica y certificados de conformidad en cada pedido.",
                metric: "100% certificado"
              },
              {
                icon: Users,
                title: "Asesoría Especializada",
                desc: "Equipo técnico con formación sanitaria a su disposición. Soporte en selección de productos y optimización de inventarios.",
                metric: "24/7 disponible"
              },
              {
                icon: TrendingUp,
                title: "Precios Competitivos",
                desc: "Negociación directa con fabricantes líderes. Descuentos por volumen y programas de fidelización para clientes recurrentes.",
                metric: "Hasta 30% ahorro"
              },
              {
                icon: Award,
                title: "Garantía de Calidad",
                desc: "Todos nuestros productos cumplen normativa CE, FDA e ISO. Proceso de verificación riguroso y política de devolución sin complicaciones.",
                metric: "ISO 13485"
              },
              {
                icon: Package,
                title: "Gestión de Stock",
                desc: "Plataforma digital para pedidos recurrentes y gestión de inventario. Alertas automáticas y planificación de necesidades.",
                metric: "Portal B2B"
              }
            ].map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 transition group"
              >
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition">
                  <advantage.icon className="w-24 h-24 text-primary-600" />
                </div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <advantage.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold">{advantage.title}</h3>
                    <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                      {advantage.metric}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{advantage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificaciones" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Confianza y Calidad</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Certificaciones Internacionales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cumplimos con los estándares más exigentes de la industria médica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "ISO 13485", desc: "Sistema de Gestión de Calidad" },
              { name: "CE Marking", desc: "Conformidad Europea" },
              { name: "FDA Registered", desc: "Registro FDA EE.UU." },
              { name: "GMP Certified", desc: "Buenas Prácticas de Manufactura" }
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Optimizar su Cadena de Suministro?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únase a más de 2,500 instituciones que confían en nosotros. Solicite su catálogo personalizado hoy mismo.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition"
            >
              Solicitar Cotización Gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Contacto</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Hablemos de Sus Necesidades
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nuestro equipo comercial está listo para diseñar una solución a medida para su institución.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Teléfono Comercial", value: "+34 900 123 456", desc: "Lun-Vie 8:00-20:00h" },
                  { icon: Mail, title: "Email Corporativo", value: "ventas@medisupplypro.com", desc: "Respuesta en 2h" },
                  { icon: MapPin, title: "Oficinas Centrales", value: "Parque Empresarial Salud", desc: "Madrid, España" }
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500">{contact.title}</div>
                      <div className="text-lg font-bold text-gray-900">{contact.value}</div>
                      <div className="text-sm text-gray-600">{contact.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Solicitar Información</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Corporativo</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="juan@hospital.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Institución</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="Hospital General" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="+34 600 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none" placeholder="Cuéntenos qué necesita..."></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Enviar Solicitud
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">MediSupply Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Líder en distribución de material médico y quirúrgico para profesionales de la salud.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Material Quirúrgico</a></li>
                <li><a href="#" className="hover:text-white transition">Equipamiento</a></li>
                <li><a href="#" className="hover:text-white transition">Protección</a></li>
                <li><a href="#" className="hover:text-white transition">Diagnóstico</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Certificaciones</a></li>
                <li><a href="#" className="hover:text-white transition">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-white transition">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Política de Cookies</a></li>
                <li><a href="#" className="hover:text-white transition">Aviso Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 MediSupply Pro. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {['ISO 13485', 'CE', 'FDA'].map((cert) => (
                <span key={cert} className="text-xs text-gray-500 font-semibold">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
