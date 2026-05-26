// ─────────────────────────────────────────────
//  data.js  —  ALL portfolio content lives here.
//  Edit this file to update anything on the site.
// ─────────────────────────────────────────────

export const profile = {
  name:      "Amal Kannan",
  role:      "Biomedical Researcher",
  location:  "Chennai, India",
  email:     "amal.kannan.sadagopan@gmail.com",
  phone:     "+91 98842 97721",
  linkedin:  "https://www.linkedin.com/in/amal-kannan-464393259/",
  avatar:    "./amal-portrait.jpeg",
  labPhoto:  "./amal-lab.jpg.jpeg",

  tagline: `I study the genome — how genetic variation shapes disease risk,
    and how we can exploit biological networks to find better treatments.
    Currently pursuing a <strong>direct PhD</strong> in molecular and clinical
    genomics, with a long-term focus on <strong>precision diagnostics</strong>.`,

  about: [
    `I'm a Biomedical Sciences graduate from <strong>Sri Ramachandra Institute
    of Higher Education and Research (SRIHER)</strong>, Chennai. My research sits
    at the junction of <strong>molecular genetics, epidemiology, and computational
    biology</strong> — I want to understand how sequence-level variation translates
    into phenotypic disease, and how we can intervene early.`,

    `My thesis work involves designing and executing a <strong>case-control genetic
    association study</strong> in autism spectrum disorder, running statistical models
    from raw genotyping data all the way to odds ratios and gene-environment
    interactions. In parallel, I've spent time in <strong>in-silico drug
    discovery</strong> — identifying hub genes in lung cancer and docking
    phytocompounds as potential inhibitors.`,

    `Outside the lab, I've led large teams — as a <strong>Petty Officer Cadet</strong>
    in the Navy Wing of the NCC and as <strong>Cultural Secretary</strong> managing a
    ₹10.2L budget across 300+ students. I believe good science and good leadership
    aren't that different.`,

    `I speak Tamil and Telugu natively, and work in English and Hindi professionally.
    I'm based in Chennai and actively looking for PhD programmes in molecular and
    clinical genomics.`,
  ],
};

export const stats = [
  { num: "8.66", label: "CGPA · B.Sc (Hons)\nBiomedical Sciences" },
  { num: "#1",   label: "of 289 proposals — Chancellor's Fellowship" },
  { num: "3",    label: "Research projects across genetics, genomics & drug discovery" },
  { num: "2",    label: "Manuscripts in preparation · 2026" },
];

export const sideCards = [
  {
    label: "Education",
    value: "B.Sc (Hons) Biomedical Sciences",
    desc:  "SRIHER, Chennai · CGPA 8.66 / 10 · 2026",
  },
  {
    label: "Fellowship",
    value: "Chancellor's Summer Research Fellowship",
    badge: "Top 1 of 289",
    desc:  "INR 10,000 grant · In-silico lung cancer research",
  },
  {
    label: "Looking for",
    value: "Direct PhD · Molecular & Clinical Genomics",
    desc:  "Translational R&D · Precision diagnostics",
  },
];

export const projects = [
  {
    type:   "genetics",
    label:  "Molecular Genetics",
    period: "Dec 2025 – Apr 2026",
    title:  "XRCC1 Polymorphisms and Autism Spectrum Disorder Risk",
    inst:   "Department of Human Genetics, SRIHER · Guide: Dr. Teena Koshy",
    image:  "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1000&q=80&fit=crop",
    imgBg:  "#0d1520",
    status: "Manuscript in prep",
    desc: `Designed and executed a <strong>case-control genetic association study</strong>
      (n = 200; 100 ASD cases, 100 sex-matched controls) investigating two XRCC1 SNPs —
      rs25487 (Arg399Gln) and rs1799782 (Arg194Trp) — in autism susceptibility.
      Performed PCR-RFLP genotyping, confirmed Hardy-Weinberg equilibrium, and evaluated
      association under five inheritance models.`,
    finding: `Key finding: <em>rs25487 T allele showed a significant inverse association with ASD</em>
      under the additive model (OR = 0.5, 95% CI: 0.33–0.88, p = 0.01). Both SNPs showed a striking
      interaction with maternal thyroid disorders (OR = 0.06, p &lt; 0.0001).`,
    tags: ["PCR-RFLP","SNP Genotyping","Case-Control Design","Odds Ratio","HWE Analysis","Gene-Environment Interaction"],
  },
  {
    type:   "insilico",
    label:  "In-Silico / Computational",
    period: "Jul 2025 – Jun 2026",
    title:  "Phytocompound Candidates Targeting Hub-Genes in Lung Cancer",
    inst:   "Department of Biomedical Sciences, SRIHER · Guide: Dr. Udhaya Lavinya B. · Chancellor's Fellowship",
    image:  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1000&q=80&fit=crop",
    imgBg:  "#0d1a10",
    status: "Manuscript in prep",
    desc: `Integrated transcriptomic datasets from the <strong>Gene Expression Omnibus (GEO)</strong>
      to identify hub genes in lung cancer progression, then built protein-protein interaction (PPI)
      networks using Cytoscape. Retrieved 3D structures from PDB, performed energy minimisation via
      SWISS-PDB Viewer, and predicted active binding sites with CASTp. Screened phytocompounds from
      PubChem, assessed toxicity with ProTox-II and mcule, and ran
      <strong>molecular docking simulations in AutoDock Vina</strong>, visualising hits in PyMOL.`,
    finding: `IEC-approved (SRIHER, July 2025). Funded by the <em>Chancellor's Summer Research
      Fellowship (INR 10,000)</em>. Manuscript targeting 2026 submission.`,
    tags: ["AutoDock Vina","Cytoscape","PyMOL","Network Pharmacology","SWISS-PDB Viewer","ProTox-II","GEO"],
  },
  {
    type:   "cell",
    label:  "Cell & Molecular Biology",
    period: "May 2024",
    title:  "IDH Expression in HEK293 Cells — CSIR-IICT",
    inst:   "Applied Biology Lab, CSIR-IICT, Hyderabad",
    image:  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1000&q=80&fit=crop",
    imgBg:  "#1a150d",
    status: "Completed",
    desc: `Cultured HEK293 cells and performed <strong>transfection</strong> to assess IDH expression
      via western blotting. Worked across molecular cloning workflows in an applied cell biology setting —
      first intensive exposure to bench science in a national research institute.`,
    finding: null,
    tags: ["Cell Culture","Transfection","Western Blotting","Molecular Cloning"],
  },
];

export const publications = [
  {
    icon:   "🧫",
    status: "presented",
    label:  "Conference Poster · Feb 2025",
    title:  '"Harnessing Arabinoxylan Coated Probiotics to Modulate Gut Microbiota and Manage Type 2 Diabetes"',
    venue:  "International Conference on Microbial Innovations · D.G. Vaishnav College, Chennai",
  },
  {
    icon:   "🧬",
    status: "in-prep",
    label:  "Manuscript in Preparation · 2026",
    title:  "XRCC1 Gene Polymorphisms and Autism Spectrum Disorder Risk — A Case-Control Study (n = 200)",
    venue:  "Target submission 2026 · Department of Human Genetics, SRIHER",
  },
  {
    icon:   "💊",
    status: "in-prep",
    label:  "Manuscript in Preparation · 2026",
    title:  "In-Silico Identification of Phytocompound Candidates Targeting Hub-Genes in Lung Cancer — Network Pharmacology and Molecular Docking Study",
    venue:  "Target submission 2026 · Department of Biomedical Sciences, SRIHER",
  },
];

export const skills = [
  {
    icon:  "🧪",
    title: "Wet Lab",
    items: ["PCR-RFLP & Genotyping","Cell Culture (HEK293)","Transfection","Western Blotting","Molecular Cloning","Gel Electrophoresis"],
  },
  {
    icon:  "💻",
    title: "Computational",
    items: ["AutoDock Vina","Cytoscape","PyMOL","SWISS-PDB Viewer","CASTp · ProTox-II","GEPIA · GEO datasets"],
  },
  {
    icon:  "📊",
    title: "Study Design & Stats",
    items: ["Case-Control Design","Hardy-Weinberg Analysis","Odds Ratio & 95% CI","Chi-Square Tests","Epidemiological Risk Factors"],
  },
];
