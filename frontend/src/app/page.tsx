'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { searchPlants, PlantResult } from '@/lib/plant-search';

export default function PlantSearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PlantResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedPlantId, setExpandedPlantId] = useState<number | null>(null);
  const [expandedMedicinalBg, setExpandedMedicinalBg] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      setResults([]);
      setSearched(false);
      setExpandedPlantId(null);
      setErr(null);
      return;
    }

    setLoading(true);
    setErr(null);
    setResults([]);
    setExpandedPlantId(null);
    setExpandedMedicinalBg(false);

    try {
      const matches = await searchPlants(q);
      setResults(matches);
      setSearched(true);
    } catch (error) {
      setErr(error instanceof Error ? error.message : 'Search failed');
      setSearched(true);
    } finally {
      setLoading(false);
    }
  }

  function handleResultClick(plantId: number) {
    if (expandedPlantId === plantId) {
      setExpandedPlantId(null);
      setExpandedMedicinalBg(false);
    } else {
      setExpandedPlantId(plantId);
      setExpandedMedicinalBg(false);
    }
  }

  return (
    <main className="min-h-screen">
      <header className="flex justify-end px-4 py-3 border-b border-neutral-200">
        <Link
          href="/auth"
          className="rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Login
        </Link>
      </header>
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

        <div className="mt-6">
          {loading && <p>Searching…</p>}
          {err && <p className="text-red-500">{err}</p>}
          {!loading && !err && searched && results.length === 0 && (
            <p className="text-neutral-500">No results found.</p>
          )}
          {!loading && !err && !searched && (
            <p className="text-neutral-500">Enter a search term above to find plants.</p>
          )}

          {results.length > 0 && (
            <p className="text-sm text-neutral-600 mb-3">
              {results.length} result{results.length === 1 ? '' : 's'} — click a plant to view details
            </p>
          )}

          <ul className="space-y-2">
            {results.map((p) => {
              const isExpanded = expandedPlantId === p.id;
              const summaryParts = [
                p.commonNames.length ? p.commonNames.join(', ') : null,
                p.pinyin,
                p.characters,
                p.herbalDrug?.pharmaceuticalName,
                p.taxonomy?.family,
              ].filter(Boolean);

              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => handleResultClick(p.id)}
                    className={`w-full text-left rounded-lg border px-4 py-3 transition-colors ${
                      isExpanded
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-base">{p.acceptedScientificName}</p>
                        {summaryParts.length > 0 && (
                          <p className="text-sm text-neutral-600 mt-1 truncate">
                            {summaryParts.join(' · ')}
                          </p>
                        )}
                      </div>
                      <span className="text-teal-600 text-xl font-bold shrink-0">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <PlantResultDetail
                      plant={p}
                      expandedMedicinalBg={expandedMedicinalBg}
                      onToggleMedicinalBg={() => setExpandedMedicinalBg((v) => !v)}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

function PlantResultDetail({
  plant: p,
  expandedMedicinalBg,
  onToggleMedicinalBg,
}: {
  plant: PlantResult;
  expandedMedicinalBg: boolean;
  onToggleMedicinalBg: () => void;
}) {
  return (
    <div className="mt-4 mb-6 space-y-4">
      <article className="rounded-xl border border-neutral-300">
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

      <h2 className="underline text-lg font-semibold p-4 text-center">Botanical Background:</h2>

      <article className="rounded-xl border border-neutral-300">
        <h3 className="text-lg p-4 font-bold">Taxonomic Classification</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell label="Family" value={p.taxonomy?.family || '—'} />
          <Cell label="Order" value={p.taxonomy?.order || '—'} />
          <Cell
            label="Vascular / Non-Vascular?"
            value={
              p.taxonomy?.vascular === null || p.taxonomy?.vascular === undefined
                ? '—'
                : p.taxonomy?.vascular
                  ? 'Vascular'
                  : 'Non-vascular'
            }
          />
        </div>
        <div className="p-4 text-neutral-500 italic">
          (Diagram showing phylogenetic relationship between species in taxonomic tree ??)
        </div>
      </article>

      <article className="rounded-xl border border-neutral-300">
        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Morphology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell label="Description" value={p.morphology?.description || '—'} />
          <Cell
            label="Terrestrial / Aquatic"
            value={
              p.morphology?.isTerrestrial === true
                ? 'Terrestrial'
                : p.morphology?.isTerrestrial === false
                  ? 'Aquatic'
                  : '—'
            }
          />
          <Cell label="Growth Habit" value={p.morphology?.growthHabit || '—'} />
          <Cell
            label="Deciduous / Evergreen"
            value={
              p.morphology?.isDeciduous === true
                ? 'Deciduous'
                : p.morphology?.isDeciduous === false
                  ? 'Evergreen'
                  : '—'
            }
          />
          <Cell label="Reproductive Morphology" value={p.morphology?.reproductiveSystem || '—'} />
        </div>
        <div className="p-4 text-neutral-500 italic">
          (3 images: Herbarium specimen, specimen growing in the wild, specimen in botanical garden ??)
        </div>
      </article>

      <article className="rounded-xl border border-neutral-300">
        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Lifecycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell label="Annual/ Perennial/ Biennial" value={p.morphology?.lifeCycle || '—'} />
        </div>
      </article>

      <article className="rounded-xl border border-neutral-300">
        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Phenology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell
            label="Flowering Period"
            value={
              p.morphology?.floweringPeriod?.length
                ? p.morphology.floweringPeriod.join(', ')
                : '—'
            }
          />
          <Cell
            label="Fruiting Period"
            value={
              p.morphology?.fruitingPeriod?.length
                ? p.morphology.fruitingPeriod.join(', ')
                : '—'
            }
          />
        </div>
      </article>

      <article className="rounded-xl border border-neutral-300">
        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Plant Ecology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell label="Habitat" value={p.ecologyDistribution?.habitat || '—'} />
        </div>
      </article>

      <article className="rounded-xl border border-neutral-300">
        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Geography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell label="Plant Origin" value={p.ecologyDistribution?.plantOrigin || '—'} />
          <Cell label="Range and Distribution" value={p.ecologyDistribution?.globalRange || '—'} />
          <Cell label="Range in China" value={p.ecologyDistribution?.chinaRange || '—'} />
        </div>
      </article>

      <article className="rounded-xl border border-neutral-300">
        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Conservation Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell label="Worldwide Status" value={p.conservation?.globalConservationStatus || '—'} />
          <Cell label="Regional Status in China" value={p.conservation?.chinaConservationStatus || '—'} />
          <Cell label="Protected Status" value={p.conservation?.protectedStatus || '—'} />
        </div>
      </article>

      <article className="rounded-xl border border-neutral-300">
        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Invasiveness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell label="Invasive Status" value={p.conservation?.invasiveStatus || '—'} />
          <Cell label="Invasive Range" value={p.conservation?.invasiveRange || '—'} />
        </div>
      </article>

      <hr className="border-t border-neutral-800" />

      <article className="rounded-xl border border-neutral-300">
        <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
          Medicinal Material Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
          <Cell label="Pharmaceutical Name" value={p.herbalDrug?.pharmaceuticalName || '—'} />
          <Cell label="Plant Part Used" value={p.herbalDrug?.plantPartUsed || '—'} />
          <Cell
            label="Pharmacopoeia/ Substitute Species"
            value={
              p.herbalDrug?.officialStatus === true
                ? 'Pharmacopoeia'
                : p.herbalDrug?.officialStatus === false
                  ? 'Substitute Species'
                  : '—'
            }
          />
          <Cell label="Substitute Species" value={p.herbalDrug?.substituteSpecies || '—'} />
          <Cell label="Description (Drug Morphology)" value={p.herbalDrug?.description || '—'} />
        </div>
        <div className="flex justify-center p-4">
          <Image
            src={p.imageUrl || '/placeholder.jpg'}
            alt="Herbal drug"
            width={320}
            height={240}
            className="rounded shadow"
          />
        </div>
      </article>

      <hr className="border-t border-neutral-800" />

      <div>
        <button
          type="button"
          onClick={onToggleMedicinalBg}
          className="w-full flex items-center justify-center gap-3 p-4 text-lg font-semibold hover:bg-neutral-100 rounded transition-colors"
        >
          <span className="underline">Medicinal Background:</span>
          <span className="text-5xl font-bold text-teal-600">
            {expandedMedicinalBg ? '−' : '+'}
          </span>
        </button>

        {expandedMedicinalBg && (
          <div className="space-y-4 mt-4">
            <article className="rounded-xl border border-neutral-300">
              <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                Sourcing Background
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                <Cell
                  label="Is the Plant Under Cultivation?"
                  value={
                    p.sourcing?.cultivationStatus === true
                      ? 'Yes'
                      : p.sourcing?.cultivationStatus === false
                        ? 'No'
                        : '—'
                  }
                />
                <Cell label="Cultivation Regions" value={p.sourcing?.cultivationRegions || '—'} />
                <Cell label="Wild-Harvesting Regions" value={p.sourcing?.wildHarvestingRegions || '—'} />
                <Cell label="Acquisition" value={p.sourcing?.harvestingPractice?.join(', ') || '—'} />
              </div>
            </article>

            <article className="rounded-xl border border-neutral-300">
              <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Daodi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                <Cell
                  label="Daodi Status"
                  value={
                    p.sourcing?.daodiStatus === true
                      ? 'Yes'
                      : p.sourcing?.daodiStatus === false
                        ? 'No'
                        : '—'
                  }
                />
                <Cell label="Daodi Regions" value={p.sourcing?.daodiRegions || '—'} />
              </div>
            </article>

            <article className="rounded-xl border border-neutral-300">
              <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                Medicinal Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                <Cell label="Taste" value={p.medicinalProperties?.taste?.join(', ') || '—'} />
                <Cell label="Energetic Character" value={p.medicinalProperties?.energyFlow?.join(', ') || '—'} />
                <Cell label="Meridian" value={p.medicinalProperties?.meridians?.join(', ') || '—'} />
                <Cell label="Functions" value={p.medicinalProperties?.actions || '—'} />
                <Cell
                  label="Pharmacological Properties"
                  value={p.medicinalProperties?.pharmacologicalProperties?.join(', ') || '—'}
                />
                <Cell label="Indications" value={p.medicinalProperties?.indications?.join(', ') || '—'} />
                <Cell label="Safety" value="—" />
                <Cell label="Toxicity" value={p.medicinalProperties?.toxicity || '—'} />
              </div>
            </article>

            <article className="rounded-xl border border-neutral-300">
              <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">Biochemistry</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                <Cell
                  label="Secondary Metabolites"
                  value={p.medicinalProperties?.secondaryMetabolites || '—'}
                />
              </div>
            </article>

            <hr className="border-t border-neutral-800" />

            <article className="rounded-xl border border-neutral-300">
              <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                Ethnobotany and Traditional Uses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-neutral-300">
                <Cell label="Folk Medicinal Uses" value={p.ethnobotany?.folkMedicinalUses || '—'} />
                <Cell
                  label="Traditional Uses"
                  value={p.ethnobotany?.otherCulturalUses?.join(', ') || '—'}
                />
              </div>
            </article>

            <article className="rounded-xl border border-neutral-300">
              <h2 className="text-lg font-semibold p-4 border-t border-neutral-300">
                Cultivation Background
              </h2>
            </article>

            <article className="rounded-xl border border-neutral-300">
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

            <article className="rounded-xl border border-neutral-300">
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
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col p-4">
      <span className="underline font-medium mb-2">{label}</span>
      <span>{value}</span>
    </div>
  );
}
