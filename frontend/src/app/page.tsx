// // import Image from "next/image";
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col items-center p-24">
//       <h1 className="text-4xl font-bold">Welcome to the TCM Frontend</h1>
//         <Link href="/auth">
//           <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             Admin Login
//           </button>
//         </Link>
//     </div>
//   );
// }
'use client';

import { useState, FormEvent } from 'react';
import Image from "next/image";
import { Lifecycle, Month } from '@/lib/types';

// Proxy API bases
const PN_API = '/api/proxy/api/v1/plant-nomenclatures';
const TAX_API = '/api/proxy/api/v1/plant-taxonomies';
const SYN_API = '/api/proxy/api/v1/plant-synonyms';

// Backend shapes (aligned with your Prisma models)
type PlantNomenclature = {
  internalId: number;
  plantScientificName: string;
  plantCommonName: string[];
  plantPinyin?: string | null;
  plantChineseName?: string | null;
  taxonomyId: number;
  links: string[];
};
type PlantTaxonomy = { id: number; family: string | null };
type PlantSynonym = { id: number; name: string | null; plantId: number };

type PlantResult = {
  // Plant nomenclature
  id: number;
  acceptedScientificName: string;
  synonyms: string[];
  commonNames: string[];
  pinyin?: string | null;
  characters?: string | null;
  imageUrl?: string | null;

  //fields for botanical background
  taxonomy?: {
    family?: string | null;
    order?: string | null;
    vascular?: boolean | null; // true = Vascular, false = Non-vascular
  },

  // Morphology background
  morphology?: {
    description?: string | null;
    isTerrestrial?: boolean | null;      // true = Terrestrial, false = Aquatic
    growthHabit?: string | null;
    isDeciduous?: boolean | null;        // true = Deciduous, false = Evergreen
    reproductiveSystem?: string | null;
    // images?: string[];                   // 3 images: Herbarium, Wild, Garden ?? to be added to Schema
    lifeCycle?: Lifecycle | null;            // Annual, Biennial, Perennial ?? to be added to Schema
    floweringPeriod?: Month[] | null;
    fruitingPeriod?: Month[] | null;
  },

  // Plant Ecology & Distribution
  ecologyDistribution?: {
    habitat?: string | null;
    plantOrigin?: string | null;
    globalRange?: string | null;
    chinaRange?: string | null;
    endemic?: string | null;
  },

  // Conservation
  conservation?: {
    globalConservationStatus?: string | null;
    chinaConservationStatus?: string | null;
    protectedStatus?: string | null;
    invasiveStatus?: string | null;
    invasiveRange?: string | null;
  },

  // Herbal Drug Background
  herbalDrug?: {
    pharmaceuticalName?: string | null;
    herbalDrugPinyin?: string | null;
    plantPartUsed?: string | null;
    officialStatus?: boolean | null;
    substituteSpecies?: string | null;
    description?: string | null;
    herbalDrugImage?: string | null;
    harvestingTime?: Month[] | null;
    primaryProcessing?: string | null;
    secondaryProcessing?: string | null;
  },

  // Sourcing Background
  sourcing?: {
    cultivationStatus?: boolean | null;
    cultivationRegions?: string | null;
    wildHarvestingRegions?: string | null;
    harvestingPractice?: string[] | null;
    daodiStatus?: boolean | null;
    daodiRegions?: string | null;
    productionRegions?: string | null;
  },

  // Medicinal Properties
  medicinalProperties?: {
    taste?: string[] | null;
    energyFlow?: string[] | null;
    meridians?: string[] | null;
    actions?: string | null;
    pharmacologicalProperties?: string[] | null;
    indications?: string[] | null;
    toxicity?: string | null;
    secondaryMetabolites?: string | null;
  },

  // Ethnobotany
  ethnobotany?: {
    folkMedicinalUses?: string | null;
    otherCulturalUses?: string[] | null;
  },
};

// FOR MOCKING PURPOSES:
const MOCK_RESULTS: PlantResult[] = [
  {
    id: 1,
    acceptedScientificName: 'Aconitum carmichaelii',
    synonyms: ['Aconitum chinense', 'Aconitum napellus var. carmichaelii'],
    commonNames: ['Monkshood', 'Fu Zi'],
    pinyin: 'fuzi',
    characters: '附子',
    taxonomy: {
      family: 'Ranunculaceae',
      order: 'Ranunculales',
      vascular: true,
    },
    morphology: {
      description: 'Tall perennial herb with purple-blue flowers.',
      isTerrestrial: true,
      growthHabit: 'Upright herb',
      isDeciduous: true,
      reproductiveSystem: 'Zygomorphic flowers with spurred sepal.',
      lifeCycle: 'PERENNIAL',
      floweringPeriod: ['JUNE', 'JULY'],
      fruitingPeriod: ['AUGUST', 'SEPTEMBER'],
    },
    ecologyDistribution: {
      habitat: 'Mountain slopes, meadows, forest margins',
      plantOrigin: 'China, Korea, Japan',
      globalRange: 'East Asia, naturalized in parts of Europe',
      chinaRange: 'Sichuan, Yunnan, Shaanxi, Gansu',
      endemic: null,
    },
    conservation: {
      globalConservationStatus: 'LEAST_CONCERN',
      chinaConservationStatus: 'Not threatened',
      protectedStatus: null,
      invasiveStatus: 'NON_INVASIVE',
      invasiveRange: null,
    },
    herbalDrug: {
      pharmaceuticalName: 'Fuzi',
      herbalDrugPinyin: 'fuzi',
      plantPartUsed: 'Lateral root (processed)',
      officialStatus: true,
      substituteSpecies: null,
      description: 'Dark brown, hard, cone-shaped processed root',
      herbalDrugImage: null,
      harvestingTime: ['JUNE', 'JULY', 'AUGUST'],
      primaryProcessing: 'Cleaned, sliced',
      secondaryProcessing: 'Steamed, dried, salt-processed',
    },
    sourcing: {
      cultivationStatus: true,
      cultivationRegions: 'Sichuan, Shaanxi',
      wildHarvestingRegions: 'Limited wild harvesting',
      harvestingPractice: ['CULTIVATED'],
      daodiStatus: true,
      daodiRegions: 'Sichuan (Jiangyou)',
      productionRegions: 'Sichuan, Shaanxi, Hubei',
    },
    medicinalProperties: {
      taste: ['ACRID', 'SWEET'],
      energyFlow: ['HOT'],
      meridians: ['HEART', 'KIDNEY', 'SPLEEN'],
      actions: 'Restores yang and rescues from collapse; supplements fire and assists yang; disperses cold and alleviates pain',
      pharmacologicalProperties: ['Cardiotonic', 'Analgesic', 'Anti-inflammatory'],
      indications: ['Yang deficiency', 'Cold limbs', 'Weak pulse', 'Pain conditions'],
      toxicity: 'HIGHLY TOXIC if not properly processed. Contains aconitine alkaloids.',
      secondaryMetabolites: 'Aconitine, mesaconitine, hypaconitine',
    },
    ethnobotany: {
      folkMedicinalUses: 'Used in traditional formulas for cold-induced pain and yang deficiency',
      otherCulturalUses: ['Historical use in arrow poisons'],
    },
  },
  {
    id: 2,
    acceptedScientificName: 'Panax ginseng',
    synonyms: ['Panax schinseng Nees'],
    commonNames: ['Asian ginseng', 'Ginseng'],
    pinyin: 'renshen',
    characters: '人参',
    imageUrl:
      'https://www.news-medical.net/image-handler/picture/2019/5/shutterstock_734716603.jpg',
    taxonomy: {
      family: 'Araliaceae',
      order: 'Apiales',
      vascular: true,
    },
    morphology: {
      description: 'Slow-growing herbaceous perennial with fleshy roots.',
      isTerrestrial: true,
      growthHabit: 'Herbaceous perennial',
      isDeciduous: true,
      reproductiveSystem:
        'Small umbels of white flowers followed by red berries.',
      lifeCycle: 'PERENNIAL',
      floweringPeriod: ['MAY', 'JUNE'],
      fruitingPeriod: ['SEPTEMBER'],
    },
    ecologyDistribution: {
      habitat: 'Shaded forest floors, mountain valleys',
      plantOrigin: 'Northeast China, Korea',
      globalRange: 'Cultivated worldwide, native to East Asia',
      chinaRange: 'Jilin, Liaoning, Heilongjiang',
      endemic: null,
    },
    conservation: {
      globalConservationStatus: 'ENDANGERED',
      chinaConservationStatus: 'Endangered in wild populations',
      protectedStatus: 'CITES Appendix II',
      invasiveStatus: 'NON_INVASIVE',
      invasiveRange: null,
    },
    herbalDrug: {
      pharmaceuticalName: 'Renshen',
      herbalDrugPinyin: 'renshen',
      plantPartUsed: 'Root',
      officialStatus: true,
      substituteSpecies: 'Panax quinquefolius (American ginseng)',
      description: 'Fleshy, spindle-shaped root, often human-shaped',
      herbalDrugImage: null,
      harvestingTime: ['SEPTEMBER', 'OCTOBER'],
      primaryProcessing: 'Washed, dried (white ginseng) or steamed and dried (red ginseng)',
      secondaryProcessing: 'Sliced, powdered, or extracted',
    },
    sourcing: {
      cultivationStatus: true,
      cultivationRegions: 'Jilin, Liaoning, Heilongjiang',
      wildHarvestingRegions: 'Very limited, mostly protected',
      harvestingPractice: ['CULTIVATED'],
      daodiStatus: true,
      daodiRegions: 'Jilin Province (Changbai Mountain region)',
      productionRegions: 'Jilin, Liaoning, Heilongjiang, Korea',
    },
    medicinalProperties: {
      taste: ['SWEET', 'BITTER'],
      energyFlow: ['SLIGHTLY_WARM'],
      meridians: ['SPLEEN', 'LUNG', 'HEART'],
      actions: 'Powerfully tonifies yuan qi; tonifies Spleen and Lung qi; generates fluids; calms the spirit',
      pharmacologicalProperties: ['Adaptogenic', 'Immunomodulatory', 'Neuroprotective', 'Antioxidant'],
      indications: ['Qi deficiency', 'Fatigue', 'Weak immune system', 'Stress', 'Cognitive decline'],
      toxicity: 'Generally safe when used appropriately. May cause insomnia or hypertension in some individuals.',
      secondaryMetabolites: 'Ginsenosides (Rb1, Rg1, Rg3, Rd, Re, Rf)',
    },
    ethnobotany: {
      folkMedicinalUses: 'Revered as the "King of Herbs" in traditional Chinese medicine for vitality and longevity',
      otherCulturalUses: ['Used in ceremonies', 'Given as precious gifts'],
    },
  },
  {
    id: 3,
    acceptedScientificName: 'Quercus robur',
    synonyms: ['Quercus pedunculata'],
    commonNames: ['English oak', 'Pedunculate oak'],
    pinyin: null,
    characters: '栎树',
    taxonomy: {
      family: 'Fagaceae',
      order: 'Fagales',
      vascular: true,
    },
    morphology: {
      description: 'Large deciduous tree up to 40m tall.',
      isTerrestrial: true,
      growthHabit: 'Tree',
      isDeciduous: true,
      reproductiveSystem:
        'Monoecious; male catkins, female flowers in small clusters.',
      lifeCycle: 'PERENNIAL',
      floweringPeriod: ['APRIL', 'MAY'],
      fruitingPeriod: ['SEPTEMBER', 'OCTOBER'],
    },
    ecologyDistribution: {
      habitat: 'Mixed deciduous forests, parklands',
      plantOrigin: 'Europe',
      globalRange: 'Native to Europe, naturalized in parts of North America',
      chinaRange: 'Not native to China',
      endemic: null,
    },
    conservation: {
      globalConservationStatus: 'LEAST_CONCERN',
      chinaConservationStatus: null,
      protectedStatus: null,
      invasiveStatus: 'NON_INVASIVE',
      invasiveRange: null,
    },
    herbalDrug: {
      pharmaceuticalName: null,
      herbalDrugPinyin: null,
      plantPartUsed: 'Bark',
      officialStatus: false,
      substituteSpecies: null,
      description: 'Rough, fissured bark with high tannin content',
      herbalDrugImage: null,
      harvestingTime: ['MARCH', 'APRIL', 'MAY'],
      primaryProcessing: 'Bark stripped and dried',
      secondaryProcessing: 'Ground or extracted',
    },
    sourcing: {
      cultivationStatus: false,
      cultivationRegions: null,
      wildHarvestingRegions: 'Europe',
      harvestingPractice: ['WILD_HARVESTED'],
      daodiStatus: false,
      daodiRegions: null,
      productionRegions: null,
    },
    medicinalProperties: {
      taste: ['BITTER', 'ASTRINGENT'],
      energyFlow: ['COOL'],
      meridians: [],
      actions: 'Astringent, anti-inflammatory (primarily used in European herbalism)',
      pharmacologicalProperties: ['Astringent', 'Anti-inflammatory', 'Antimicrobial'],
      indications: ['Diarrhea', 'Skin conditions', 'Inflammation'],
      toxicity: 'Generally safe. High doses may cause gastrointestinal upset.',
      secondaryMetabolites: 'Tannins (ellagitannins), quercetin',
    },
    ethnobotany: {
      folkMedicinalUses: 'Bark used in European folk medicine for treating diarrhea and wounds',
      otherCulturalUses: ['Sacred tree in Celtic tradition', 'Timber for construction and shipbuilding'],
    },
  },
];



export default function PlantSearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PlantResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedMedicinalBg, setExpandedMedicinalBg] = useState<Record<number, boolean>>({});
  // const [err, setErr] = useState<string | null>(null);
  
  const toggleMedicinalBg = (plantId: number) => {
    setExpandedMedicinalBg(prev => ({
      ...prev,
      [plantId]: !prev[plantId]
    }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Pretend we searched the backend — just use dummy data.
    // (Optionally, "filter" the mock results by the query)
    const q = query.trim().toLowerCase();
    const filtered = q
      ? MOCK_RESULTS.filter((p) =>
        [
          p.acceptedScientificName,
          ...p.commonNames,
          ...(p.synonyms || []),
          p.pinyin || '',
          p.characters || '',
          p.imageUrl || '',
        ]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
      : MOCK_RESULTS;

    setResults(filtered);
    setLoading(false);
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-center text-xl font-semibold tracking-wide mb-8">TCM Database</h1>

        <section className="mb-8">
          <p className="text-lg font-medium mb-2">Search by:</p>
          <ul className="space-y-2 text-base leading-relaxed">
            <li>- Plant name (scientific, common, character, pinyin)</li>
            <li>- Herbal drug name (pharmaceutical)</li>
            <li>- Family</li>
            <li>- Growth habit</li>
            <li>- Use</li>
            <li>- Institutional availability</li>
          </ul>
        </section>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-700 p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-12">
              <label htmlFor="query" className="block text-sm font-medium mb-2">
                Search Bar
              </label>
              <input
                id="query"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="...search here"
                className="w-full rounded-md ring-1 ring-inset ring-neutral-700 px-3 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-teal-500 px-4 py-2 font-medium text-neutral-900 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Search
            </button>
          </div>
        </form>

        {/* Results */}
        <div className="mt-6">
          {loading && <p>Searching…</p>}
          {!loading && results.length === 0 && <p className="text-neutral-500">No results yet.</p>}

          <div className="space-y-4">
            {results.map((p) => (
              <div key={p.id}>
                <article key={p.id} className="rounded-xl border border-neutral-300">
                  {/* Plant Nomenclature */}
                  <h2 className="text-lg font-semibold p-4 text-center border-b border-neutral-300">
                    Plant Nomenclature
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                    <Cell label="Accepted Scientific Name" value={p.acceptedScientificName} />
                    <Cell label="Botanical Synonyms" value={p.synonyms.length ? p.synonyms.join(', ') : '—'} />
                    <Cell label="Common Name" value={p.commonNames.length ? p.commonNames.join(', ') : '—'} />
                    <Cell label="Pin Yin" value={p.pinyin || '—'} />
                    <Cell label="Characters" value={p.characters || '—'} />
                    <div className="p-4 flex items-center justify-center">
                      <Image
                        src={p.imageUrl || 'https://via.placeholder.com/150'}
                        alt={p.acceptedScientificName}
                        width={150}
                        height={150}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </article>

                <hr className="mt-6 border-t border-neutral-800" />
                {/* Botanical Background */}
                <h2 className="underline text-lg font-semibold p-4 text-center">
                  Botanical Background:
                </h2>
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h3 className="text-lg p-4 font-bold">Taxonomic Classification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Family" value={p.taxonomy?.family || '—'} />
                    <Cell label="Order" value={p.taxonomy?.order || '—'} />
                    <Cell
                      label="Vascular / Non-Vascular?"
                      value={p.taxonomy?.vascular === null || p.taxonomy?.vascular === undefined ? '—' : p.taxonomy?.vascular ? 'Vascular' : 'Non-vascular'}
                    />
                  </div>
                  <div className="p-4 text-neutral-500 italic">(Diagram showing phylogenetic relationship between species in taxonomic tree ??)</div>
                </article>

                {/* Morphology */}
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Morphology
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Description" value={p.morphology?.description || '—'} />
                    <Cell label="Terrestrial / Aquatic" value={p.morphology?.isTerrestrial === true ? "Terrestrial" : p.morphology?.isTerrestrial === false ? "Aquatic" : "—"} />
                    <Cell label="Growth Habit" value={p.morphology?.growthHabit || '—'} />
                    <Cell label="Deciduous / Evergreen" value={p.morphology?.isDeciduous === true ? "Deciduous" : p.morphology?.isDeciduous === false ? "Evergreen" : "—"} />
                    <Cell label="Reproductive Morphology" value={p.morphology?.reproductiveSystem || '—'} />
                  </div>
                  <div className="p-4 text-neutral-500 italic">(3 images: Herbarium specimen, specimen growing in the wild, specimen in botanical garden ??)</div>
                </article>
                {/* Lifecycle */}
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Lifecycle
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Annual/ Perennial/ Biennial" value={p.morphology?.lifeCycle || '—'} />
                  </div>
                </article>
                {/* Phenology */}
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Phenology
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Flowering Period" value={p.morphology?.floweringPeriod && p.morphology?.floweringPeriod.length > 0 ? p.morphology?.floweringPeriod.join(', ') : '—'} />
                    <Cell label="Fruiting Period" value={p.morphology?.fruitingPeriod && p.morphology?.fruitingPeriod.length > 0 ? p.morphology?.fruitingPeriod.join(', ') : '—'} />
                  </div>
                </article>

                {/* Plant Ecology */}
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Plant Ecology
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Habitat" value={p.ecologyDistribution?.habitat || '—'} />
                  </div>
                </article>

                {/* Geography */}
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Geography
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Plant Origin" value={p.ecologyDistribution?.plantOrigin || '—'} />
                    <Cell label="Range and Distribution" value={p.ecologyDistribution?.globalRange || '—'} />
                    <Cell label="Range in China" value={p.ecologyDistribution?.chinaRange || '—'} />
                  </div>
                </article>

                {/* Conservation Status */}
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Conservation Status
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Worldwide Status" value={p.conservation?.globalConservationStatus || '—'} />
                    <Cell label="Regional Status in China" value={p.conservation?.chinaConservationStatus || '—'} />
                    <Cell label="Protected Status" value={p.conservation?.protectedStatus || '—'} />
                  </div>
                </article>

                {/* Invasiveness */}
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Invasiveness
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Invasive Status" value={p.conservation?.invasiveStatus || '—'} />
                    <Cell label="Invasive Range" value={p.conservation?.invasiveRange || '—'} />
                  </div>
                </article>

                <hr className="my-6 border-t border-neutral-800" />

                {/* Medicinal Material Overview */}
                <article className="rounded-xl border border-neutral-300 mt-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Medicinal Material Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Pharmaceutical Name" value={p.herbalDrug?.pharmaceuticalName || '—'} />
                    <Cell label="Plant Part Used" value={p.herbalDrug?.plantPartUsed || '—'} />
                    <Cell label="Pharmacopoeia/ Substitute Species" value={p.herbalDrug?.officialStatus === true ? 'Pharmacopoeia' : p.herbalDrug?.officialStatus === false ? 'Substitute Species' : '—'} />
                    <Cell label="Substitute Species" value={p.herbalDrug?.substituteSpecies || '—'} />
                    <Cell label="Description (Drug Morphology)" value={p.herbalDrug?.description || '—'} />
                  </div>
                  <div className="flex justify-center p-4">
                    <Image
                      src={p.imageUrl || "/placeholder.jpg"}
                      alt="Herbal drug"
                      width={320}
                      height={240}
                      className="rounded shadow"
                    />
                  </div>
                </article>

                <hr className="my-6 border-t border-neutral-800" />

                {/* Medicinal Background Section - Expandable */}
                <div className="mt-4">
                  <button
                    onClick={() => toggleMedicinalBg(p.id)}
                    className="w-full flex items-center justify-center gap-3 p-4 text-lg font-semibold hover:bg-neutral-100 rounded transition-colors"
                  >
                    <span className="underline">Medicinal Background:</span>
                    <span className="text-5xl font-bold text-teal-600">
                      {expandedMedicinalBg[p.id] ? '−' : '+'}
                    </span>
                  </button>

                  {expandedMedicinalBg[p.id] && (
                    <div className="space-y-4 mt-4">
                      {/* Sourcing Background */}
                      <article className="rounded-xl border border-neutral-300">
                        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                          Sourcing Background
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                          <Cell label="Is the Plant Under Cultivation?" value={p.sourcing?.cultivationStatus === true ? 'Yes' : p.sourcing?.cultivationStatus === false ? 'No' : '—'} />
                          <Cell label="Cultivation Regions" value={p.sourcing?.cultivationRegions || '—'} />
                          <Cell label="Wild-Harvesting Regions" value={p.sourcing?.wildHarvestingRegions || '—'} />
                          <Cell label="Acquisition" value={p.sourcing?.harvestingPractice?.join(', ') || '—'} />
                        </div>
                      </article>

                      {/* Daodi */}
                      <article className="rounded-xl border border-neutral-300">
                        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                          Daodi
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                          <Cell label="Daodi Status" value={p.sourcing?.daodiStatus === true ? 'Yes' : p.sourcing?.daodiStatus === false ? 'No' : '—'} />
                          <Cell label="Daodi Regions" value={p.sourcing?.daodiRegions || '—'} />
                        </div>
                      </article>

                      {/* Medicinal Properties */}
                      <article className="rounded-xl border border-neutral-300">
                        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                          Medicinal Properties
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                          <Cell label="Taste" value={p.medicinalProperties?.taste?.join(', ') || '—'} />
                          <Cell label="Energetic Character" value={p.medicinalProperties?.energyFlow?.join(', ') || '—'} />
                          <Cell label="Meridian" value={p.medicinalProperties?.meridians?.join(', ') || '—'} />
                          <Cell label="Functions" value={p.medicinalProperties?.actions || '—'} />
                          <Cell label="Pharmacological Properties" value={p.medicinalProperties?.pharmacologicalProperties?.join(', ') || '—'} />
                          <Cell label="Indications" value={p.medicinalProperties?.indications?.join(', ') || '—'} />
                          <Cell label="Safety" value="—" />
                          <Cell label="Toxicity" value={p.medicinalProperties?.toxicity || '—'} />
                        </div>
                      </article>

                      {/* Biochemistry */}
                      <article className="rounded-xl border border-neutral-300">
                        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                          Biochemistry
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                          <Cell label="Secondary Metabolites" value={p.medicinalProperties?.secondaryMetabolites || '—'} />
                        </div>
                      </article>

                      <hr className="my-6 border-t border-neutral-800" />

                      {/* Ethnobotany and Traditional Uses */}
                      <article className="rounded-xl border border-neutral-300">
                        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                          Ethnobotany and Traditional Uses
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                          <Cell label="Folk Medicinal Uses" value={p.ethnobotany?.folkMedicinalUses || '—'} />
                          <Cell label="Traditional Uses" value={p.ethnobotany?.otherCulturalUses?.join(', ') || '—'} />
                        </div>
                      </article>

                      {/* Cultivation Background */}
                      <article className="rounded-xl border border-neutral-300 mt-4">
                        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                          Cultivation Background
                        </h2>
                      </article>

                      {/* Production Overview */}
                      <article className="rounded-xl border border-neutral-300 mt-4">
                        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                          Production Overview
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                          <Cell label="USDA Hardiness Zones" value="—" />
                          <Cell label="Propagation Requirements" value="—" />
                          <Cell label="Environmental Conditions" value="—" />
                          <Cell label="Field Production" value="—" />
                          <Cell label="Pests and Diseases" value="—" />
                          <Cell label="Harvest and Yield" value="—" />
                          <Cell label="Field Cultivation Trials" value="—" />
                        </div>
                      </article>

                      {/* Processing and Pao Zhi */}
                      <article className="rounded-xl border border-neutral-300 mt-4 mb-4">
                        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                          Processing and Pao Zhi
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                          <Cell label="Primary Processing" value={p.herbalDrug?.primaryProcessing || '—'} />
                          <Cell label="Secondary Processing" value={p.herbalDrug?.secondaryProcessing || '—'} />
                        </div>
                      </article>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// async function handleSubmit(e: FormEvent) {
//   e.preventDefault();
//   const q = query.trim();
//   if (!q) {
//     setResults([]);
//     return;
//   }

//   setLoading(true);
//   setErr(null);
//   setResults([]);

//   const qlc = q.toLowerCase();

//   // helpers
//   const fetchSynonymsFor = async (plantId: number): Promise<string[]> => {
//     try {
//       const r = await fetch(`${SYN_API}/plant/${plantId}`, { cache: 'no-store' });
//       if (!r.ok) return [];
//       const arr: PlantSynonym[] = await r.json();
//       return arr.map(s => s.name).filter((x): x is string => !!x);
//     } catch {
//       return [];
//     }
//   };

//   try {
//     // 1) Try exact scientific-name hit (fast path)
//     let exact: PlantNomenclature[] = [];
//     try {
//       const r = await fetch(`${PN_API}/scientific-name/${encodeURIComponent(q)}`, { cache: 'no-store' });
//       if (r.ok) {
//         const one: PlantNomenclature = await r.json();
//         if (one) exact = [one];
//       }
//     } catch {
//       /* ignore */
//     }

//     // 2) Fetch all plant nomenclatures for "contains" matching
//     const allRes = await fetch(PN_API, { cache: 'no-store' });
//     const allJson = await allRes.json();
//     const allPlants: PlantNomenclature[] = allJson?.['plant-nomenclatures'] ?? [];

//     // Name-based contains match: scientific, common[], chinese characters, pinyin
//     const nameMatches = allPlants.filter((p) =>
//       p.plantScientificName.toLowerCase().includes(qlc) ||
//       (p.plantCommonName ?? []).some(c => c.toLowerCase().includes(qlc)) ||
//       (p.plantChineseName ?? '').toLowerCase().includes(qlc) ||
//       (p.plantPinyin ?? '').toLowerCase().includes(qlc)
//     );

//     // 3) Family match: filter taxonomies by family contains, then join on taxonomyId
//     const taxRes = await fetch(TAX_API, { cache: 'no-store' });
//     const taxonomies: PlantTaxonomy[] = await taxRes.json();
//     const matchedFamilyIds = new Set(
//       taxonomies
//         .filter(t => (t.family ?? '').toLowerCase().includes(qlc))
//         .map(t => t.id)
//     );
//     const familyMatches = allPlants.filter(p => matchedFamilyIds.has(p.taxonomyId));

//     // 4) Union & de-duplicate by internalId
//     const unique = new Map<number, PlantNomenclature>();
//     [...exact, ...nameMatches, ...familyMatches].forEach(p => unique.set(p.internalId, p));
//     const selected = Array.from(unique.values());

//     // 5) Enrich with synonyms (limit to 25 to keep it snappy)
//     const limited = selected.slice(0, 25);
//     const synonymsById = new Map<number, string[]>();
//     await Promise.all(
//       limited.map(async (p) => {
//         const syns = await fetchSynonymsFor(p.internalId);
//         synonymsById.set(p.internalId, syns);
//       })
//     );

//     const mapped: PlantResult[] = limited.map(p => ({
//       id: p.internalId,
//       acceptedScientificName: p.plantScientificName,
//       synonyms: synonymsById.get(p.internalId) ?? [],
//       commonNames: p.plantCommonName ?? [],
//       pinyin: p.plantPinyin ?? undefined,
//       characters: p.plantChineseName ?? undefined,
//     }));

//     setResults(mapped);
//   } catch (error: Error | unknown) {
//     setErr((error as Error)?.message ?? 'Search failed');
//   } finally {
//     setLoading(false);
//   }
// }

//   return (
//     <main className="min-h-screen">
//       <div className="mx-auto max-w-5xl px-6 py-10">
//         <h1 className="text-center text-xl font-semibold tracking-wide mb-8">TCM Database</h1>

//         <section className="mb-8">
//           <p className="text-lg font-medium mb-2">Search by:</p>
//           <ul className="space-y-2 text-base leading-relaxed">
//             <li>- Plant name (scientific, common, character, pinyin)</li>
//             <li>- Herbal drug name (pharmaceutical)</li>
//             <li>- Family</li>
//             <li>- Growth habit</li>
//             <li>- Use</li>
//             <li>- Institutional availability</li>
//           </ul>
//         </section>

//         <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-700 p-5">
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
//             <div className="md:col-span-12">
//               <label htmlFor="query" className="block text-sm font-medium mb-2">
//                 Search Bar
//               </label>
//               <input
//                 id="query"
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="...search here"
//                 className="w-full rounded-md ring-1 ring-inset ring-neutral-700 px-3 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
//               />
//             </div>
//           </div>

//           <div className="mt-5 flex justify-end">
//             <button
//               type="submit"
//               className="rounded-md bg-teal-500 px-4 py-2 font-medium text-neutral-900 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
//             >
//               Search
//             </button>
//           </div>
//         </form>

//         {/* Results */}
//         <div className="mt-8 text-sm">
//           {loading && <p>Searching…</p>}
//           {err && <p className="text-red-500">{err}</p>}
//           {!loading && !err && results.length === 0 && <p className="text-neutral-500">No results yet.</p>}

//           <div className="space-y-8">
//             {results.map((p) => (
//               <article key={p.id} className="rounded-xl border border-neutral-300">
//                 <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
//                   <Cell label="Accepted Scientific Name" value={p.acceptedScientificName} />
//                   <Cell label="Botanical Synonyms" value={p.synonyms.length ? p.synonyms.join(', ') : '—'} />
//                   <Cell label="Common Name" value={p.commonNames.length ? p.commonNames.join(', ') : '—'} />
//                   <Cell label="Pin Yin" value={p.pinyin || '—'} />
//                   <Cell label="Characters" value={p.characters || '—'} />
//                 </div>
//                 <div className="p-4 text-neutral-500 italic">
//                   (Image of the plant species)
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col p-4">
      <span className="underline font-medium mb-2">{label}</span>
      <span>{value}</span>
    </div>
  );
}
