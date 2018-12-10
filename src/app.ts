import { PLATFORM } from "aurelia-framework";
import { Router } from 'aurelia-router';
import 'resources/css/aurelia-quest.scss';

export class App {
    router: Router;

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia Quest';
        config.options.pushState = true;
        config.options.root = '/';

        config.map([
            { route: ['lookatme'],          name: 'look-at-me',         moduleId: PLATFORM.moduleName('resources/views/prelude/look-at-me') },
            { route: ['', 'getstarted'],    name: 'get-started',        moduleId: PLATFORM.moduleName('resources/views/level-1/get-started') },
            { route: ['givemakeover'],      name: 'give-makeover',      moduleId: PLATFORM.moduleName('resources/views/level-1/give-makeover') },
            { route: ['gotoview'],          name: 'go-to-view',         moduleId: PLATFORM.moduleName('resources/views/level-1/go-to-view') },
            { route: ['usebinding'],        name: 'use-binding',        moduleId: PLATFORM.moduleName('resources/views/level-1/use-binding') },
            { route: ['useinject'],         name: 'use-inject',         moduleId: PLATFORM.moduleName('resources/views/level-2/use-inject') },
            { route: ['opendialog'],        name: 'open-dialog',        moduleId: PLATFORM.moduleName('resources/views/level-2/open-dialog') },
            { route: ['pubandsub'],         name: 'pub-and-sub',        moduleId: PLATFORM.moduleName('resources/views/level-2/pub-and-sub') },
            { route: ['talktoservice'],     name: 'talk-to-service',    moduleId: PLATFORM.moduleName('resources/views/level-2/talk-to-service') },
            { route: ['refreshbinding'],    name: 'refresh-binding',    moduleId: PLATFORM.moduleName('resources/views/level-2/refresh-binding') },
            { route: ['testwithjest'],      name: 'test-with-jest',     moduleId: PLATFORM.moduleName('resources/views/level-2/test-with-jest') },
            { route: ['authwithazure'],     name: 'auth-with-azure',    moduleId: PLATFORM.moduleName('resources/views/level-3/auth-with-azure') },
            { route: ['getazureprofile'],   name: 'get-azure-profile',  moduleId: PLATFORM.moduleName('resources/views/level-3/get-azure-profile') },
            { route: ['getskypestatus'],    name: 'get-skype-status',   moduleId: PLATFORM.moduleName('resources/views/level-3/get-skype-status') },
            { route: ['aureliatable'],      name: 'aurelia-table',      moduleId: PLATFORM.moduleName('resources/views/weapon-shop/aurelia-table') },
            { route: ['bootstraptoggle'],   name: 'bootstrap-toggle',   moduleId: PLATFORM.moduleName('resources/views/weapon-shop/bootstrap-toggle') },
            { route: ['dragula'],           name: 'dragula',            moduleId: PLATFORM.moduleName('resources/views/weapon-shop/dragula') },
            { route: ['momentjs'],          name: 'moment-js',          moduleId: PLATFORM.moduleName('resources/views/weapon-shop/moment-js') },
            { route: ['numeraljs'],         name: 'numeral-js',         moduleId: PLATFORM.moduleName('resources/views/weapon-shop/numeral-js') },
            { route: ['sweetalert2'],       name: 'sweetalert2',        moduleId: PLATFORM.moduleName('resources/views/weapon-shop/sweetalert2') },
            { route: ['reorderablerepeat'], name: 'reorderable-repeat', moduleId: PLATFORM.moduleName('resources/views/weapon-shop/reorderable-repeat') },
            { route: ['gettypes'],          name: 'get-types',          moduleId: PLATFORM.moduleName('resources/views/hint-book/get-types') },
            { route: ['usenpm'],            name: 'use-npm',            moduleId: PLATFORM.moduleName('resources/views/hint-book/use-npm') },
            { route: ['lookatloaders'],     name: 'look-at-loaders',    moduleId: PLATFORM.moduleName('resources/views/hint-book/look-at-loaders') },
        ]);
    }
}
