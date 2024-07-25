# Guide d'installation et de configuration d'un projet

## Étape 1 : Cloner le dépôt Git

-  Obtenez l'URL du dépôt Git :
Trouvez l'URL du dépôt sur la plateforme d'hébergement (GitHub, GitLab, etc.). Elle ressemble généralement à https://github.com/username/repo.git ou git@github.com:username/repo.git.

-  Ouvrez une ligne de commande :
Utilisez le terminal sur macOS/Linux ou l'invite de commandes/PowerShell sur Windows.

 - Naviguez jusqu'au répertoire où vous souhaitez cloner le dépôt :

```bash
cd /chemin/vers/le/repertoire
```
 - Clonez le dépôt avec Git :

```bash
git clone https://github.com/username/repo.git
```
 - ou, si vous utilisez SSH :

```bash
git clone git@github.com:username/repo.git
```
 -  Accédez au répertoire du projet cloné :

```bash
cd nom-du-repertoire
```

## Étape 2 : Installation des dépendances via Composer

 - Assurez-vous que Composer est installé :
Vérifiez l'installation de Composer avec :

```bash
composer --version
```
Si Composer n'est pas installé, suivez les instructions sur le site officiel de Composer.

 - Installez les dépendances :
Assurez-vous d'être dans le répertoire contenant le fichier composer.json (généralement à la racine du projet), puis exécutez :

```bash
composer install
```

## Étape 3 : Lancer le serveur avec Docker Compose

- Assurez-vous que Docker et Docker Compose sont installés :
Vérifiez leur installation avec :

```bash
docker --version
docker-compose --version
```
Si Docker ou Docker Compose ne sont pas installés, suivez les instructions sur le site officiel de Docker.

- Vérifiez le fichier docker-compose.yml :
Assurez-vous que le fichier docker-compose.yml est présent à la racine de votre projet et configure correctement les services nécessaires.

- Démarrez les services :
Exécutez la commande suivante pour lancer les services définis dans docker-compose.yml :

```bash
docker-compose up
```

Ou Optionnel : Exécuter en mode détaché (en arrière-plan) :
```bash
docker-compose up -d
```
