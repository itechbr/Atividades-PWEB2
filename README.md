# 📚 Atividades PWEB2

Repositório dedicado às atividades da disciplina **Programação para a Web 2** do IFPB.

---

## 📝 Sobre o Projeto

Este projeto reúne exercícios e exemplos práticos desenvolvidos durante o semestre, abordando conceitos fundamentais de programação web, lógica, manipulação de dados e testes automatizados em JavaScript.

---

## 📂 Estrutura dos Arquivos

- **Exam_object.js**  
  Exporta a classe `Exam`, utilizada para correção de provas e cálculos estatísticos.  
  Usado como módulo em testes automatizados.

- **Exam_object_input.js**  
  Sistema interativo de correção de provas via terminal, recebendo gabarito, pesos e respostas dos alunos.

- **Array_operations.js**  
  Exporta funções utilitárias para operações com arrays:  
  - `sum(arr)`: soma dos elementos  
  - `product(arr)`: produto dos elementos  
  - `sumOdds(arr)`: soma dos elementos ímpares

- **Array_operation_test.js**  
  Testes automatizados para as funções de operações com arrays.

- **exam_test.js**  
  Testes automatizados para a classe `Exam`.

  **ContryFlags**
- **CountryFlags/index.html**  
  Página web que exibe bandeiras de países utilizando a API REST Countries.
- **CountryFlags/script.js**  
  Script JavaScript que busca e exibe as bandeiras na página HTML.
- **CountryFlags/style.css**  
  Estilos CSS para a página de bandeiras.
  

---

## 🚀 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Atividades-PWEB2.git
   cd Atividades-PWEB2
   ```

2. **Execute os arquivos JavaScript:**
   ```bash
   node Exam_object_input.js
   ```

3. **Execute os testes automatizados:**
   ```bash
   node --test Array_operation_test.js
   node --test exam_test.js
   ```

   > Para rodar os testes, é necessário o Node.js versão 18 ou superior.

---

## 💡 Exemplos de Uso

- **Correção de provas:**  
  Importe a classe `Exam` em seu código ou utilize o sistema interativo para calcular notas, médias, maiores e menores valores.

- **Operações com vetores:**  
  Importe as funções `sum`, `product` e `sumOdds` para realizar operações matemáticas em arrays.

---

## 👨‍💻 Autor

- **Nome:** Ícaro Pontes
- **Instituição:** IFPB
- **Disciplina:** Programação para a Web 2

---

## 📢 Observações

- Sinta-se livre para adaptar os exemplos conforme sua necessidade.
- Sugestões e melhorias são bem-vindas!

---
