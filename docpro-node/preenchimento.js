const fs = require('fs');
const Docxtemplater = require('docxtemplater');
const PizZip = require('pizzip');
const path = require('path');

async function preencherDocumento(dicionario, caminhoModeloDocxTemporario) {
  // Carregue o conteúdo do arquivo DOCX
  const bufferModeloDocx = fs.readFileSync(caminhoModeloDocxTemporario, 'binary');

  // Inicialize o objeto PizZip
  const zip = new PizZip(bufferModeloDocx);

  // Inicialize o objeto Docxtemplater
  const doc = new Docxtemplater();
  doc.loadZip(zip);

  // Substitua as tags no documento com os valores do dicionário
  doc.setData(dicionario);

  // Renderize o documento
  try {
    doc.render();
  } catch (erro) {
    // Se houver um erro, trate de maneira adequada
    console.error('Erro ao renderizar o documento:', erro.message);
    throw new Error('Erro ao renderizar o documento');
  }

  // Gere o conteúdo do documento após a substituição
  const resultado = doc.getZip().generate({ type: 'nodebuffer' });

  // Retorne o buffer do arquivo editado
  return resultado;
}

module.exports = preencherDocumento;
