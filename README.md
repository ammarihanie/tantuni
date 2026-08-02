# Tantuni Grill

Site web du restaurant turc **Tantuni Grill** à Combs-la-Ville.

## Lancer en local

```bash
npm install
npm run dev
```

## Docker (local)

```bash
docker compose up --build -d
```

Site : [http://localhost:8080](http://localhost:8080)

## Dokploy

1. Créer un service **Compose**
2. Pointer le dépôt Git + branche
3. Compose Path : `./docker-compose.dokploy.yml`
4. Variable d’environnement `APP_DOMAIN=ton-domaine.com` (ou domaine via l’UI Dokploy)
5. Deploy

## Build

```bash
npm run build
npm run preview
```
