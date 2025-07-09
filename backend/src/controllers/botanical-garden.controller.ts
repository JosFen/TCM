// controllers/botanical-garden.controller.ts
import { Request, Response, RequestHandler } from "express";
import { BotanicalGardenService } from "../services/botanical-garden.service";

export const BotanicalGardenController = {
  create: (async (req: Request, res: Response) => {
    try {
      const garden = await BotanicalGardenService.create(req.body);
      res.status(201).json({
        success: true,
        data: garden,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 409 ? 'Conflict' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to create botanical garden',
      });
    }
  }) as RequestHandler,

  findAll: (async (_req: Request, res: Response) => {
    try {
      const gardens = await BotanicalGardenService.findAll();
      res.json({
        success: true,
        count: gardens.length,
        data: gardens,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch botanical gardens',
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
      const garden = await BotanicalGardenService.findOne(id);
      if (!garden) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Botanical garden not found',
        });
      }
      res.json({
        success: true,
        data: garden,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch botanical garden',
      });
    }
  }) as RequestHandler,

  findByName: (async (req: Request, res: Response) => {
    const name = req.params.name;
    if (!name || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Name parameter is required',
      });
    }

    try {
      const garden = await BotanicalGardenService.findByName(name);
      if (!garden) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Botanical garden not found',
        });
      }
      res.json({
        success: true,
        data: garden,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch botanical garden',
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
      const updatedGarden = await BotanicalGardenService.update(id, req.body);
      res.json({
        success: true,
        data: updatedGarden,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 
                       error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 
              statusCode === 409 ? 'Conflict' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to update botanical garden',
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
      await BotanicalGardenService.delete(id);
      res.status(204).send();
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to delete botanical garden',
      });
    }
  }) as RequestHandler,

  addPlant: (async (req: Request, res: Response) => {
    const gardenId = parseInt(req.params.gardenId);
    const plantId = parseInt(req.params.plantId);
    if (isNaN(gardenId) || isNaN(plantId)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format',
      });
    }

    try {
      const updatedGarden = await BotanicalGardenService.addPlant(gardenId, plantId);
      res.json({
        success: true,
        data: updatedGarden,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to add plant to garden',
      });
    }
  }) as RequestHandler,

  removePlant: (async (req: Request, res: Response) => {
    const gardenId = parseInt(req.params.gardenId);
    const plantId = parseInt(req.params.plantId);
    if (isNaN(gardenId) || isNaN(plantId)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format',
      });
    }

    try {
      const updatedGarden = await BotanicalGardenService.removePlant(gardenId, plantId);
      res.json({
        success: true,
        data: updatedGarden,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to remove plant from garden',
      });
    }
  }) as RequestHandler,
};