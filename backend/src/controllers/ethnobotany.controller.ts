// controllers/ethnobotany.controller.ts
import { Request, Response, RequestHandler } from "express";
import { EthnobotanyService } from "../services/ethnobotany.service";

export const EthnobotanyController = {
  create: (async (req: Request, res: Response) => {
    try {
      const ethnobotany = await EthnobotanyService.create(req.body);
      res.status(201).json({
        success: true,
        data: ethnobotany,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 409 ? 'Conflict' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to create ethnobotany record',
      });
    }
  }) as RequestHandler,

  findAll: (async (_req: Request, res: Response) => {
    try {
      const ethnobotanies = await EthnobotanyService.findAll();
      res.json({
        success: true,
        count: ethnobotanies.length,
        data: ethnobotanies,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch ethnobotany records',
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
      const ethnobotany = await EthnobotanyService.findOne(id);
      if (!ethnobotany) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Ethnobotany record not found',
        });
      }
      res.json({
        success: true,
        data: ethnobotany,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch ethnobotany record',
      });
    }
  }) as RequestHandler,

  findByPlantId: (async (req: Request, res: Response) => {
    const plantId = parseInt(req.params.plantId);
    if (isNaN(plantId)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid plant ID format',
      });
    }

    try {
      const ethnobotany = await EthnobotanyService.findByPlantId(plantId);
      if (!ethnobotany) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Ethnobotany record not found for this plant',
        });
      }
      res.json({
        success: true,
        data: ethnobotany,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch ethnobotany record',
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
      const updatedEthnobotany = await EthnobotanyService.update(id, req.body);
      res.json({
        success: true,
        data: updatedEthnobotany,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 
                       error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 
              statusCode === 409 ? 'Conflict' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to update ethnobotany record',
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
      await EthnobotanyService.delete(id);
      res.status(204).send();
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to delete ethnobotany record',
      });
    }
  }) as RequestHandler,
};