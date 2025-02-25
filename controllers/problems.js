import Problem from "../models/settings/Problem.js";
import router from "../routes/problems.js";

export const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find();

    res.status(200).json(problems);
  } catch (err) {
    console.log(err);
    res.statu(500).json(err);
  }
};

export const addProblem = async (req, res) => {
  try {
    const newProblem = new Problem({
      title: req.body.title,
    });

    await newProblem.save();

    res.status(201).json("Muammo yaratildi!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const putProblem = ("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProblem = await Problem.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProblem) {
      return res.status(404).json({ message: "Muammo topilmadi." });
    }
    res.status(200).json(updatedProblem);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

export const deleteProblem = ("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProblem = await Problem.findByIdAndDelete(id);
    if (!deletedProblem) {
      return res.status(404).json({ message: "Muammo topilmadi." });
    }
    res.status(200).json({ message: "Muammo muvaffaqiyatli, olib tashlandi." });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
