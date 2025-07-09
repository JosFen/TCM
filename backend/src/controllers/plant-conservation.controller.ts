// controllers/plant-conservation.controller.ts
import { Request, Response, RequestHandler } from "express";
import { PlantConservationService } from "../services/plant-conservation.service";

export const PlantConservationController = {
  create: (async (req: Request, res: Response) => {
    try {
      const conservation = await PlantConservationService.create(req.body);
      res.status(201).json({
        success: true,
        data: conservation
      });
    } catch (error: any) {
      const statusCode = error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 409 ? 'Conflict' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to create plant conservation'
      });
    }
  }) as RequestHandler,

  findAll: (async (_req: Request, res: Response) => {
    try {
      const conservations = await PlantConservationService.findAll();
      res.json({
        success: true,
        count: conservations.length,
        data: conservations
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch plant conservations'
      });
    }
  }) as RequestHandler,

  findOne: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format'
      });
    }

    try {
      const conservation = await PlantConservationService.findOne(id);
      if (!conservation) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Plant conservation not found'
        });
      }
      res.json({
        success: true,
        data: conservation
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch plant conservation'
      });
    }
  }) as RequestHandler,

  findByPlantId: (async (req: Request, res: Response) => {
    const plantId = parseInt(req.params.plantId);
    if (isNaN(plantId)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid plant ID format'
      });
    }

    try {
      const conservation = await PlantConservationService.findByPlantId(plantId);
      if (!conservation) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Plant conservation not found for this plant'
        });
      }
      res.json({
        success: true,
        data: conservation
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch plant conservation'
      });
    }
  }) as RequestHandler,

  update: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format'
      });
    }

    try {
      const updatedConservation = await PlantConservationService.update(id, req.body);
      res.json({
        success: true,
        data: updatedConservation
      });
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to update plant conservation'
      });
    }
  }) as RequestHandler,

  delete: (async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format'
      });
    }

    try {
      await PlantConservationService.delete(id);
      res.status(204).send();
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to delete plant conservation'
      });
    }
  }) as RequestHandler
};