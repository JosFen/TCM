import { Response, Request, RequestHandler } from "express";
import { PlantNomenclatureService } from "../services/plant-nomenclature.service";

export const PlantNomenclatureController = {
    create: (async (req: Request, res: Response) => {
        try {
            const nomenclature = await PlantNomenclatureService.create(req.body);
            res.status(201).json(nomenclature);
        } catch (error) {
            res.status(400).json({ 
                error: 'Failed to create plant nomenclature',
                details: error instanceof Error ? error.message : undefined
            });
        }
    }) as RequestHandler,

    findAll: (async (_req, res) =>{
        const nomenclatures = await PlantNomenclatureService.findAll();
        res.json({ "count": nomenclatures.length, "plant-nomenclatures": nomenclatures });
    }) as RequestHandler,

    findOne: (async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        const nomenclature = await PlantNomenclatureService.findOne(id);
        nomenclature ? res.json(nomenclature) : res.status(404).json({ error: 'Not found' });
    }) as RequestHandler,

    findByScientificName: (async (req: Request, res: Response) => {
        const name = req.params.name;
        const nomenclature = await PlantNomenclatureService.findByScientificName(name);
        nomenclature ? res.json(nomenclature) : res.status(404).json({ error: 'Not found' });
    }) as RequestHandler,

    update: (async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        try {
            const UpdatedPlant = await PlantNomenclatureService.update(id, req.body);
            res.status(200).json(UpdatedPlant);
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
            await PlantNomenclatureService.delete(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ 
                error: 'Delete failed',
                details: error instanceof Error ? error.message : undefined
            });
        }
    }) as RequestHandler
};