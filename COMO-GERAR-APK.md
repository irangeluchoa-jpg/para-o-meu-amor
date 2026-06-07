# 📱 Como gerar o APK — Nossa Playlist

## Passo 1 — Instalar o Android Studio
1. Acesse: https://developer.android.com/studio
2. Baixe e instale normalmente
3. Na primeira abertura, aceite tudo e deixe baixar os SDKs (pode demorar ~10 min)

---

## Passo 2 — Instalar o Java (JDK 17)
1. Acesse: https://adoptium.net
2. Baixe o **Temurin JDK 17** e instale

---

## Passo 3 — Abrir o terminal na pasta do projeto
Abra o terminal (ou cmd no Windows) e entre na pasta:
```
cd caminho/para/music-player-base
```

---

## Passo 4 — Rodar os comandos (apenas uma vez)
```bash
npm install
npx cap add android
npm run cap:sync
```

---

## Passo 5 — Abrir no Android Studio
```bash
npm run cap:open
```
O Android Studio vai abrir automaticamente com o projeto.

---

## Passo 6 — Gerar o APK
1. No Android Studio, clique em **Build** no menu do topo
2. Clique em **Build Bundle(s) / APK(s)**
3. Clique em **Build APK(s)**
4. Aguarde ~2 minutos
5. Clique em **locate** na notificação que aparecer
6. O arquivo `app-debug.apk` estará pronto! ✅

---

## Passo 7 — Instalar no celular dela
1. Mande o `.apk` por WhatsApp ou Google Drive
2. No celular dela, abra o arquivo
3. Se pedir permissão para instalar app desconhecido, aceite
4. Pronto! 🎉

---

## Atualizar o app no futuro
Sempre que adicionar músicas ou mudar algo, rode apenas:
```bash
npm run cap:sync
```
E gere o APK novamente pelo Android Studio (Passo 6).

---

> 💡 As músicas e fotos ficam dentro da pasta `public/` do projeto.
> Adicione os arquivos lá e rode `npm run cap:sync` para atualizar.
