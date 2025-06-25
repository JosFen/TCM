import { Request, RequestHandler, Response } from 'express';
import { PlantMorphologyService } from '../services/plant-morphology.service';
import { 
  CreatePlantMorphologyDto,
  UpdatePlantMorphologyDto 
} from '../dtos/plant-morphology.dto';

export const PlantMorphologyController = {
 create: ( async (req: Request, res: Response) => {
    try {
      const result = CreatePlantMorphologyDto.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          success: false,
          error: 'Validation failed',
          details: result.error.flatten() 
        });
      }

      const morphology = await PlantMorphologyService.create(result.data);
      res.status(201).json({
        success: true,
        data: morphology,
      });
    } catch (error) {
      res.status(400).json({ 
        success: false,
        error: 'Failed to create plant morphology',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }) as RequestHandler,

  findAll: (async (_req: Request, res: Response) => {
    try {
      const morphologies = await PlantMorphologyService.findAll();
      res.json({
        success: true,
        count: morphologies.length,
        data: morphologies,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch plant morphologies',
      });
    }
  }) as RequestHandler,

findOne: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid ID format' 
      });
    }

    try {
      const morphology = await PlantMorphologyService.findOne(id);
      if (!morphology) {
        return res.status(404).json({ 
          success: false,
          error: 'Plant morphology not found' 
        });
      }
      res.json({
        success: true,
        data: morphology,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch plant morphology',
      });
    }
  }) as RequestHandler,

findByPlantId: (async(req: Request, res: Response) => {
    const plantId = parseInt(req.params.plantId);
    if (isNaN(plantId)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid plant ID format' 
      });
    }

    try {
      const morphologies = await PlantMorphologyService.findByPlantId(plantId);
      res.json({
        success: true,
        count: morphologies.length,
        data: morphologies,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch plant morphologies',
      });
    }
  }) as RequestHandler,

update: ( async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid ID format' 
      });
    }

    try {
      const result = UpdatePlantMorphologyDto.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          success: false,
          error: 'Validation failed',
          details: result.error.flatten() 
        });
      }

      const updated = await PlantMorphologyService.update(id, result.data);
      res.json({
        success: true,
        data: updated,
      });
    } catch (error) {
      res.status(400).json({ 
        success: false,
        error: 'Update failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }) as RequestHandler,

delete: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid ID format' 
      });
    }

    try {
      await PlantMorphologyService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ 
        success: false,
        error: 'Plant morphology not found' 
      });
    }
  }) as RequestHandler,
};