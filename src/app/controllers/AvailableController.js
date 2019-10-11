import AvailableService from '../services/AvailableService';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const searchDate = Number(date);

    const avaiable = await AvailableService.run({
      date: searchDate,
      provider_id: req.params.providerId,
    });

    return res.json(avaiable);
  }
}

export default new AvailableController();
