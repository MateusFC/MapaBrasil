function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function apiGetEstados( ){
  let ul = document.getElementById('displaydados');
  let loand = document.getElementById('loandigEstados');
  let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=id';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let dados = data;
    return dados.map(function(dados) {
      let Hmtl = createNode('tr');
      loand.style.display="none";
      Hmtl.innerHTML = 
      `<td>${dados.id}</td>
      <td>${dados.nome}</td>
      <td>${dados.sigla}</td>
      <td>${dados.regiao.nome}</td>
      `
      append(ul,Hmtl)
    })
  })
  .catch(function(error) {
    console.log(error);
  });
}

function apiGetCidade( ){
  let ul = document.getElementById('displaydadosCidades');
  let loand = document.getElementById('loandig');
  let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let dados = data;
    loand.style.display="none";
    return dados.map(function(dados) {
      let Hmtl = createNode('tr');
      Hmtl.innerHTML = 
        `<td>${dados.id}</td>
        <td>${dados.nome}</td>
        <td>${dados.municipio.nome}</td>
      `
      append(ul,Hmtl)
    })
  })
  .catch(function(error) {
    console.log(error);
  });
}
$(document).ready(function() {
  apiGetEstados();
  apiGetCidade();
} );

function apiGetMunicipios(){
  let ul = document.getElementById('displaydadosMunicipios');
  let loand = document.getElementById('loandigMunicipio');
  let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let dados = data;
    loand.style.display="none";
    return dados.map(function(dados) {
      let Hmtl = createNode('tr');
      Hmtl.innerHTML = 
        `<td>${dados.id}</td>
        <td>${dados.nome}</td>
        <td>${dados.microrregiao.nome}</td>
      `
      append(ul,Hmtl)
    })
  })
  .catch(function(error) {
    console.log(error);
  });
}
$(document).ready(function() {
  apiGetEstados();
  apiGetCidade();
  apiGetMunicipios();
} );