const express = require("express");
const router = express.Router();
const Panchayat = require("../model/Panchayat");

// Get one Panchayat by slug
router.get("/:slug", async (req, res) => {
  try {
    const data = await Panchayat.findOne({ slug: req.params.slug });
    if (!data) return res.status(404).json({ message: "Not Found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Panchayats (optional, for listing)
router.get("/", async (req, res) => {
  const data = await Panchayat.find();
  res.json(data);
});

module.exports = router;
