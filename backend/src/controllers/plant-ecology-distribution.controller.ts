// controllers/plant-ecology-distribution.controller.ts
import { Response, Request, RequestHandler } from "express";
import { PlantEcologyDistributionService } from "../services/plant-ecology-distribution.service";

export const PlantEcologyDistributionController = {
  create: (async (req: Request, res: Response) => {
    try {
      const ecology = await PlantEcologyDistributionService.create(req.body);
      res.status(201).json(ecology);
    } catch (error) {
      res.status(400).json({ 
        error: 'Failed to create plant ecology distribution',
        details: error instanceof Error ? error.message : undefined
      });
    }
  }) as RequestHandler,

  findAll: (async (_req, res) => {
    try {
        const ecologies = await PlantEcologyDistributionService.findAll();
        res.json({ success: true, "count": ecologies.length, "plant-ecology-distributions": ecologies });
    } catch (error) {
        res.status(500).json({
        success: false,
        error: 'Failed to fetch plant ecology distributions',
      });
    }
  }) as RequestHandler,

  findOne: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const ecology = await PlantEcologyDistributionService.findOne(id);
    ecology ? res.json(ecology) : res.status(404).json({ error: 'Not found' });
  }) as RequestHandler,

  findByPlantId: (async (req: Request, res: Response) => {
    const plantId = parseInt(req.params.plantId);
    if (isNaN(plantId)) {
      return res.status(400).json({ error: 'Invalid plant ID format' });
    }

    const ecology = await PlantEcologyDistributionService.findByPlantId(plantId);
    ecology ? res.json(ecology) : res.status(404).json({ error: 'Not found' });
  }) as RequestHandler,

  update: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    try {
      const updatedEcology = await PlantEcologyDistributionService.update(id, req.body);
      res.status(200).json(updatedEcology);
    } catch (error) {
      res.status(404).json({ 
        error: 'Update failed',
        details: error instanceof Error ? error.message : undefined
      });
    }
  }) as RequestHandler,

  delete: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    try {
      await PlantEcologyDistributionService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ 
        error: 'Delete failed',
        details: error instanceof Error ? error.message : undefined
      });
    }
  }) as RequestHandler
};