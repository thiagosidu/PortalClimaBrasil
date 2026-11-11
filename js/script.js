const btn = document.getElementById("btnSalvarFavorito");

if (btn) {
    btn.onclick = () => {
        const c = document.getElementById("selectCidadeFav").value;
        const m = document.getElementById("msgFavorito");
        if (c) {
            localStorage.setItem("fav", c);
            m.textContent = `Favorita: ${c}`;
        }
    };
}

window.onload = () => {
    const s = localStorage.getItem("fav");
    if (s) {
        document.getElementById("msgFavorito").textContent = `Favorita: ${s}`;
        document.getElementById("selectCidadeFav").value = s;
    }
};

const formContato = document.querySelector("form");

if (formContato) {
    formContato.onsubmit = (e) => {
        e.preventDefault();
        const msg = document.getElementById("msgContatoSucesso");
        if (msg) {
            msg.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
            msg.style.color = "green";
        }
        formContato.reset();
    };
}