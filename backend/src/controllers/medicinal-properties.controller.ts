// controllers/medicinal-properties.controller.ts
import { Request, Response, RequestHandler } from "express";
import { MedicinalPropertiesService } from "../services/medicinal-properties.service";

export const MedicinalPropertiesController = {
  create: (async (req: Request, res: Response) => {
    try {
      const medicinalProperty = await MedicinalPropertiesService.create(req.body);
      res.status(201).json({
        success: true,
        data: medicinalProperty,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 409 ? 'Conflict' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to create medicinal property',
      });
    }
  }) as RequestHandler,

  findAll: (async (_req: Request, res: Response) => {
    try {
      const medicinalProperties = await MedicinalPropertiesService.findAll();
      res.json({
        success: true,
        count: medicinalProperties.length,
        data: medicinalProperties,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch medicinal properties',
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
      const medicinalProperty = await MedicinalPropertiesService.findOne(id);
      if (!medicinalProperty) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Medicinal property not found',
        });
      }
      res.json({
        success: true,
        data: medicinalProperty,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch medicinal property',
      });
    }
  }) as RequestHandler,

  findByPharmaceuticalName: (async (req: Request, res: Response) => {
    const name = req.params.name;
    if (!name || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Name parameter is required',
      });
    }

    try {
      const medicinalProperty = await MedicinalPropertiesService.findByPharmaceuticalName(name);
      if (!medicinalProperty) {
        return res.status(404).json({
          success: false,
          error: 'Not Found',
          message: 'Medicinal property not found',
        });
      }
      res.json({
        success: true,
        data: medicinalProperty,
      });
    } catch (error : any) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to fetch medicinal property',
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
      const updatedMedicinalProperty = await MedicinalPropertiesService.update(id, req.body);
      res.json({
        success: true,
        data: updatedMedicinalProperty,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 
                       error.message.includes('already exists') ? 409 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 
              statusCode === 409 ? 'Conflict' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to update medicinal property',
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
      await MedicinalPropertiesService.delete(id);
      res.status(204).send();
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Failed to delete medicinal property',
      });
    }
  }) as RequestHandler,

  addHerbalDrug: (async (req: Request, res: Response) => {
    const medicinalPropertyId = parseInt(req.params.medicinalPropertyId);
    const herbalDrugId = parseInt(req.params.herbalDrugId);
    if (isNaN(medicinalPropertyId) || isNaN(herbalDrugId)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format',
      });
    }

    try {
      const updatedMedicinalProperty = await MedicinalPropertiesService.addHerbalDrug(medicinalPropertyId, herbalDrugId);
      res.json({
        success: true,
        data: updatedMedicinalProperty,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to add herbal drug to medicinal property',
      });
    }
  }) as RequestHandler,

  removeHerbalDrug: (async (req: Request, res: Response) => {
    const medicinalPropertyId = parseInt(req.params.medicinalPropertyId);
    const herbalDrugId = parseInt(req.params.herbalDrugId);
    if (isNaN(medicinalPropertyId) || isNaN(herbalDrugId)) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Invalid ID format',
      });
    }

    try {
      const updatedMedicinalProperty = await MedicinalPropertiesService.removeHerbalDrug(medicinalPropertyId, herbalDrugId);
      res.json({
        success: true,
        data: updatedMedicinalProperty,
      });
    } catch (error : any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        error: statusCode === 404 ? 'Not Found' : 'Bad Request',
        message: error instanceof Error ? error.message : 'Failed to remove herbal drug from medicinal property',
      });
    }
  }) as RequestHandler,
};