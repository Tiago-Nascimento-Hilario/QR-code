const botao = document.getElementById('generate-btn');

function criarQrCode(){
  const input = document.getElementById('text-input');
const imgCode = document.getElementById('img-code');

  const valorInput = input.value
  if(!valorInput) return;
  botao.innerText = 'Gerando código....'
  imgCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valorInput}`
  
  container.classList.add('acitive');
}
function reload(){
  botao.innerText = 'Gerar QR Code'
  alert('Código gerado com sucesso!')
}