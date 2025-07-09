// controllers/herbal-drug-background.controller.ts
import { Request, Response, RequestHandler } from "express";
import { HerbalDrugBackgroundService } from "../services/herbal-drug-background.service";

export const HerbalDrugBackgroundController = {
  create: (async (req: Request, res: Response) => {
    try {
      const herbalDrug = await HerbalDrugBackgroundService.create(req.body);
      res.status(201).json({
        success: true,
        data: herbalDrug,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('already exists') ? 409 : 
                       error.message.includes('Invalid reference') ? 400 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 409 ? 'Conflict' : 
              statusCode === 400 ? 'Bad Request' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to create herbal drug background',
      });
    }
  }) as RequestHandler,

  findAll: (async (_req: Request, res: Response) => {
    try {
      const herbalDrugs = await HerbalDrugBackgroundService.findAll();
      res.json({
        success: true,
        count: herbalDrugs.length,
        data: herbalDrugs,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch herbal drug backgrounds',
      });
    }
  }) as RequestHandler,

  findOne: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format',
      });
    }

    try {
      const herbalDrug = await HerbalDrugBackgroundService.findOne(id);
      if (!herbalDrug) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Herbal drug background not found',
        });
      }
      res.json({
        success: true,
        data: herbalDrug,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch herbal drug background',
      });
    }
  }) as RequestHandler,

  findByPlantAndPharmaceutical: (async (req: Request, res: Response) => {
    const { plantName, pharmaceuticalName } = req.params;
    if (!plantName || !pharmaceuticalName) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Plant name and pharmaceutical name are required',
      });
    }

    try {
      const herbalDrug = await HerbalDrugBackgroundService.findByPlantAndPharmaceutical(plantName, pharmaceuticalName);
      if (!herbalDrug) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Herbal drug background not found',
        });
      }
      res.json({
        success: true,
        data: herbalDrug,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch herbal drug background',
      });
    }
  }) as RequestHandler,

  update: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format',
      });
    }

    try {
      const updatedHerbalDrug = await HerbalDrugBackgroundService.update(id, req.body);
      res.json({
        success: true,
        data: updatedHerbalDrug,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 
                       error.message.includes('already exists') ? 409 : 
                       error.message.includes('Invalid reference') ? 400 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 
              statusCode === 409 ? 'Conflict' : 
              statusCode === 400 ? 'Bad Request' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to update herbal drug background',
      });
    }
  }) as RequestHandler,

  delete: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format',
      });
    }

    try {
      await HerbalDrugBackgroundService.delete(id);
      res.status(204).send();
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to delete herbal drug background',
      });
    }
  }) as RequestHandler,

  addSourcingBackground: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format',
      });
    }

    try {
      const updatedHerbalDrug = await HerbalDrugBackgroundService.addSourcingBackground(id, req.body);
      res.json({
        success: true,
        data: updatedHerbalDrug,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to add sourcing background',
      });
    }
  }) as RequestHandler,
};