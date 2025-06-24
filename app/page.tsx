'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [showPolicy, setShowPolicy] = useState(false)
  const [showBestPractices, setShowBestPractices] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-dark-900 flex flex-col overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-accent-royal-blue/20 via-transparent to-accent-denim-blue/20 blur-3xl animate-spin-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-accent-soft-gold/20 via-transparent to-accent-gold/20 blur-3xl animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
        <div className="absolute inset-0 bg-dark-900/80" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-50" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"grid\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"%3E%3Cpath d=\"M 100 0 L 0 0 0 100\" fill=\"none\" stroke=\"rgba(255,255,255,0.02)\" stroke-width=\"1\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23grid)\" /%3E%3C/svg%3E')" }} />

      <header className={`relative z-10 flex justify-center p-8 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="glass-logo rounded-2xl px-8 py-4 animate-glow-logo">
          <Image
            src="/rjlf_logo.png"
            alt="Reichman Jorgensen Lehman & Feldberg LLP"
            width={600}
            height={200}
            className="h-20 md:h-28 w-auto"
            priority
          />
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <div className="text-center max-w-5xl relative">
          {/* Floating Particles */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-accent-royal-blue rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-accent-denim-blue rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent-soft-gold rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }} />
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-16 transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-gradient">RJLF AI Tools</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-5xl mx-auto">
            <button
              onClick={() => setShowPolicy(true)}
              className={`group relative px-8 py-5 overflow-hidden rounded-xl transition-all duration-500 transform w-full lg:w-auto lg:min-w-[200px] hover:scale-105 active:scale-100 ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rjlf-blue via-accent-royal-blue to-white opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-accent-royal-blue to-rjlf-blue opacity-0 group-hover:opacity-90 transition-all duration-700 ease-in-out" />
              <span className="relative flex items-center justify-center gap-3 text-white font-semibold text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                AI Policy
              </span>
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:scale-105 transition-transform duration-300" />
            </button>
            
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-8 py-5 overflow-hidden rounded-xl transition-all duration-500 transform w-full lg:w-auto lg:min-w-[200px] hover:scale-105 active:scale-100 ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="absolute inset-0 glass" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center gap-3 text-white font-semibold text-lg">
                Use Claude
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 border border-accent-soft-gold/50 rounded-xl group-hover:border-accent-gold transition-colors duration-300" />
            </a>
            
            <button
              onClick={() => setShowBestPractices(true)}
              className={`group relative px-8 py-5 overflow-hidden rounded-xl transition-all duration-500 transform w-full lg:w-auto lg:min-w-[200px] hover:scale-105 active:scale-100 ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
              style={{ transitionDelay: '1100ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-soft-gold via-accent-gold to-white opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-accent-gold to-accent-soft-gold opacity-0 group-hover:opacity-90 transition-all duration-700 ease-in-out" />
              <span className="relative flex items-center justify-center gap-3 text-white font-semibold text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Best Practices
              </span>
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl group-hover:scale-105 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {showPolicy && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowPolicy(false)}
        >
          <div 
            className="glass rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
            style={{ animation: 'modalEnter 0.3s ease-out' }}
            onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 glass border-b border-white/10 p-8">
              <h2 className="text-3xl font-bold text-gradient">AI Security Protocols</h2>
              <button
                onClick={() => setShowPolicy(false)}
                className="absolute top-8 right-8 text-gray-400 hover:text-white active:text-white transition-colors duration-200 group p-2 -m-2 rounded-lg hover:bg-white/10 active:bg-white/20"
              >
                <svg className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8 space-y-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              <section>
                <h3 className="text-2xl font-semibold mb-4 text-accent-blue">Mission Statement</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our AI integration framework is designed to enhance legal excellence while maintaining 
                  the highest standards of confidentiality, security, and professional ethics that define 
                  our practice.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-accent-purple">Data Classification Matrix</h3>
                <div className="space-y-4">
                  <div className="glass rounded-xl p-6 border border-green-500/30">
                    <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Authorized Data Categories
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        Legal research queries and general case law analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        Public domain documentation and regulatory frameworks
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        Template generation for standard legal documents
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        Procedural guidance and best practice frameworks
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass rounded-xl p-6 border border-red-500/30">
                    <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                      Restricted Information
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">▸</span>
                        Client-specific information and case details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">▸</span>
                        Internal strategic documents and privileged communications
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">▸</span>
                        Financial data and billing information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">▸</span>
                        Personnel records and partnership agreements
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-accent-gold">Implementation Guidelines</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">1.</span>
                    All AI interactions must be conducted through approved, encrypted channels
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">2.</span>
                    Regular audits will be conducted to ensure compliance with data protection standards
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">3.</span>
                    AI-generated content must be reviewed by qualified professionals before client delivery
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">4.</span>
                    Continuous training programs will ensure team proficiency with AI tools
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">5.</span>
                    Incident response protocols are in place for any security concerns
                  </li>
                </ul>
              </section>

              <section className="glass rounded-xl p-6 border border-accent-blue/30">
                <h3 className="text-xl font-semibold mb-3 text-accent-blue">Ready to Begin?</h3>
                <p className="text-gray-300 mb-4">
                  Access our secure AI platform using your firm credentials. All sessions are monitored 
                  and encrypted to ensure complete confidentiality.
                </p>
                <button
                  onClick={() => setShowPolicy(false)}
                  className="px-6 py-3 bg-gradient-to-r from-accent-denim-blue to-accent-royal-blue rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-200"
                >
                  I Understand and Accept
                </button>
              </section>
            </div>
          </div>
        </div>
      )}

      {showBestPractices && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowBestPractices(false)}
        >
          <div 
            className="glass rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
            style={{ animation: 'modalEnter 0.3s ease-out' }}
            onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 glass border-b border-white/10 p-8">
              <h2 className="text-3xl font-bold text-gradient">AI Best Practices</h2>
              <button
                onClick={() => setShowBestPractices(false)}
                className="absolute top-8 right-8 text-gray-400 hover:text-white active:text-white transition-colors duration-200 group p-2 -m-2 rounded-lg hover:bg-white/10 active:bg-white/20"
              >
                <svg className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8 space-y-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              <section>
                <h3 className="text-2xl font-semibold mb-4 text-accent-royal-blue">Effective Prompting</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-denim-blue mt-1">•</span>
                    Be clear and specific about your desired outcome
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-denim-blue mt-1">•</span>
                    Provide relevant context and background information
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-denim-blue mt-1">•</span>
                    Break complex tasks into smaller, manageable steps
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-denim-blue mt-1">•</span>
                    Ask for explanations when needed for better understanding
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-accent-gold">Quality Assurance</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-soft-gold mt-1">•</span>
                    Always review and verify AI-generated content
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-soft-gold mt-1">•</span>
                    Cross-reference important information with trusted sources
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-soft-gold mt-1">•</span>
                    Use AI as a starting point, not the final product
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-soft-gold mt-1">•</span>
                    Maintain critical thinking and professional judgment
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-accent-denim-blue">Common Use Cases</h3>
                <div className="grid gap-4">
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Research & Analysis</h4>
                    <p className="text-sm text-gray-400">Gather information, summarize documents, and identify key points</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Document Drafting</h4>
                    <p className="text-sm text-gray-400">Create templates, outlines, and initial drafts for review</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Communication</h4>
                    <p className="text-sm text-gray-400">Improve clarity, tone, and structure of written communications</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Learning & Development</h4>
                    <p className="text-sm text-gray-400">Explore new topics and stay updated on industry trends</p>
                  </div>
                </div>
              </section>

              <section className="glass rounded-xl p-6 border border-accent-soft-gold/30">
                <h3 className="text-xl font-semibold mb-3 text-accent-gold">Remember</h3>
                <p className="text-gray-300">
                  AI is a powerful tool to enhance your capabilities, not replace your expertise. 
                  Use it wisely to amplify your professional effectiveness while maintaining 
                  the high standards of quality and ethics that define our firm.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}