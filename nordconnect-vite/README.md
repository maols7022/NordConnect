# NordConnect

---

## Deploy til Vercel (steg for steg)
**Alternativ A – via GitHub (anbefalt):**
1. Opprett repo og push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NordConnect prototype"
   git branch -M main
   git remote add origin <URL-TIL-DITT-REPO>
   git push -u origin main
   ```
2. Gå til https://vercel.com → Logg inn → **Add New Project** → Importer repoet.
3. Vercel oppdager **Vite** automatisk. Hvis du må sette manuelt:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klikk **Deploy** → få delbar URL.

**Alternativ B – uten Git (dra og slipp):**
1. Kjør lokalt for å bygge:
   ```bash
   npm install
   npm run build
   ```
2. På https://vercel.com → **Add New Project** → **Import** → **Upload** mappen.
