## **Guia de Execução do Projeto (Prisma e Seed)**

**Modelo Relacional**

![Modelo Relacional](./public/Modelo_Relacional/Modelo%20Relacional.png)

Link de acesso para o MR: https://dbdiagram.io/d/Mapa-Relacional-6913a5446735e1117054b244

---

## **1. Clonar o Repositório**

Faça a cópia do projeto para sua máquina:

```bash
git clone https://github.com/riquesouzza/Projeto_Final-Struct.git

cd Projeto_Final-Struct
```

---

## **2. Instalar Dependências**

Use o **pnpm** para instalar todas as dependências:

```bash
pnpm install
```

---

## **3. Configurar Variáveis de Ambiente**

Certifique-se de editar o arquivo `.env.example` para `.env` na raiz do projeto e modificar a variável:

```
AUTH_DISCORD_ID="Lista 2"
AUTH_DISCORD_SECRET="Lista 2"
```
---


## **4. Gerar o Prisma Client**

Execute a geração do cliente Prisma:

```bash
pnpm prisma generate
```

---

## **5. Aplicar Migrações**

Crie as tabelas definidas no schema:

```bash
pnpm prisma migrate dev --name init
```

---

## **6. Adicionar script e executar o Seed**

Adicione o script no (`package.jsons`):

```
"prisma": {
  "seed": "node prisma/seed.ts"
}
```

Caso o projeto possua um script de seed (`prisma/seed.ts`), execute:

```bash
pnpm prisma db seed
```

Esse comando insere dados iniciais, como usuários, jogos, categorias e outras informações necessárias.

---

## **7. (Opcional) Abrir o Prisma Studio**

Para visualizar e manipular o banco de dados de forma gráfica:

```bash
pnpm prisma studio
```