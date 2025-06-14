import aluno from "../models/Aluno.js";

class AlunoController {
    static async listarAlunos(req, res) {
        const listarAlunos = await aluno.find({});
        res.status(202).json(listarAlunos);
    }

    static async cadastrarAluno(req, res) {
        try {
            const novoAluno = await aluno.create(req.body);
            res.status(201).json({ message: "Criado com sucesso.", aluno: novoAluno });
        } catch (erro) {
            // 500 é erro interno do servidor:
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar aluno.` });
        }
    };

    static async listarAlunoPorId(req, res) {
        try {
            const id = req.params.id;
            const alunoEncontrado = await aluno.findById(id);
            res.status(200).json(alunoEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do aluno.` });
        }
    };

    static async excluirAluno(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Aluno excluído com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na exclusão.` });
        };
    };

    static async atualizarAluno(req, res) {
        try {
            const id = req.params.id;
            await aluno.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Aluno atualizado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na atualização.` });
        };
    };

}

export default AlunoController;