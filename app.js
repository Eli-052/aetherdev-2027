/**
 * ============================================================================
 * AETHERDEV LABS — CORE APPLICATION ENGINE (ES2027 Architecture)
 * ============================================================================
 * Arquitectura modular encapsulada para gestionar:
 * 1. Simulador en tiempo real de Orquestación Multi-Agente (MCP).
 * 2. Radar Tecnológico 2027 con View Transitions API nativa.
 * 3. Simulador interactivo de evolución del rol del desarrollador (2023-2027).
 * 4. Laboratorio de patrones de código con resaltado sintáctico y copiado.
 */

const AetherApp = (() => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATASET: ESCENARIOS DE TERMINAL MULTI-AGENTE
  // --------------------------------------------------------------------------
  const TERMINAL_SCENARIOS = {
    feature: [
      { type: 'cmd', text: '$ aether orchestrate --spec="checkout-wasm-edge" --verify' },
      { type: 'info', text: '[Planner-Agent] Descomponiendo especificación en 4 sub-grafos verificables...' },
      { type: 'agent', text: '[MCP-Context] Conectado a PostgreSQL Schema, Stripe API v2027 y Design Tokens.' },
      { type: 'code', text: '[Rust-Wasm-Agent] Compilando motor de cálculo fiscal -> module.wasm (42 KB, 0ms cold-start)' },
      { type: 'warn', text: '[Formal-Verifier] Ejecutando pruebas de invariantes matemáticos (Z3 Solver)... OK' },
      { type: 'success', text: '✔ Desplegado en 310 nodos Edge globales. Cobertura formal: 100%.' }
    ],
    security: [
      { type: 'cmd', text: '$ aether sentinel --watch --auto-remediate=true' },
      { type: 'warn', text: '[Threat-Detector] Anomalía detectada en dependencia transitiva @net/parser@4.1.2' },
      { type: 'info', text: '[Sandbox-Agent] Reproduciendo vector de ataque en microVM aislada...' },
      { type: 'agent', text: '[Patch-Architect] Generando parche determinista sin romper contratos de API.' },
      { type: 'code', text: '[Regression-Suite] 1,420 tests ejecutados en paralelo en 1.8s -> 0 fallos.' },
      { type: 'success', text: '✔ PR #894 fusionado automáticamente y desplegado sin downtime.' }
    ],
    geo: [
      { type: 'cmd', text: '$ aether optimize --target="ai-search-engines" --schema=json-ld' },
      { type: 'info', text: '[GEO-Crawler] Analizando citabilidad semántica para motores generativos...' },
      { type: 'agent', text: '[Knowledge-Graph] Estructurando entidades técnicas en formato JSON-LD v2.' },
      { type: 'code', text: '[Edge-Renderer] Generando respuestas deterministas ultra-rápidas (<15ms TTFB).' },
      { type: 'success', text: '✔ Visibilidad en respuestas de agentes IA incrementada en +68%.' }
    ]
  };

  // --------------------------------------------------------------------------
  // 2. DATASET: RADAR TECNOLÓGICO 2027
  // --------------------------------------------------------------------------
  const TECH_RADAR = [
    {
      id: 'mcp',
      category: 'ai',
      badge: 'Estándar Industrial',
      title: 'Model Context Protocol (MCP)',
      icon: 'network',
      accent: 'cyan',
      description: 'Interfaz universal que conecta agentes autónomos directamente con bases de datos, repositorios, logs y APIs internas con permisos granulares.',
      impact: 'Elimina el pegamento manual entre LLMs y sistemas empresariales.'
    },
    {
      id: 'wasm',
      category: 'runtime',
      badge: 'Compute Universal',
      title: 'WebAssembly (Wasm) Component Model',
      icon: 'cpu',
      accent: 'emerald',
      description: 'Binarios portables seguros ejecutándose fuera del navegador: en el Edge, serverless y plugins de servidor con arranque instantáneo.',
      impact: 'Poliglotismo real (Rust, Go, TypeScript) sin contenedores pesados.'
    },
    {
      id: 'formal',
      category: 'ai',
      badge: 'Confiabilidad Crítica',
      title: 'Verificación Formal Asistida por IA',
      icon: 'shield-check',
      accent: 'violet',
      description: 'Cuando la IA escribe el 80% del código, el cuello de botella es la confianza. Herramientas matemáticas prueban que el código no tiene bugs críticos.',
      impact: 'De pruebas unitarias probabilísticas a garantías matemáticas.'
    },
    {
      id: 'native-web',
      category: 'web',
      badge: 'Zero-Bloat Frontend',
      title: 'CSS Nativo & View Transitions',
      icon: 'layout',
      accent: 'cyan',
      description: 'Container Queries, CSS Nesting, `@layer` y transiciones nativas del navegador reemplazan megabytes de JavaScript innecesario en el cliente.',
      impact: 'Interfaces a 120fps con paquetes JS hasta un 70% más ligeros.'
    },
    {
      id: 'local-first',
      category: 'web',
      badge: 'Latencia Cero',
      title: 'Arquitecturas Local-First & Sync Engines',
      icon: 'database',
      accent: 'emerald',
      description: 'Las aplicaciones leen y escriben en bases de datos locales (SQLite/IndexedDB) y sincronizan en segundo plano mediante CRDTs.',
      impact: 'Experiencia instantánea sin spinners de carga ni pérdida de datos offline.'
    },
    {
      id: 'edge-ai',
      category: 'runtime',
      badge: 'Inferencia Distribuida',
      title: 'SLMs (Small Language Models) en Dispositivo',
      icon: 'zap',
      accent: 'violet',
      description: 'Modelos especializados de 3B-8B parámetros ejecutándose localmente vía WebGPU para privacidad total y coste de inferencia cero.',
      impact: 'Privacidad por diseño y respuestas en tiempo real sin depender de la nube.'
    }
  ];

  // --------------------------------------------------------------------------
  // 3. DATASET: EVOLUCIÓN DEL DESARROLLADOR (2023 - 2027)
  // --------------------------------------------------------------------------
  const EVOLUTION_DATA = {
    2023: {
      role: 'Full-Stack Developer Tradicional',
      summary: 'La mayor parte de la jornada se invertía escribiendo código boilerplate manualmente, configurando bundlers y depurando errores de sintaxis con autocompletado básico.',
      stack: ['React 18', 'Webpack', 'REST APIs', 'Copilot Autocomplete'],
      metrics: [
        { label: 'Escritura Manual de Código (Boilerplate)', value: 65, color: 'bg-slate-500' },
        { label: 'Diseño de Arquitectura y Sistemas', value: 15, color: 'bg-cyan-500' },
        { label: 'Orquestación de Agentes & Prompts', value: 5, color: 'bg-emerald-500' },
        { label: 'Auditoría, Seguridad y Verificación', value: 15, color: 'bg-violet-500' }
      ]
    },
    2024: {
      role: 'AI-Assisted Software Engineer',
      summary: 'Adopción masiva de chats contextuales en el IDE. El desarrollador acelera la creación de pruebas y componentes, pero sigue integrando todo manualmente.',
      stack: ['Next.js', 'TypeScript 5', 'RAG Básico', 'Docker'],
      metrics: [
        { label: 'Escritura Manual de Código (Boilerplate)', value: 48, color: 'bg-slate-500' },
        { label: 'Diseño de Arquitectura y Sistemas', value: 22, color: 'bg-cyan-500' },
        { label: 'Orquestación de Agentes & Prompts', value: 14, color: 'bg-emerald-500' },
        { label: 'Auditoría, Seguridad y Verificación', value: 16, color: 'bg-violet-500' }
      ]
    },
    2025: {
      role: 'Agentic Workflow Developer',
      summary: 'Surgen los primeros agentes capaces de editar múltiples archivos y ejecutar comandos en terminal. El enfoque empieza a girar hacia la revisión de código generado.',
      stack: ['MCP v1', 'LangGraph', 'Tailwind CSS', 'Edge Functions'],
      metrics: [
        { label: 'Escritura Manual de Código (Boilerplate)', value: 30, color: 'bg-slate-500' },
        { label: 'Diseño de Arquitectura y Sistemas', value: 28, color: 'bg-cyan-500' },
        { label: 'Orquestación de Agentes & Prompts', value: 22, color: 'bg-emerald-500' },
        { label: 'Auditoría, Seguridad y Verificación', value: 20, color: 'bg-violet-500' }
      ]
    },
    2026: {
      role: 'Systems & Context Engineer',
      summary: 'La ingeniería de contexto reemplaza al prompting simple. Los equipos diseñan servidores MCP internos y pipelines de validación automatizada.',
      stack: ['MCP Servers', 'WebAssembly', 'Local-First DBs', 'WebGPU'],
      metrics: [
        { label: 'Escritura Manual de Código (Boilerplate)', value: 18, color: 'bg-slate-500' },
        { label: 'Diseño de Arquitectura y Sistemas', value: 32, color: 'bg-cyan-500' },
        { label: 'Orquestación de Agentes & Prompts', value: 26, color: 'bg-emerald-500' },
        { label: 'Auditoría, Seguridad y Verificación', value: 24, color: 'bg-violet-500' }
      ]
    },
    2027: {
      role: 'Principal AI Systems Architect',
      summary: 'El ingeniero actúa como director de orquesta: define invariantes arquitectónicos, gobierna enjambres de agentes especializados y valida la seguridad mediante verificación formal.',
      stack: ['MCP v2 Enterprise', 'Wasm Component Model', 'Z3 Formal Verifier', 'WebGPU SLMs'],
      metrics: [
        { label: 'Escritura Manual de Código (Boilerplate)', value: 10, color: 'bg-slate-500' },
        { label: 'Diseño de Arquitectura y Sistemas', value: 35, color: 'bg-cyan-500' },
        { label: 'Orquestación de Agentes & Prompts', value: 30, color: 'bg-emerald-500' },
        { label: 'Auditoría, Seguridad y Verificación', value: 25, color: 'bg-violet-500' }
      ]
    }
  };

  // --------------------------------------------------------------------------
  // 4. DATASET: PATRONES DE CÓDIGO EN PRODUCCIÓN (2027)
  // --------------------------------------------------------------------------
  const CODE_EXAMPLES = {
    mcp: {
      title: 'Servidor MCP Tipado con Permisos Zero-Trust',
      explanation: 'En 2027, en lugar de crear endpoints REST aislados para cada integración, exponemos herramientas tipadas mediante el Model Context Protocol (MCP) con validación estricta de esquemas y trazabilidad.',
      metric: '1.4ms overhead',
      code: `// agent-server.mcp.ts — Estándar de Interoperabilidad Agéntica 2027
import { McpServer, PolicyGuard } from '@aether/mcp-core';
import { z } from 'zod';

const server = new McpServer({
  name: 'financial-ledger-agent',
  version: '2.4.0',
  guard: PolicyGuard.strictZeroTrust()
});

server.tool(
  'audit_transaction_batch',
  'Verifica invariantes contables antes de ejecutar liquidaciones',
  {
    batchId: z.string().uuid(),
    maxTolerance: z.number().max(0.001)
  },
  async ({ batchId, maxTolerance }, context) => {
    const ledger = await context.db.readOnlySnapshot(batchId);
    const anomalies = ledger.verifyDoubleEntry(maxTolerance);

    return {
      status: anomalies.length === 0 ? 'VERIFIED' : 'BLOCKED',
      proofHash: await ledger.generateZkProof(),
      anomalies
    };
  }
);`
    },
    css: {
      title: 'CSS Nativo Adaptativo con @layer y Container Queries',
      explanation: 'Los componentes modernos ya no dependen del tamaño global de la pantalla ni de librerías CSS-in-JS pesadas. Responden directamente al espacio de su contenedor padre con cascada determinista.',
      metric: '0 KB JS Runtime',
      code: `/* adaptive-ui.css — Arquitectura CSS Nativa 2027 */
@layer reset, tokens, layout, components;

@layer components {
  .telemetry-card {
    container-type: inline-size;
    container-name: card-shell;
    background: color-mix(in oklab, #0B0F17 85%, cyan 15%);
    border: 1px solid color-mix(in oklab, white 12%, transparent);
    border-radius: 1rem;
    padding: clamp(1rem, 3cqi, 2rem);
  }

  /* El componente se reorganiza según su propio ancho, no el viewport */
  @container card-shell (min-width: 420px) {
    .telemetry-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      align-items: center;
      gap: 1.5rem;
    }
  }
}`
    },
    wasm: {
      title: 'Contrato WebAssembly Interface Types (WIT)',
      explanation: 'Mediante WIT definimos interfaces agnósticas del lenguaje. Un módulo escrito en Rust puede ejecutarse dentro de un worker en TypeScript o un servidor Go sin serialización JSON.',
      metric: '0.3ms Cold-Start',
      code: `// edge-compute.wit — WebAssembly Component Model
package aether:edge-crypto@2.0.0;

interface signature-verifier {
  record payload {
    data: list<u8>,
    timestamp: u64,
    signer-did: string,
  }

  variant verification-error {
    expired-token,
    invalid-curve,
    revoked-identity(string),
  }

  /// Verifica firmas post-cuánticas directamente en el nodo Edge
  verify-quantum-safe: func(input: payload) -> result<bool, verification-error>;
}

world edge-worker {
  export signature-verifier;
}`
    }
  };

  // --------------------------------------------------------------------------
  // ESTADO INTERNO
  // --------------------------------------------------------------------------
  let terminalTimer = null;
  let currentScenario = 'feature';
  let currentTab = 'mcp';

  // --------------------------------------------------------------------------
  // MÓDULO 1: SIMULADOR DE TERMINAL MULTI-AGENTE
  // --------------------------------------------------------------------------
  function runTerminalSimulation(scenarioKey = currentScenario) {
    currentScenario = scenarioKey;
    const outputEl = document.getElementById('terminal-output');
    const statusEl = document.getElementById('terminal-status');
    if (!outputEl) return;

    if (terminalTimer) clearTimeout(terminalTimer);
    outputEl.innerHTML = '';
    statusEl.textContent = 'EXECUTING...';
    statusEl.className = 'font-mono text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20';

    const lines = TERMINAL_SCENARIOS[scenarioKey] || TERMINAL_SCENARIOS.feature;
    let index = 0;

    const colorMap = {
      cmd: 'text-white font-semibold',
      info: 'text-slate-400',
      agent: 'text-cyan-400',
      code: 'text-violet-300',
      warn: 'text-amber-300',
      success: 'text-emerald-400 font-semibold'
    };

    function printNextLine() {
      if (index >= lines.length) {
        statusEl.textContent = 'VERIFIED';
        statusEl.className = 'font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
        return;
      }

      const line = lines[index];
      const div = document.createElement('div');
      div.className = `${colorMap[line.type] || 'text-slate-300'} opacity-0 translate-y-1 transition-all duration-300`;
      div.textContent = line.text;
      outputEl.appendChild(div);

      requestAnimationFrame(() => {
        div.classList.remove('opacity-0', 'translate-y-1');
      });

      outputEl.scrollTop = outputEl.scrollHeight;
      index++;
      terminalTimer = setTimeout(printNextLine, 550);
    }

    printNextLine();
  }

  // --------------------------------------------------------------------------
  // MÓDULO 2: RADAR TECNOLÓGICO CON VIEW TRANSITIONS API
  // --------------------------------------------------------------------------
  function renderTechCards(filter = 'all') {
    const grid = document.getElementById('tech-grid');
    if (!grid) return;

    const filtered = filter === 'all'
      ? TECH_RADAR
      : TECH_RADAR.filter(item => item.category === filter);

    const accentStyles = {
      cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      violet: 'text-violet-400 bg-violet-500/10 border-violet-500/20'
    };

    const updateDOM = () => {
      grid.innerHTML = filtered.map(tech => `
        <article class="tech-card rounded-2xl bg-obsidian-900 border border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center border ${accentStyles[tech.accent]}">
                <i data-lucide="${tech.icon}" class="w-5 h-5"></i>
              </div>
              <span class="font-mono text-[11px] px-2.5 py-1 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                ${tech.badge}
              </span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">${tech.title}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">${tech.description}</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/80">
            <p class="text-xs font-mono text-slate-300">
              <span class="text-cyan-400">Impacto:</span> ${tech.impact}
            </p>
          </div>
        </article>
      `).join('');

      if (window.lucide) window.lucide.createIcons();
    };

    if (document.startViewTransition) {
      document.startViewTransition(() => updateDOM());
    } else {
      updateDOM();
    }
  }

  // --------------------------------------------------------------------------
  // MÓDULO 3: SIMULADOR DE EVOLUCIÓN (2023 - 2027)
  // --------------------------------------------------------------------------
  function updateEvolutionSimulator(year) {
    const data = EVOLUTION_DATA[year];
    if (!data) return;

    document.getElementById('year-display').textContent = year;
    document.getElementById('role-title').textContent = data.role;
    document.getElementById('year-summary').textContent = data.summary;

    const barsContainer = document.getElementById('skill-bars-container');
    barsContainer.innerHTML = data.metrics.map(m => `
      <div>
        <div class="flex justify-between text-xs font-mono mb-1.5">
          <span class="text-slate-300">${m.label}</span>
          <span class="text-white font-bold">${m.value}%</span>
        </div>
        <div class="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div class="${m.color} h-full rounded-full transition-all duration-500" style="width: ${m.value}%"></div>
        </div>
      </div>
    `).join('');

    const tagsContainer = document.getElementById('year-stack-tags');
    tagsContainer.innerHTML = data.stack.map(tag => `
      <span class="font-mono text-xs px-2.5 py-1 rounded-md bg-obsidian-950 border border-slate-800 text-cyan-300">
        ${tag}
      </span>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // MÓDULO 4: LABORATORIO DE CÓDIGO CON RESALTADO SINTÁCTICO
  // --------------------------------------------------------------------------
  function highlightSyntax(rawCode) {
    const escaped = rawCode
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    return escaped
      .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="token-comment">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="token-string">$1</span>')
      .replace(/\b(import|from|const|async|await|return|interface|record|variant|world|export|func)\b/g, '<span class="token-keyword">$1</span>')
      .replace(/\b(string|number|bool|u8|u64|list|result|McpServer|PolicyGuard)\b/g, '<span class="token-type">$1</span>');
  }

  function renderCodeTab(tabKey) {
    currentTab = tabKey;
    const item = CODE_EXAMPLES[tabKey];
    if (!item) return;

    document.getElementById('code-display').innerHTML = highlightSyntax(item.code);
    document.getElementById('code-title').textContent = item.title;
    document.getElementById('code-explanation').textContent = item.explanation;
    document.getElementById('code-metric').textContent = item.metric;

    document.querySelectorAll('.code-tab').forEach(btn => {
      const isActive = btn.dataset.tab === tabKey;
      btn.classList.toggle('border-cyan-400', isActive);
      btn.classList.toggle('text-cyan-400', isActive);
      btn.classList.toggle('border-transparent', !isActive);
      btn.classList.toggle('text-slate-400', !isActive);
    });
  }

  // --------------------------------------------------------------------------
  // INICIALIZACIÓN Y EVENT LISTENERS
  // --------------------------------------------------------------------------
  function bindEvents() {
    // Menú móvil
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Botón re-ejecutar terminal
    document.getElementById('replay-terminal-btn')?.addEventListener('click', () => {
      runTerminalSimulation(currentScenario);
    });

    // Selector de escenarios de terminal
    document.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active', 'bg-cyan-500/15', 'text-cyan-300', 'border-cyan-500/30');
          b.classList.add('text-slate-400', 'border-transparent');
        });
        btn.classList.add('active', 'bg-cyan-500/15', 'text-cyan-300', 'border-cyan-500/30');
        btn.classList.remove('text-slate-400', 'border-transparent');
        runTerminalSimulation(btn.dataset.scenario);
      });
    });

    // Filtros del Radar 2027
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active', 'bg-cyan-500', 'text-obsidian-950', 'font-semibold');
          b.classList.add('bg-slate-900', 'text-slate-300', 'border', 'border-slate-800');
        });
        btn.classList.add('active', 'bg-cyan-500', 'text-obsidian-950', 'font-semibold');
        btn.classList.remove('bg-slate-900', 'text-slate-300', 'border', 'border-slate-800');
        renderTechCards(btn.dataset.filter);
      });
    });

    // Slider de evolución 2023-2027
    const yearSlider = document.getElementById('year-slider');
    yearSlider?.addEventListener('input', (e) => {
      updateEvolutionSimulator(Number(e.target.value));
    });

    // Pestañas del laboratorio de código
    document.querySelectorAll('.code-tab').forEach(btn => {
      btn.addEventListener('click', () => renderCodeTab(btn.dataset.tab));
    });

    // Copiar código al portapapeles
    document.getElementById('copy-code-btn')?.addEventListener('click', async () => {
      const raw = CODE_EXAMPLES[currentTab]?.code || '';
      await navigator.clipboard.writeText(raw);
      const label = document.getElementById('copy-btn-text');
      label.textContent = '¡Copiado!';
      setTimeout(() => { label.textContent = 'Copiar'; }, 2000);
    });

    // Formulario de auditoría
    document.getElementById('contact-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      feedback.textContent = '✔ Solicitud recibida. Un Principal Architect te contactará en < 24h.';
      feedback.classList.remove('hidden');
      e.target.reset();
    });
  }

  function init() {
    if (window.lucide) window.lucide.createIcons();
    runTerminalSimulation('feature');
    renderTechCards('all');
    updateEvolutionSimulator(2027);
    renderCodeTab('mcp');
    bindEvents();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', AetherApp.init);