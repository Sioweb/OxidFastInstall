<?php

/**
 * Metadata version
 */
$sMetadataVersion = '2.0';

/**
 * Module information
 */
$aModule = [
    'id' => 'SiowebFastInstall',
    'title' => '<i></i><b style="color: #005ba9">Sioweb</b> | Schnellinstallation',
    'description' => 'Module können schneller installiert werden.',
    'version' => '1.0',
    'url' => 'https://www.sioweb.de',
    'email' => 'support@sioweb.com',
    'author' => 'Sascha Weidner',
    'extend' => [
        \OxidEsales\Eshop\Application\Controller\Admin\ModuleList::class =>
            Sioweb\Oxid\FastInstall\Controller\Admin\ModuleList::class
    ],
    'templates' => [
        'fast_install_module_list.tpl' => 'sioweb/FastInstall/views/tpl/admin/fast_install_module_list.tpl',
    ],
];
