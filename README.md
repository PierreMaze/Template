### Bonjour ! J'ai faits un C.R.U.D avec une partie frontend / backend en ReactJs & NodeJs.

## Vous préfèrez avoir un visuel ? Vous n'avez qu'à suivre les étapes ci-dessous ⬇⬇⬇

# Veuillez suivre les étapes pour lancer le projet :

1. . Crée vos ".env" et remplissez-les avec l'aide des models dans le ".env.sample" dans le dossier racine du frontend et du backend.

2. Dans le dossier racine du projet, lancer votre terminal préféré et faites un `npm i --yes` pour initer le projet.

Vous devriez voir quelques fichiers "package-lock.json" se crées avec leurs dossiers "node_modules".

Si ce n'est pas le cas, vous devez lancer cette commande dans le terminal et dans l'ordre :

    npm i

// Il y a une vulnérabilité ? lançait la commande suivante ⬇⬇⬇

    npm audit fix

// Accedez au frontend

    cd frontend

// Installer les node_modules avec le package-lock.json

    npm i

// Il y a une vulnérabilité ? lançait la commande suivante ⬇⬇⬇

    npm audit fix

// Revenir au parent

    cd ..

// Accedez au backend

    cd backend

// Installer les node_modules avec le package-lock.json

    npm i

// Il y a une vulnérabilité ? lançait la commande suivante ⬇⬇⬇

    npm audit fix

3. Lancer la création de la base de données avec la commande suiivante :

   npm run migrate

// Si cela ne fonctionne pas, il faudra l'importer depuis le logiciel de gestionnaire de base de données relationnel. Plusieurs tutoriels sont disponibles sur Youtube.

4. Faites un `npm run dev` pour lancer le projet, une fois que vous avez tout installer et crée vos variables d'environement (.env).

### Enjoy !
