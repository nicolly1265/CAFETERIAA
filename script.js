let carrinho = [];
let total = 0;

function adicionar(item, preco) {
  carrinho.push({ item, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("carrinho");
  lista.innerHTML = "";
  carrinho.forEach((pedido) => {
    const li = document.createElement("li");
    li.textContent = `${pedido.item} - R$ ${pedido.preco}`;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarPedido() {
  alert("Pedido finalizado! Obrigado por comprar na Cafeteria Delícia ☕");
  carrinho = [];
  total = 0;
  atualizarCarrinho();
  function finalizarPedido() {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
  
    // Salvar pedido no localStorage (opcional)
    localStorage.setItem("pedido", JSON.stringify(carrinho));
    localStorage.setItem("total", total.toFixed(2));
  
    // Redirecionar para a página de pagamento
    window.location.href = "pagamento.html";
  }
  
}

function scrollToPedido() {
  document.getElementById("pedido").scrollIntoView({ behavior: "smooth" });
}
<script>
  const pedido = JSON.parse(localStorage.getItem("pedido")) || [];
  const total = localStorage.getItem("total") || "0.00";

  const lista = document.getElementById("resumoPedido");
  pedido.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.item} - R$ ${item.preco}`;
    lista.appendChild(li);
  });

  document.getElementById("totalPedido").textContent = total;
</script>
