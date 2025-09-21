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
  },
];



export default function PlantSearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PlantResult[]>([]);
  const [loading, setLoading] = useState(false);
  // const [err, setErr] = useState<string | null>(null);
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

                <hr className="mt-4 border-t border-neutral-800 " />
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
                <article className="rounded-xl border border-neutral-300 mt-4 mb-4">
                  <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                    Phenology
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                    <Cell label="Flowering Period" value={p.morphology?.floweringPeriod && p.morphology?.floweringPeriod.length > 0 ? p.morphology?.floweringPeriod.join(', ') : '—'} />
                    <Cell label="Fruiting Period" value={p.morphology?.fruitingPeriod && p.morphology?.fruitingPeriod.length > 0 ? p.morphology?.fruitingPeriod.join(', ') : '—'} />
                  </div>
                </article>  
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
