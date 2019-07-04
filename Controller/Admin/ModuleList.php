<?php

namespace Sioweb\Oxid\FastInstall\Controller\Admin;

class ModuleList extends ModuleList_parent
{
    public function render()
    {
        parent::render();
        return 'fast_install_module_list.tpl';
    }
}
