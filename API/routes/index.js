import express				from 'express';
import { RES }				from 'eip808-sdk';

const router = express.Router();

router.post('/publishAvailability', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.publishOffer(req.body, '0xf17f52151ebef6c7334fad080c5704d77216b732', 'ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f');
    res.json(plop);
});

router.get('/ListAvailabilities', (req, res) => {
    res.json('OK');
});

router.get('/ReadAvailability', (req, res) => {
    res.json('OK');
});

router.post('/requestReservation', (req, res) => {
    res.json('OK');
});

router.get('/ListReservations', (req, res) => {
    res.json('OK');
});

router.get('/ReadReservation', (req, res) => {
    res.json('OK');
});

export default router;
