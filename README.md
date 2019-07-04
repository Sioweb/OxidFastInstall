# Oxid FastInstall

Mit diesem Modul, können Module installiert werden, ohne dass jedes einzeln geöffent werden muss. Ein Klick in der Liste in das Feld "Aktiv" ändert den Status des jeweiligen Modules.

**Hinweis:** Es ist zwingend erforderlich, dass nur ein Modul gleichzeitig aktiviert/deaktiviert wird. FastInstall sperrt die Toggle-Funktion deshalb, bis der Ajax-Request fertig ausgeführt wurde.

## Installation 

Installation via Composer:

```sh
composer require sioweb/oxid-fastinstall
```

Nach der Installation muss zwingend der Cache geleert werden. Die Module-Liste muss erneut geöffnet werden, damit das neue Template greift.