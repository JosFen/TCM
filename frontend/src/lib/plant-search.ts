import { Lifecycle, Month } from '@/lib/types';

const API = '/api/proxy/api/v1';

export type PlantResult = {
  id: number;
  acceptedScientificName: string;
  synonyms: string[];
  commonNames: string[];
  pinyin?: string | null;
  characters?: string | null;
  imageUrl?: string | null;
  taxonomy?: {
    family?: string | null;
    order?: string | null;
    vascular?: boolean | null;
  };
  morphology?: {
    description?: string | null;
    isTerrestrial?: boolean | null;
    growthHabit?: string | null;
    isDeciduous?: boolean | null;
    reproductiveSystem?: string | null;
    lifeCycle?: Lifecycle | null;
    floweringPeriod?: Month[] | null;
    fruitingPeriod?: Month[] | null;
  };
  ecologyDistribution?: {
    habitat?: string | null;
    plantOrigin?: string | null;
    globalRange?: string | null;
    chinaRange?: string | null;
    endemic?: string | null;
  };
  conservation?: {
    globalConservationStatus?: string | null;
    chinaConservationStatus?: string | null;
    protectedStatus?: string | null;
    invasiveStatus?: string | null;
    invasiveRange?: string | null;
  };
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
  };
  sourcing?: {
    cultivationStatus?: boolean | null;
    cultivationRegions?: string | null;
    wildHarvestingRegions?: string | null;
    harvestingPractice?: string[] | null;
    daodiStatus?: boolean | null;
    daodiRegions?: string | null;
    productionRegions?: string | null;
  };
  medicinalProperties?: {
    taste?: string[] | null;
    energyFlow?: string[] | null;
    meridians?: string[] | null;
    actions?: string | null;
    pharmacologicalProperties?: string[] | null;
    indications?: string[] | null;
    toxicity?: string | null;
    secondaryMetabolites?: string | null;
  };
  ethnobotany?: {
    folkMedicinalUses?: string | null;
    otherCulturalUses?: string[] | null;
  };
};

type PlantNomenclature = {
  internalId: number;
  plantScientificName: string;
  plantCommonName: string[];
  plantPinyin?: string | null;
  plantChineseName?: string | null;
  taxonomyId: number;
};

type PlantTaxonomy = { id: number; class?: string | null; family: string; vascular?: boolean | null };
type PlantSynonym = { id: number; plantId: number; name: string | null };
type PlantMorphology = {
  id: number;
  growthHabit?: string | null;
  isTerrestrial?: boolean | null;
  isDeciduous?: boolean | null;
  reproductiveSystem?: string | null;
  lifecycle?: Lifecycle[];
  floweringPeriod?: Month[];
  fruitingPeriod?: Month[];
  plants: { internalId: number }[];
};
type MedicinalProperty = {
  pharmaceuticalName?: string | null;
  herbalDrugPinyin?: string | null;
  taste?: string[];
  energyFlow?: string[];
  meridians?: string[];
  actions?: string | null;
  pharmacologicalProperties?: string[];
  indications?: string[];
  toxicity?: string | null;
  secondaryMetabolites?: string | null;
  herbalDrugs?: { id: number }[];
};
type Ethnobotany = {
  plantId: number;
  folkMedicinalUses?: string | null;
  otherCulturalUses?: string[];
};
type BotanicalGarden = {
  botanicalGardenName: string;
  plants: { internalId: number }[];
};
type HerbalDrugBackground = {
  id: number;
  herbalDrugPinyin: string;
  plantPartUsed?: string | null;
  officialStatus?: boolean | null;
  harvestingTime?: Month[];
  primaryProcessing?: string | null;
  secondaryProcessing?: string | null;
  herbalDruglImage?: string | null;
  plantScientificName: string;
  pharmaceuticalName: string;
  plant?: { internalId: number };
  sourcingBackgrounds?: SourcingBackground | null;
};
type SourcingBackground = {
  herbalDrugId: number;
  cultivationStatus?: boolean | null;
  cultivationRegions?: string | null;
  wildHarvestingRegions?: string | null;
  harvestingPractice?: string[];
  daodiStatus?: boolean | null;
  daodiRegions?: string | null;
  productionRegions?: string | null;
};
type EcologyDistribution = {
  plantId: number;
  habitat?: string | null;
  plantOrigin?: string | null;
  globalRange?: string | null;
  chinaRange?: string | null;
  endemic?: string | null;
};
type PlantConservation = {
  plantId: number;
  globalConservationStatus?: string | null;
  chinaConservationStatus?: string | null;
  protectedStatus?: string | null;
  invasiveStatus?: string | null;
  invasiveRange?: string | null;
};

const MAX_RESULTS = 25;

function contains(text: string | null | undefined, q: string): boolean {
  return (text ?? '').toLowerCase().includes(q);
}

function arrContains(arr: string[] | null | undefined, q: string): boolean {
  return (arr ?? []).some((s) => s.toLowerCase().includes(q));
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Request failed: ${url}`);
  return res.json();
}

function findMatchingPlantIds(
  q: string,
  plants: PlantNomenclature[],
  taxonomies: PlantTaxonomy[],
  synonyms: PlantSynonym[],
  morphologies: PlantMorphology[],
  medicinalProperties: MedicinalProperty[],
  ethnobotanies: Ethnobotany[],
  gardens: BotanicalGarden[],
  herbalDrugs: HerbalDrugBackground[]
): Set<number> {
  const matched = new Set<number>();

  const familyIds = new Set(
    taxonomies.filter((t) => contains(t.family, q)).map((t) => t.id)
  );

  // Plant name (scientific, common, character, pinyin) + synonyms
  for (const plant of plants) {
    if (
      contains(plant.plantScientificName, q) ||
      arrContains(plant.plantCommonName, q) ||
      contains(plant.plantChineseName, q) ||
      contains(plant.plantPinyin, q) ||
      familyIds.has(plant.taxonomyId)
    ) {
      matched.add(plant.internalId);
    }
  }

  for (const syn of synonyms) {
    if (contains(syn.name, q)) matched.add(syn.plantId);
  }

  // Herbal drug name (pharmaceutical)
  for (const mp of medicinalProperties) {
    if (contains(mp.pharmaceuticalName, q) || contains(mp.herbalDrugPinyin, q)) {
      for (const hd of mp.herbalDrugs ?? []) {
        const drug = herbalDrugs.find((d) => d.id === hd.id);
        if (drug?.plant?.internalId) matched.add(drug.plant.internalId);
      }
    }
  }

  for (const drug of herbalDrugs) {
    if (
      contains(drug.pharmaceuticalName, q) ||
      contains(drug.herbalDrugPinyin, q)
    ) {
      if (drug.plant?.internalId) matched.add(drug.plant.internalId);
    }
  }

  // Growth habit
  for (const morph of morphologies) {
    if (contains(morph.growthHabit, q)) {
      for (const p of morph.plants) matched.add(p.internalId);
    }
  }

  // Use (folk uses, cultural uses, actions, indications, pharmacological properties)
  for (const eth of ethnobotanies) {
    if (
      contains(eth.folkMedicinalUses, q) ||
      arrContains(eth.otherCulturalUses, q)
    ) {
      matched.add(eth.plantId);
    }
  }

  for (const mp of medicinalProperties) {
    if (
      contains(mp.actions, q) ||
      arrContains(mp.indications, q) ||
      arrContains(mp.pharmacologicalProperties, q)
    ) {
      for (const hd of mp.herbalDrugs ?? []) {
        const drug = herbalDrugs.find((d) => d.id === hd.id);
        if (drug?.plant?.internalId) matched.add(drug.plant.internalId);
      }
    }
  }

  // Institutional availability (botanical garden name)
  for (const garden of gardens) {
    if (contains(garden.botanicalGardenName, q)) {
      for (const p of garden.plants) matched.add(p.internalId);
    }
  }

  return matched;
}

function buildPlantResult(
  plant: PlantNomenclature,
  taxonomies: PlantTaxonomy[],
  synonyms: PlantSynonym[],
  morphologies: PlantMorphology[],
  ecologyByPlant: Map<number, EcologyDistribution>,
  conservationByPlant: Map<number, PlantConservation>,
  ethnobotanyByPlant: Map<number, Ethnobotany>,
  herbalDrugs: HerbalDrugBackground[],
  medicinalByPharma: Map<string, MedicinalProperty>
): PlantResult {
  const taxonomy = taxonomies.find((t) => t.id === plant.taxonomyId);
  const plantSynonyms = synonyms
    .filter((s) => s.plantId === plant.internalId)
    .map((s) => s.name)
    .filter((n): n is string => !!n);

  const morphology = morphologies.find((m) =>
    m.plants.some((p) => p.internalId === plant.internalId)
  );

  const ecology = ecologyByPlant.get(plant.internalId);
  const conservation = conservationByPlant.get(plant.internalId);
  const ethnobotany = ethnobotanyByPlant.get(plant.internalId);

  const plantHerbalDrugs = herbalDrugs.filter(
    (d) => d.plantScientificName === plant.plantScientificName
  );
  const primaryDrug = plantHerbalDrugs[0];
  const medicinal = primaryDrug
    ? medicinalByPharma.get(primaryDrug.pharmaceuticalName)
    : undefined;
  const sourcing = primaryDrug?.sourcingBackgrounds ?? undefined;

  return {
    id: plant.internalId,
    acceptedScientificName: plant.plantScientificName,
    synonyms: plantSynonyms,
    commonNames: plant.plantCommonName ?? [],
    pinyin: plant.plantPinyin,
    characters: plant.plantChineseName,
    imageUrl: primaryDrug?.herbalDruglImage ?? null,
    taxonomy: taxonomy
      ? {
          family: taxonomy.family,
          order: taxonomy.class ?? null,
          vascular: taxonomy.vascular ?? null,
        }
      : undefined,
    morphology: morphology
      ? {
          isTerrestrial: morphology.isTerrestrial,
          growthHabit: morphology.growthHabit,
          isDeciduous: morphology.isDeciduous,
          reproductiveSystem: morphology.reproductiveSystem,
          lifeCycle: morphology.lifecycle?.[0] ?? null,
          floweringPeriod: morphology.floweringPeriod,
          fruitingPeriod: morphology.fruitingPeriod,
        }
      : undefined,
    ecologyDistribution: ecology
      ? {
          habitat: ecology.habitat,
          plantOrigin: ecology.plantOrigin,
          globalRange: ecology.globalRange,
          chinaRange: ecology.chinaRange,
          endemic: ecology.endemic,
        }
      : undefined,
    conservation: conservation
      ? {
          globalConservationStatus: conservation.globalConservationStatus,
          chinaConservationStatus: conservation.chinaConservationStatus,
          protectedStatus: conservation.protectedStatus,
          invasiveStatus: conservation.invasiveStatus,
          invasiveRange: conservation.invasiveRange,
        }
      : undefined,
    herbalDrug: primaryDrug
      ? {
          pharmaceuticalName: primaryDrug.pharmaceuticalName,
          herbalDrugPinyin: primaryDrug.herbalDrugPinyin,
          plantPartUsed: primaryDrug.plantPartUsed,
          officialStatus: primaryDrug.officialStatus,
          herbalDrugImage: primaryDrug.herbalDruglImage,
          harvestingTime: primaryDrug.harvestingTime,
          primaryProcessing: primaryDrug.primaryProcessing,
          secondaryProcessing: primaryDrug.secondaryProcessing,
        }
      : undefined,
    sourcing: sourcing
      ? {
          cultivationStatus: sourcing.cultivationStatus,
          cultivationRegions: sourcing.cultivationRegions,
          wildHarvestingRegions: sourcing.wildHarvestingRegions,
          harvestingPractice: sourcing.harvestingPractice,
          daodiStatus: sourcing.daodiStatus,
          daodiRegions: sourcing.daodiRegions,
          productionRegions: sourcing.productionRegions,
        }
      : undefined,
    medicinalProperties: medicinal
      ? {
          taste: medicinal.taste,
          energyFlow: medicinal.energyFlow,
          meridians: medicinal.meridians,
          actions: medicinal.actions,
          pharmacologicalProperties: medicinal.pharmacologicalProperties,
          indications: medicinal.indications,
          toxicity: medicinal.toxicity,
          secondaryMetabolites: medicinal.secondaryMetabolites,
        }
      : undefined,
    ethnobotany: ethnobotany
      ? {
          folkMedicinalUses: ethnobotany.folkMedicinalUses,
          otherCulturalUses: ethnobotany.otherCulturalUses,
        }
      : undefined,
  };
}

export async function searchPlants(query: string): Promise<PlantResult[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const [
    plantsRes,
    taxRes,
    synRes,
    morphRes,
    medRes,
    ethRes,
    gardenRes,
    drugRes,
    ecologyRes,
    conservationRes,
  ] = await Promise.all([
    fetchJson<{ 'plant-nomenclatures': PlantNomenclature[] }>(`${API}/plant-nomenclatures`),
    fetchJson<{ taxonomies: PlantTaxonomy[] }>(`${API}/plant-taxonomies`),
    fetchJson<{ data: PlantSynonym[] }>(`${API}/plant-synonyms`),
    fetchJson<{ data: PlantMorphology[] }>(`${API}/plant-morphologies`),
    fetchJson<{ data: MedicinalProperty[] }>(`${API}/medicinal-properties`),
    fetchJson<{ data: Ethnobotany[] }>(`${API}/ethnobotanies`),
    fetchJson<{ data: BotanicalGarden[] }>(`${API}/botanical-gardens`),
    fetchJson<{ data: HerbalDrugBackground[] }>(`${API}/herbal-drug-backgrounds`),
    fetchJson<{ 'plant-ecology-distributions': EcologyDistribution[] }>(
      `${API}/plant-ecology-distributions`
    ),
    fetchJson<{ data: PlantConservation[] }>(`${API}/plant-conservations`),
  ]);

  const plants = plantsRes['plant-nomenclatures'] ?? [];
  const taxonomies = taxRes.taxonomies ?? [];
  const synonyms = synRes.data ?? [];
  const morphologies = morphRes.data ?? [];
  const medicinalProperties = medRes.data ?? [];
  const ethnobotanies = ethRes.data ?? [];
  const gardens = gardenRes.data ?? [];
  const herbalDrugs = drugRes.data ?? [];
  const ecologies = ecologyRes['plant-ecology-distributions'] ?? [];
  const conservations = conservationRes.data ?? [];

  const matchedIds = findMatchingPlantIds(
    q,
    plants,
    taxonomies,
    synonyms,
    morphologies,
    medicinalProperties,
    ethnobotanies,
    gardens,
    herbalDrugs
  );

  const ecologyByPlant = new Map(ecologies.map((e) => [e.plantId, e]));
  const conservationByPlant = new Map(conservations.map((c) => [c.plantId, c]));
  const ethnobotanyByPlant = new Map(ethnobotanies.map((e) => [e.plantId, e]));
  const medicinalByPharma = new Map(
    medicinalProperties
      .filter((m) => m.pharmaceuticalName)
      .map((m) => [m.pharmaceuticalName!, m])
  );

  const selected = plants
    .filter((p) => matchedIds.has(p.internalId))
    .slice(0, MAX_RESULTS);

  return selected.map((plant) =>
    buildPlantResult(
      plant,
      taxonomies,
      synonyms,
      morphologies,
      ecologyByPlant,
      conservationByPlant,
      ethnobotanyByPlant,
      herbalDrugs,
      medicinalByPharma
    )
  );
}
