import { Request, Response, RequestHandler } from 'express';
import { PlantSynonymService } from '../services/plant-synonym.service';
import { 
  CreatePlantSynonymDto,
  UpdatePlantSynonymDto 
} from '../dtos/plant-synonym.dto';

export const PlantSynonymController = {
  create: ( async (req: Request, res: Response) => {
    try {
      const result = CreatePlantSynonymDto.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          error: 'Validation failed',
          details: result.error.flatten() 
        });
      }

      const synonym = await PlantSynonymService.create(result.data);
      res.status(201).json(synonym);
    } catch (error) {
      res.status(400).json({ 
        error: 'Failed to create plant synonym',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }) as RequestHandler,

  findAll: (async (_req: Request, res: Response)  =>  {
    try {
      const synonyms = await PlantSynonymService.findAll();
      res.json({
        success: true,
        count: synonyms.length,
        data: synonyms
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch plant synonyms'
      });
    }
  }) as RequestHandler,

  findByPlantId: ( async (req: Request, res: Response) => {
    const plantId = parseInt(req.params.plantId);
    if (isNaN(plantId)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid plant ID format' 
      });
    }

    try {
      const synonyms = await PlantSynonymService.findByPlantId(plantId);
      res.json({
        success: true,
        count: synonyms.length,
        data: synonyms
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch synonyms for plant'
      });
    }
  }) as RequestHandler,

findOne: (async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid ID format' 
      });
    }

    try {
      const synonym = await PlantSynonymService.findOne(id);
      if (!synonym) {
        return res.status(404).json({ 
          success: false,
          error: 'Plant synonym not found' 
        });
      }
      res.json({
        success: true,
        data: synonym
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch plant synonym'
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
      const result = UpdatePlantSynonymDto.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          success: false,
          error: 'Validation failed',
          details: result.error.flatten() 
        });
      }

      const updated = await PlantSynonymService.update(id, result.data);
      res.json({
        success: true,
        data: updated
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
      await PlantSynonymService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ 
        success: false,
        error: 'Plant synonym not found' 
      });
    }
  }) as RequestHandler,
};