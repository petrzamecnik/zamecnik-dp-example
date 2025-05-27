# Pouziti minimalistického node.js obrazu
FROM node:18-alphine AS builder

# Zkopírování souborů definující balíčků, následná instalace závislostí bey dev dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --omit=dev

# Zkopírování zbytku kódu
COPY . .

# Použití minimální distroless obrazu pro node.js
# neobsahuje shell, správce balíčků ani další bežné utility,
# drasticky snižuje potenciální plochu útoku
FROM gcr.io/distroless/nodej18-debian11

# Definování pracovního adresáře
WORKDIR /app

# Zkopírování nezbytných artifaktů
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/server.js ./server.js

# Přepnutí na neprivilegovaného uživatele
USER noroot

CMD ["server.js"]

