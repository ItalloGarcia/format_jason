module.exports = async function (context, req) {
    try {
        const response = req.body; // Supõe que a resposta da API é passada no corpo da solicitação.

        // Formate a resposta, adicionando uma chave a cada valor.
        const formattedResponse = response.map((value, index) => ({
            chave: `chave_${index + 1}`,
            valor: value
        }));

        // Retorne a resposta formatada.
        context.res = {
            status: 200,
            body: formattedResponse
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: `Erro: ${error.message}`
        };
    }
};
