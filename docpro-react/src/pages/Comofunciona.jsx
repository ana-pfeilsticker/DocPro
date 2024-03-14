import React from 'react';
import './Comofunciona.css';

function Comofunciona() {

    return (
      <div className='container-como-funciona'><div className="Comofunciona">
      <div className="Passoapasso">
        <div className="Tituloesub">
          <div className="titulopasso">Passo a passo</div>
          <div className="subtitulopasso">Aprenda a gerar automaticamente seus documentos da forma certa!</div>
        </div>
        <div className="Passos">
          <div className="Passoum">
            <div className='num'>1</div>
            <div className="textoum">
              Criar o Layout do Documento no Word:<br/>
              Abra o Word.<br/>
              Marque as informações que você quer que sejam preenchidas automaticamente com chaves assim: { }. Por exemplo, se você quer o nome preenchido automaticamente, escreva assim: "Olá, meu nome é {`{nome}`}".<br/>
              Salve o arquivo.
            </div>
          </div>
          <div className="Passo2">
            <div className='num'>2</div>
            <div className="textoum">
              Cadastrar as Tags no Sistema:<br/>
              Vá para onde você cadastra novos documentos no sistema.<br/>
              Clique para criar um novo documento.<br/>
              Dê um nome para esse documento.<br/>
              Digite as palavras-chave das informações que você marcou no Word, separadas por espaço. Por exemplo, se você marcou o nome, cidade e email, escreva assim: "nome cidade email".
            </div>
          </div>
          <div className="Passo3">
            <div className='num'>3</div>
            <div className="textoum">
              Preencher o Documento:<br/>
              Vá para a parte dos clientes no sistema.<br/>
              Escolha o cliente para quem você quer fazer o documento.<br/>
              Clique para gerar um novo documento.<br/>
              Escolha o modelo que você criou no passo 2.<br/>
              Faça upload do arquivo do Word que você marcou com as chaves.<br/>
              Clique para preencher.
            </div>
          </div>
        </div>
      </div>
      <div className="Tagspadroes">
        <div className="Tituloesubtag">
          <div className="TagsPadrEs">Tags Padrões</div>
          <div className="AsTagsPadrEsSOPalavrasChavePrDefinidasPeloSistemaQueRepresentamInformaEsDosClientesJCadastradasComoNomeEndereOEEMailAoCriarUmDocumentoNoWordVocPodeColocarEssasTagsNosLugaresOndeDesejaQueAsInformaEsDosClientesApareAmPorExemploSeQuiserIncluirONomeDoClienteNoDocumentoBastaInserirATagCorrespondenteAoNomeNoLocalDesejado">
            As tags padrões são palavras-chave pré-definidas pelo sistema que representam informações dos clientes já cadastradas, como nome, endereço e e-mail. Ao criar um documento no Word, você pode colocar essas tags nos lugares onde deseja que as informações dos clientes apareçam. Por exemplo, se quiser incluir o nome do cliente no documento, basta inserir a tag correspondente ao nome no local desejado.
          </div>
        </div>
        <div className="Tags">
          <div className="Frame12">
            <div className="TagsPadrEsNomeNomeEmailEmailNacionalidadeNacionalidadeEstadoCivilEstadoCivilProfissOProfissaoNomeDoPaiNomePaiNomeDaMENomeMaeCpfCpfRgRgOrgOEmissorOrgEmissorNitNitCtpsCtpsSRieCtpsSerieCtpsEndereOEnderecoCepCepUfUfCelularCelularDataDeNascimentoDataNascimento">
            Tags Padrões<br/>
              Nome: {'{nome}'}<br/>
              Email: {'{email}'}<br/>
              Nacionalidade: {'{nacionalidade}'}<br/>
              Estado Civil: {'{estado_civil}'}<br/>
              Profissão: {'{profissao}'}<br/>
              Nome do Pai: {'{nome_pai}'}<br/>
              Nome da Mãe: {'{nome_mae}'}<br/>
              CPF: {'{cpf}'}<br/>
              Rg: {'{rg}'}<br/>
              Orgão emissor: {'{org_emissor}'}<br/>
              NIT: {'{nit}'}<br/>
              CTPS: {'{ctps}'}<br/>
              Série CTPS: {'{serie_ctps}'}<br/>
              Endereço: {'{endereco}'}<br/>
              CEP: {'{cep}'}<br/>
              UF: {'{uf}'}<br/>
              Celular: {'{celular}'}<br/>
              Data de Nascimento: {'{data_nascimento}'}<br/>
            </div>
          </div>
        </div>
      </div>
    </div></div>
      
    
      );
    };

export default Comofunciona;
