const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.post('/servicos', async (req, res) => {
  let create=await servico.create(
    req.body
  ).then(function (){
    return res.json({
      error: false,
      message: "Serviço criado com sucesso!"
    })
  }).catch(function(erro){
    return res.status(400).json({
      error: true,
      message: "Erro no cadastro do serviço."
    })    
  });  
});

  app.get('/clientes', function (req, res) {
    res.send('Sem bem-vindo a Services TI!');
  });

  app.get('/servicos', function (req, res) {
    res.send('Lista de serviços!');
  });

  app.get('/pedidos', function (req, res) {
    res.send('Faça o seu pedido!');
  });

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});
