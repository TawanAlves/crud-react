const Student = require("../models/Student");
const studentController = {
  index: async (req, res) => {
    try {
      const students = await Student.findAll({
        order: [
          ["fullname", "ASC"],
          ["birthdate", "DESC"],
        ],
        where: {
          // is_active: true
        },
      });
      console.log(students);
      res.status(200).json({ data: students || [] });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Erro ao listar estudantes" });
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const student = await Student.findByPk(id);
      if (!student) throw Error("Estudante não encontrado");
      res.status(200).json({ data: student });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Erro ao buscar estudante" });
    }
  },
  store: async (req, res) => {
    const { fullname, birthdate, classroom, school_average, is_active } =
      req.body;
    try {
      await Student.create({
        fullname,
        birthdate,
        classroom,
        school_average,
        is_active,
      });
      res.status(201).json({ message: "Estudante criado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Erro ao cadastrar estudante" });
    }
  },
  update: async (req, res) => {
    const { fullname, birthdate, classroom, school_average, is_active } =
      req.body;
    const { id } = req.params;

    try {
      await Student.update(
        {
          fullname,
          birthdate,
          classroom,
          school_average,
          is_active,
          updated_at: new Date(),
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({ message: "Estudante atualizado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Erro ao atualizar estudante" });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await Student.destroy({ where: { id } });
      res.status(200).json({ message: "Estudante deletado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Erro ao deletar usuário" });
    }
  },
};

module.exports = studentController;
