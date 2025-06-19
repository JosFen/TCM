import { RequestHandler } from 'express';
import { PlantTaxonomyService } from '../services/plant-taxonomy.service';
// import { CreatePlantTaxonomyDto, UpdatePlantTaxonomyDto } from '../dtos/plant-taxonomy.dto';

export const PlantTaxonomyController = {
  create: (async (req, res) => {
    try {
      const taxonomy = await PlantTaxonomyService.create(req.body);
      res.status(201).json(taxonomy);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create plant taxonomy' });
    }
  }) as RequestHandler,

  findAll: (async (_req, res) => {
    const taxonomies = await PlantTaxonomyService.findAll();
    res.json({ "count": taxonomies.length, "taxonomies": taxonomies });
  }) as RequestHandler,

  findOne: (async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const taxonomy = await PlantTaxonomyService.findOne(id);
    taxonomy ? res.json(taxonomy) : res.status(404).json({ error: 'Not found' });
  }) as RequestHandler,

  update: (async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
      const updated = await PlantTaxonomyService.update(id, req.body);
      res.json(updated);
    } catch (error) {
      res.status(404).json({ error: 'Plant taxonomy not found' });
    }
  }) as RequestHandler,

  delete: (async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
      await PlantTaxonomyService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: 'Plant taxonomy not found' });
    }
  }) as RequestHandler,
};
