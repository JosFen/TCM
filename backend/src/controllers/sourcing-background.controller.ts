// controllers/sourcing-background.controller.ts
import { Request, Response, RequestHandler } from "express";
import { SourcingBackgroundService } from "../services/sourcing-background.service";

export const SourcingBackgroundController = {
  create: (async (req: Request, res: Response) => {
    try {
      const sourcingBackground = await SourcingBackgroundService.create(req.body);
      res.status(201).json({
        success: true,
        data: sourcingBackground,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('already exists') ? 409 : 
                       error.message.includes('Invalid reference') ? 400 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 409 ? 'Conflict' : 
              statusCode === 400 ? 'Bad Request' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to create sourcing background',
      });
    }
  }) as RequestHandler,

  findAll: (async (_req: Request, res: Response) => {
    try {
      const sourcingBackgrounds = await SourcingBackgroundService.findAll();
      res.json({
        success: true,
        count: sourcingBackgrounds.length,
        data: sourcingBackgrounds,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch sourcing backgrounds',
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
      const sourcingBackground = await SourcingBackgroundService.findOne(id);
      if (!sourcingBackground) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Sourcing background not found',
        });
      }
      res.json({
        success: true,
        data: sourcingBackground,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch sourcing background',
      });
    }
  }) as RequestHandler,

  findByHerbalDrugId: (async (req: Request, res: Response) => {
    const herbalDrugId = parseInt(req.params.herbalDrugId);
    if (isNaN(herbalDrugId)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid herbal drug ID format',
      });
    }

    try {
      const sourcingBackground = await SourcingBackgroundService.findByHerbalDrugId(herbalDrugId);
      if (!sourcingBackground) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Sourcing background not found for this herbal drug',
        });
      }
      res.json({
        success: true,
        data: sourcingBackground,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch sourcing background',
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
      const updatedSourcingBackground = await SourcingBackgroundService.update(id, req.body);
      res.json({
        success: true,
        data: updatedSourcingBackground,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to update sourcing background',
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
      await SourcingBackgroundService.delete(id);
      res.status(204).send();
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to delete sourcing background',
      });
    }
  }) as RequestHandler,
};