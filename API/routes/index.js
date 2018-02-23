noimport express				from 'express';
import { RES, BTU }				from 'eip808-sdk';

const router = express.Router();

router.post('/publishAvailability', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.publishOffer(req.body, '0xf17f52151ebef6c7334fad080c5704d77216b732', 'ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f');
    res.json(plop);
});

router.get('/ListAvailabilities', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.listOffers();
    res.json(plop);
});

router.get('/ReadAvailability/:id', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.readOffer(req.params.id);
    res.json(plop);
});

router.post('/requestReservation/:id', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.requestReservation(req.params.id, '0xf17f52151ebef6c7334fad080c5704d77216b732', 'ae6ae8e5ccbfb0459040');
    res.json(plop);
});

router.get('/ListReservations', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.listReservations();
    res.json(plop);
});

router.get('/ReadReservation', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.readReservation();
    res.json(plop);
});

router.get('/ConfirmReservation/:id', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.confirmReservation(true, req.params.id);
    res.json(plop);
});

router.get('/CancelReservation/:id', async (req, res) => {
    const RESContract = await RES;
    const plop = await RESContract.confirmReservation(false, req.params.id);
    res.json(plop);
});

router.get('/BalanceOf', async (req, res) => {
    const BTUContract = await BTU;
    const plop = await BTUContract.getBalanceOf(0xf17f52151ebef6c7334fad080c5704d77216b732);
    res.json(plop);
});


export default router;
