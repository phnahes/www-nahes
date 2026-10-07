const CATEGORY_STYLES = {
  iot: { section: "section-icon--agro", card: "service-card--agro", badge: "service-badge service-badge--agro" },
  engenharia: { section: "section-icon--eng", card: "service-card--eng", badge: "service-badge service-badge--eng" },
  vw: { section: "section-icon--vw", card: "service-card--vw", badge: "service-badge service-badge--vw" },
  utilitarios: { section: "section-icon--util", card: "service-card--util", badge: "service-badge service-badge--util" },
};

const ENG_SUBSECTIONS = [
  {
    id: "can",
    title: "CAN Bus",
    description: "Análise e diagnóstico de redes CAN",
  },
  {
    id: "vw",
    title: "VW",
    description: "Decodificadores e ferramentas Volkswagen",
  },
  {
    id: "ford",
    title: "Ford",
    description: "Consulta técnica e dados de fábrica Ford",
  },
];

const IOT_SUBSECTIONS = [
  {
    id: "agricultura",
    title: "Agricultura",
    description: "Monitoramento de campo, sensores e LoRaWAN",
  },
  {
    id: "automacao",
    title: "Automação",
    description: "Controle, integração e projetos industriais",
  },
  {
    id: "nfc",
    title: "Tags NFC",
    description: "Rastreio e interação por aproximação",
  },
];

const SUBSECTIONS_BY_CATEGORY = {
  engenharia: ENG_SUBSECTIONS,
  iot: IOT_SUBSECTIONS,
};

const CATEGORIES = [
  {
    id: "utilitarios",
    title: "Utilitários",
    description: "Apps do dia a dia, calculadoras e ferramentas web",
    icon: "🧮",
  },
  {
    id: "iot",
    title: "IoT",
    description: "Sensores, conectividade e automação — agricultura, indústria e NFC",
    icon: "📡",
  },
  {
    id: "engenharia",
    title: "Engenharia Automotiva",
    description: "Diagnóstico veicular, análise CAN e consulta técnica",
    icon: "⚙️",
  },
];

const SERVICES = [
  {
    id: "scoreboard",
    category: "utilitarios",
    name: "Web",
    title: "Scoreboard",
    description:
      "Times equilibrados, placar ao vivo e histórico de partidas com código de grupo compartilhável.",
    icon: "⚽",
  },
  {
    id: "cupom-bot",
    category: "utilitarios",
    name: "Web",
    title: "Cupom Bot",
    description:
      "Cupons do Mercado Livre com login seguro e extensão Chrome para consulta rápida.",
    icon: "🏷️",
  },
  {
    id: "calculadora-milhas",
    category: "utilitarios",
    name: "Web",
    title: "Calculadora de Milheiros",
    description:
      "Descubra o valor do milheiro — quanto você paga por cada mil milhas adquiridas.",
    icon: "✈️",
  },
  {
    id: "3dprint-calculator",
    category: "utilitarios",
    name: "Web",
    title: "Calculadora de Custo — Impressão 3D",
    description:
      "Estime o custo por peça com filamento, tempo de mesa, energia, desgaste, extras e margem de lucro.",
    icon: "🖨️",
  },
  {
    id: "sni-quote",
    category: "utilitarios",
    name: "Web",
    title: "Mensagem do Dia",
    description:
      "Frase ou reflexão do dia — página web com consulta por data ou sorteio aleatório.",
    icon: "✨",
  },
  {
    id: "lora-dashboard",
    category: "iot",
    subsection: "agricultura",
    name: "Agricultura",
    title: "Painel para Agricultura de Precisão",
    description:
      "Painel web para agricultura de precisão — monitoramento LoRa, sensores, gateway e API em tempo real.",
    icon: "🌱",
  },
  {
    id: "iot-automacao",
    category: "iot",
    subsection: "automacao",
    name: "Automação",
    title: "Automação & Controle",
    description:
      "Projetos IoT para automação industrial — sensores, atuadores, integração de sistemas e dashboards sob demanda.",
    icon: "⚡",
  },
  {
    id: "iot-nfc",
    category: "iot",
    subsection: "nfc",
    name: "IoT",
    title: "Integração com Tags NFC",
    description:
      "Projetos com tags NFC — rastreio, automação e interação por aproximação em campo ou operação.",
    icon: "📲",
  },
  {
    id: "ford-ic",
    category: "engenharia",
    subsection: "ford",
    name: "Engenharia",
    title: "Ford Information Collector",
    description:
      "Consulta de VIN Ford: As-Built, parâmetros CCC, Node IDs e decodificação ISO 3779 com cache local.",
    icon: "🚗",
  },
  {
    id: "can-analyzer",
    category: "engenharia",
    subsection: "can",
    name: "Engenharia",
    title: "CAN Bus Analyzer",
    description:
      "Analisador CAN multiplataforma com SLCAN, decoders OBD-II/FTCAN/VAG BAP, gateway, playback e transmissão em tempo real.",
    icon: "📊",
  },
  {
    id: "odis-viewer",
    category: "engenharia",
    subsection: "vw",
    name: "Engenharia",
    title: "ODIS Backup Decoder",
    description:
      "Decodificador de relatórios ODIS Engineering — visualização de dados de diagnóstico VW em HTML/XML.",
    icon: "🔧",
  },
  {
    id: "ebc460",
    category: "engenharia",
    subsection: "vw",
    name: "Engenharia",
    title: "ABS LongCoding Decoder — EBC 460",
    description:
      "Decodificação de Long Coding hexadecimal do módulo ABS EBC 460 (PQ25, PQ26 e Premium) com validação de VIN.",
    icon: "🛞",
  },
  {
    id: "mk60ec1",
    category: "engenharia",
    subsection: "vw",
    name: "Engenharia",
    title: "ABS LongCoding Decoder — MK60EC1",
    description:
      "Decodificador byte a byte do módulo ABS MK60EC1 para veículos do grupo VAG.",
    icon: "🛞",
  },
  {
    id: "vw-vin",
    category: "engenharia",
    subsection: "vw",
    name: "Engenharia",
    title: "Decodificador de VIN VW",
    description:
      "Validação e decodificação de VIN Volkswagen conforme ISO 3779 — WMI, modelo, ano e planta.",
    icon: "🔍",
  },
];

const catalogEl = document.getElementById("catalog");
const countEl = document.getElementById("service-count");
const searchEl = document.getElementById("search");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

function normalize(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getSubsectionMeta(categoryId, subsectionId) {
  const subsections = SUBSECTIONS_BY_CATEGORY[categoryId] || [];
  return subsections.find((s) => s.id === subsectionId);
}

function getServiceStyle(service) {
  if (service.category === "engenharia" && service.subsection === "vw") {
    return CATEGORY_STYLES.vw;
  }
  if (service.category === "engenharia") {
    return CATEGORY_STYLES.engenharia;
  }
  return CATEGORY_STYLES[service.category] || CATEGORY_STYLES.utilitarios;
}

function matchesQuery(service, query) {
  if (!query) return true;
  const category = CATEGORIES.find((c) => c.id === service.category);
  const subsection = getSubsectionMeta(service.category, service.subsection);
  const haystack = [
    service.name,
    service.title,
    service.description,
    category?.title,
    category?.description,
    subsection?.title,
    subsection?.description,
  ].join(" ");
  return normalize(haystack).includes(query);
}

function renderCard(service) {
  const style = getServiceStyle(service);
  const cardClass = style.card ? `service-card ${style.card}` : "service-card";

  return `
    <article class="${cardClass}">
      <div class="service-card-top">
        <span class="service-icon" aria-hidden="true">${service.icon || "📦"}</span>
        <span class="${style.badge}">${service.name}</span>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
    </article>
  `;
}

function renderSubsectionSection(category, services, subsections) {
  const style = CATEGORY_STYLES[category.id] || CATEGORY_STYLES.utilitarios;
  const subsectionsHtml = subsections
    .map((sub) => {
      const items = services.filter((s) => s.subsection === sub.id);
      if (!items.length) return "";
      return `
        <div class="subsection" aria-labelledby="subsection-${category.id}-${sub.id}">
          <h3 class="subsection-title" id="subsection-${category.id}-${sub.id}">${sub.title}</h3>
          <p class="subsection-desc">${sub.description}</p>
          <div class="services-grid">
            ${items.map(renderCard).join("")}
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <section class="catalog-section" aria-labelledby="section-${category.id}">
      <div class="section-head">
        <span class="section-icon ${style.section}" aria-hidden="true">${category.icon}</span>
        <div>
          <h2 class="section-title" id="section-${category.id}">${category.title}</h2>
          <p class="section-desc">${category.description}</p>
        </div>
      </div>
      ${subsectionsHtml}
    </section>
  `;
}

function renderSection(category, services) {
  const subsections = SUBSECTIONS_BY_CATEGORY[category.id];
  if (subsections) {
    return renderSubsectionSection(category, services, subsections);
  }

  const style = CATEGORY_STYLES[category.id] || CATEGORY_STYLES.utilitarios;

  return `
    <section class="catalog-section" aria-labelledby="section-${category.id}">
      <div class="section-head">
        <span class="section-icon ${style.section}" aria-hidden="true">${category.icon}</span>
        <div>
          <h2 class="section-title" id="section-${category.id}">${category.title}</h2>
          <p class="section-desc">${category.description}</p>
        </div>
      </div>
      <div class="services-grid">
        ${services.map(renderCard).join("")}
      </div>
    </section>
  `;
}

function render() {
  const query = normalize(searchEl.value.trim());
  const filtered = SERVICES.filter((service) => matchesQuery(service, query));

  if (!filtered.length) {
    catalogEl.innerHTML = '<p class="empty">Nenhum serviço encontrado.</p>';
  } else {
    catalogEl.innerHTML = CATEGORIES
      .map((category) => {
        const items = filtered.filter((s) => s.category === category.id);
        if (!items.length) return "";
        return renderSection(category, items);
      })
      .join("");
  }

  const total = SERVICES.length;
  const shown = filtered.length;
  countEl.textContent = query
    ? `${shown} de ${total} serviços`
    : `${total} serviços · ${CATEGORIES.length} categorias`;
}

searchEl.addEventListener("input", render);
render();
