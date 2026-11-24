export const COMPANY = {
    name: "HyperConnect",
    tagline: "Energia inteligente, futuro sustentável",
    whatsapp: "5511999999999", // Altere para o WhatsApp real
    email: "contato@hyperconnect.com.br",
};

export type Service = {
    id: string;
    title: string;
    description: string;
    details: string[];
};

export const SERVICES: Service[] = [
    {
        id: "instalacao",
        title: "Instalação",
        description: "Projeto e instalação completa de sistemas de energia solar.",
        details: ["Análise de consumo", "Kit homologado", "Instalação certificada"],
    },
    {
        id: "limpeza",
        title: "Limpeza",
        description: "Limpeza técnica dos módulos para manter a geração no máximo.",
        details: ["Produtos adequados", "Sem risco aos painéis", "Planos periódicos"],
    },
    {
        id: "inversor",
        title: "Configurar Inversor",
        description: "Configuração, parametrização e monitoramento do inversor.",
        details: ["Ajuste de parâmetros", "Conexão Wi-Fi", "Monitoramento remoto"],
    },
    {
        id: "carregador",
        title: "Carregador Carro Elétrico",
        description: "Instalação de wallbox e pontos de recarga para veículos elétricos.",
        details: ["Dimensionamento elétrico", "Wallbox homologado", "Proteções dedicadas"],
    },
    {
        id: "automacao",
        title: "Automação de Painel de Comando",
        description: "Montagem e automação de painéis de comando elétricos.",
        details: ["Projeto elétrico", "CLP e comandos", "Testes e comissionamento"],
    },
];

export function buildWhatsappUrl(serviceId?: string) {
    const service = SERVICES.find((s) => s.id === serviceId);
    const texto = service
        ? `Olá, ${COMPANY.name}! Quero um orçamento para o serviço: ${service.title}.`
        : `Olá, ${COMPANY.name}! Quero falar sobre um orçamento de energia solar.`;

    return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(texto)}`;
}